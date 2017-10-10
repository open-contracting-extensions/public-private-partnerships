#!/usr/bin/env node

var nunjucks = require('nunjucks')
var program = require('commander');
var fs = require('fs');
var watch = require('watch');
var path = require('path');
 
program
  .option('-w --watch')
  .option('-i --i18n')
  .parse(process.argv);

var template_folder = path.join(__dirname, 'templates')

var translations = {}
var translation_object = {
  "charset": "utf-8",

  "headers": {
    "content-type": "text/plain; charset=utf-9",
  },
  "translations": {
     "" : translations
  }
}

var opts = {"include": ['\\.html$', '\\.jinja$']}
nunjucks.compiler.Compiler.prototype.originalFunCall = nunjucks.compiler.Compiler.prototype.compileFunCall

   

var newFunCall = function(node, frame) {
  if (node.name.value == 'gettext') {
    translations[node.args.children[0].value] = {"msgid": node.args.children[0].value, "msgstr": [""], 
      "comments": {"reference": this.templateName + " (lineno " + node.args.children[0].lineno + ", colno " + node.args.children[0].colno + ")"}
    }
  }
  this.originalFunCall(node, frame)
}

nunjucks.compiler.Compiler.prototype.compileFunCall = newFunCall

fs.writeFile(path.join(__dirname, 'templates.js'), nunjucks.precompile(template_folder, opts))

//console.log(translation_object)
//console.log(translations)


if (program.i18n) {
  headers = {"Project-Id-Version": "OCDSshow 0.1",
             "MIME-Version": "1.0",
             "Content-Type": "text/plain; charset=UTF-8",
             "Content-Transfer-Encoding": "8bit"}

  var PO = require('pofile')
  var po = new PO();
  po.headers = headers
  Object.keys(translations).forEach(function (item) {
    var value = translations[item]
    var poitem = new PO.Item()
    poitem.msgid = value.msgid
    poitem.msgstr = value.msgstr
    poitem.comments = [value.comments.reference]
    po.items.push(poitem)
  })
  po.save('ocds-show.pot', function (err) {
  });
}

if (program.watch) {
   watch.watchTree(template_folder, {'interval': 0.1}, function (f, curr, prev) {
     fs.writeFile(path.join(__dirname, 'templates.js'), nunjucks.precompile(template_folder, opts))
   })
}
