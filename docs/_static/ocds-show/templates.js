(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<h3 class=\"tab-heading\">\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title")) {
output += "\n  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += ") </small>\n  ";
;
}
else {
output += "\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += "\n  ";
;
}
output += " ";
output += runtime.suppressValue((lineno = 5, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award")])), env.opts.autoescape);
output += "\n\n</h3>\n<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description"), env.opts.autoescape);
output += " \n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n        <dl> \n           <dt class=\"dt-large dt-inline dt-gap\">\n\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 18, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 18, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"status"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline dd-gap\">\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status")) {
output += "\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status"), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               ";
output += runtime.suppressValue((lineno = 24, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n             ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-inline\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 29, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 29, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"date"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date")) {
output += "\n                ";
output += runtime.suppressValue((lineno = 33, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "award"),"date"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 35, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-inline\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 40, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 40, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"value"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline\">\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value"),"amount"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 45, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value"),"currency"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 47, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 52, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 52, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"contractPeriod"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 55, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 57, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 59, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t<strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 61, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 63, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 65, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"durationInDays")) {
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 69, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 70, colno = 57, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"maxExtentDate")) {
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 74, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 75, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n           </dd>\n\n         </dl> \n      </div>\n    </div>\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 89, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Preferred Bidders"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 89, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"preferredBidders"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"preferredBidders");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("supplier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_4),"id"));
frame.set("organization", t_5, true);
if(frame.topLevel) {
context.setVariable("organization", t_5);
}
if(frame.topLevel) {
context.addExport("organization", t_5);
}
output += "\n                ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_4),"id"))) {
output += "\n                  ";
var t_6;
t_6 = t_4;
frame.set("organization", t_6, true);
if(frame.topLevel) {
context.setVariable("organization", t_6);
}
if(frame.topLevel) {
context.addExport("organization", t_6);
}
output += "\n                ";
;
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization_ppp.html", false, "award.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"requirementResponses")) {
output += "\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                 ";
output += runtime.suppressValue((lineno = 113, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Reqirement Responses"])), env.opts.autoescape);
output += " \n              </h3>\n            </div>\n                ";
var t_11;
t_11 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"requirementResponses");
frame.set("requirementResponses", t_11, true);
if(frame.topLevel) {
context.setVariable("requirementResponses", t_11);
}
if(frame.topLevel) {
context.addExport("requirementResponses", t_11);
}
output += "\n                ";
env.getTemplate("requirement_responses.html", false, "award.html", null, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
t_12.render(context.getVariables(), frame, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
output += t_13
output += "\n          </div>\n        </div>\n      </div>\n    ";
})});
}
output += "\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items")) {
output += "\n\t\t\t\t\t";
var t_16;
t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items");
frame.set("items", t_16, true);
if(frame.topLevel) {
context.setVariable("items", t_16);
}
if(frame.topLevel) {
context.addExport("items", t_16);
}
output += "\n\t\t\t\t\t";
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "award");
frame.set("parent", t_17, true);
if(frame.topLevel) {
context.setVariable("parent", t_17);
}
if(frame.topLevel) {
context.addExport("parent", t_17);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "award.html", null, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
t_18.render(context.getVariables(), frame, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
output += t_19
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 133, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 137, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents")) {
output += "\n\t\t\t\t\t";
var t_22;
t_22 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents");
frame.set("documents", t_22, true);
if(frame.topLevel) {
context.setVariable("documents", t_22);
}
if(frame.topLevel) {
context.addExport("documents", t_22);
}
output += "\n\t\t\t\t\t";
var t_23;
t_23 = runtime.contextOrFrameLookup(context, frame, "award");
frame.set("parent", t_23, true);
if(frame.topLevel) {
context.setVariable("parent", t_23);
}
if(frame.topLevel) {
context.addExport("parent", t_23);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "award.html", null, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
t_24.render(context.getVariables(), frame, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
output += t_25
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 153, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 157, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"agreedMetrics")) {
output += "\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 170, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n              ";
var t_28;
t_28 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"agreedMetrics");
frame.set("metrics", t_28, true);
if(frame.topLevel) {
context.setVariable("metrics", t_28);
}
if(frame.topLevel) {
context.addExport("metrics", t_28);
}
output += "\n              ";
var t_29;
t_29 = runtime.contextOrFrameLookup(context, frame, "award");
frame.set("parent", t_29, true);
if(frame.topLevel) {
context.setVariable("parent", t_29);
}
if(frame.topLevel) {
context.addExport("parent", t_29);
}
output += "\n              ";
env.getTemplate("metrics.html", false, "award.html", null, function(t_32,t_30) {
if(t_32) { cb(t_32); return; }
t_30.render(context.getVariables(), frame, function(t_33,t_31) {
if(t_33) { cb(t_33); return; }
output += t_31
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 183, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 187, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Agreed Metrics provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")) {
output += "\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 200, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Evaluation Indicators"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            <dl> \n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"discountRate")) {
output += "\n                <dt class=\"dt-large dt-inline dt-gap\">\n                  ";
output += runtime.suppressValue((lineno = 207, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Discount Rate"])), env.opts.autoescape);
output += "\n                </dt>\n                <dd class=\"dd-large dd-inline dd-gap\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"discountRate"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 210, colno = 72, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators"),"discountRate"])), env.opts.autoescape);
output += "\n                </dd>\n              ";
;
}
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"discountRateDetails")) {
output += "\n                <dt class=\"dt-small\">\n                  ";
output += runtime.suppressValue((lineno = 215, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Discount Rate Details"])), env.opts.autoescape);
output += "\n                </dt>\n                <dd class=\"dd-small\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"discountRateDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 218, colno = 79, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators"),"discountRateDetails"])), env.opts.autoescape);
output += "\n                </dd>\n              ";
;
}
output += "\n\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"riskPremium")) {
output += "\n                <dt class=\"dt-large dt-inline dt-gap\">\n                  ";
output += runtime.suppressValue((lineno = 224, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Risk Premium"])), env.opts.autoescape);
output += "\n                </dt>\n                <dd class=\"dd-large dd-inline dd-gap\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"riskPremium"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 227, colno = 71, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators"),"riskPremium"])), env.opts.autoescape);
output += "\n                </dd>\n              ";
;
}
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"riskPremiumDetails")) {
output += "\n                <dt class=\"dt-small\">\n                  ";
output += runtime.suppressValue((lineno = 232, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Risk Premium Details"])), env.opts.autoescape);
output += "\n                </dt>\n                <dd class=\"dd-small\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"riskPremiumDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 235, colno = 78, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators"),"riskPremiumDetails"])), env.opts.autoescape);
output += "\n                </dd>\n              ";
;
}
output += "\n\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValue")) {
output += "\n                <dt class=\"dt-large dt-inline dt-gap\">\n                  ";
output += runtime.suppressValue((lineno = 241, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Net Present Value"])), env.opts.autoescape);
output += "\n                </dt>\n                <dd class=\"dd-large dd-inline dd-gap\">\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValue")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 244, colno = 91, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValue"),"amount"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValue")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 245, colno = 84, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValue"),"currency"])), env.opts.autoescape);
output += "\n                </dd>\n              ";
;
}
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValueDetails")) {
output += "\n                <dt class=\"dt-small\">\n                  ";
output += runtime.suppressValue((lineno = 250, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Net Present Value Details"])), env.opts.autoescape);
output += "\n                </dt>\n                <dd class=\"dd-small\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators")),"netPresentValueDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 253, colno = 82, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"evaluationIndicators"),"netPresentValueDetails"])), env.opts.autoescape);
output += "\n                </dd>\n              ";
;
}
output += "\n             </dl> \n          </div>\n        </div>\n      </div>\n    </div>\n    ";
;
}
output += "\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["awards.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"awards\">\n  ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "awards");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("award", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n    ";
env.getTemplate("award.html", false, "awards.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n      <hr>\n    ";
;
}
output += "\n  ";
})});
}
}
frame = frame.pop();
output += "\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base_html.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!doctype html>\n<html class=\"no-js\" lang=\"\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <title> </title>\n        <meta name=\"description\" content=\"\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n        <link rel=\"stylesheet\" href=\"css/normalize.min.css\">\n        <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n        <link rel=\"stylesheet\" href=\"css/custom.css\">\n\n    </head>\n    <body>\n\n";
env.getTemplate("release.html", false, "base_html.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n\n    </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["bid.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"bid-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-body\">\n          <dl> \n            <dt class=\"dt-large dt-inline\">\n              ";
output += runtime.suppressValue((lineno = 7, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n            </dt>\n            <dd class=\"dd-large dd-inline\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"status")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 11, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "bid"),"status"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 13, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n            </dd>\n            <dt class=\"dt-large dt-inline dt-gap\">\n              ";
output += runtime.suppressValue((lineno = 17, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n            </dt>\n            <dd class=\"dd-large dd-inline dd-gap\">\n              ";
output += runtime.suppressValue((lineno = 20, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "bid"),"value"])), env.opts.autoescape);
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"value")),"amount")) {
output += "\n                ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"value")),"amount")), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 23, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"value"),"amount"])), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"value")),"currency"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 25, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"value"),"currency"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 27, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n            </dd>\n\n            <dt class=\"dt-large dt-inline\">\n              ";
output += runtime.suppressValue((lineno = 32, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "\n            </dt>\n            <dd class=\"dd-large dd-inline\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"date")) {
output += "\n                ";
output += runtime.suppressValue((lineno = 36, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "bid"),"date"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 38, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date not provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n            </dd>\n          </dl> \n        </div>\n      </div>\n    </div>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"requirementResponses")) {
output += "\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n               ";
output += runtime.suppressValue((lineno = 53, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Reqirement Responses"])), env.opts.autoescape);
output += " \n            </h3>\n          </div>\n              ";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"requirementResponses");
frame.set("requirementResponses", t_1, true);
if(frame.topLevel) {
context.setVariable("requirementResponses", t_1);
}
if(frame.topLevel) {
context.addExport("requirementResponses", t_1);
}
output += "\n              ";
env.getTemplate("requirement_responses.html", false, "bid.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n        </div>\n      </div>\n    </div>\n  ";
})});
}
output += "\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n             ";
output += runtime.suppressValue((lineno = 68, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers"])), env.opts.autoescape);
output += " \n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"tenderers");
if(t_8) {var t_7 = t_8.length;
for(var t_6=0; t_6 < t_8.length; t_6++) {
var t_9 = t_8[t_6];
frame.set("tenderer", t_9);
frame.set("loop.index", t_6 + 1);
frame.set("loop.index0", t_6);
frame.set("loop.revindex", t_7 - t_6);
frame.set("loop.revindex0", t_7 - t_6 - 1);
frame.set("loop.first", t_6 === 0);
frame.set("loop.last", t_6 === t_7 - 1);
frame.set("loop.length", t_7);
output += "\n            <div class=\"col-md-12\">\n              ";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_9),"id"));
frame.set("organization", t_10, true);
if(frame.topLevel) {
context.setVariable("organization", t_10);
}
if(frame.topLevel) {
context.addExport("organization", t_10);
}
output += "\n              ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_9),"id"))) {
output += "\n                ";
var t_11;
t_11 = t_9;
frame.set("organization", t_11, true);
if(frame.topLevel) {
context.setVariable("organization", t_11);
}
if(frame.topLevel) {
context.addExport("organization", t_11);
}
output += "\n              ";
;
}
output += "\n              ";
env.getTemplate("organization.html", false, "bid.html", null, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
t_12.render(context.getVariables(), frame, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
output += t_13
output += "\n            </div>\n          ";
})});
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"documents")) {
output += "\n        ";
var t_16;
t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bid")),"documents");
frame.set("documents", t_16, true);
if(frame.topLevel) {
context.setVariable("documents", t_16);
}
if(frame.topLevel) {
context.addExport("documents", t_16);
}
output += "\n        ";
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "bid");
frame.set("parent", t_17, true);
if(frame.topLevel) {
context.setVariable("parent", t_17);
}
if(frame.topLevel) {
context.addExport("parent", t_17);
}
output += "\n        ";
env.getTemplate("documents.html", false, "bid.html", null, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
t_18.render(context.getVariables(), frame, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
output += t_19
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 97, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 101, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["bids.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n           ";
output += runtime.suppressValue((lineno = 3, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Bid Statistics"])), env.opts.autoescape);
output += "\n        </h3>\n      </div>\n\n      <div class=\"table-responsive\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>";
output += runtime.suppressValue((lineno = 11, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\n            <th>";
output += runtime.suppressValue((lineno = 12, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "</th>\n            <th>";
output += runtime.suppressValue((lineno = 13, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += "</th>\n            <th>";
output += runtime.suppressValue((lineno = 14, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Measure"])), env.opts.autoescape);
output += "</th>\n            <th>";
output += runtime.suppressValue((lineno = 15, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "</th>\n          </tr>\n        </thead>\n        <tbody>\n          ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bids")),"statistics");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("statistic", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n            <tr>\n              <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 21, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"title"])), env.opts.autoescape);
output += " </td>\n              <td>";
output += runtime.suppressValue((lineno = 22, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"date"])), env.opts.autoescape);
output += " </td>\n              <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"measure"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 23, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"measure"])), env.opts.autoescape);
output += " </td>\n              <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"value"])), env.opts.autoescape);
output += " </td>\n            </tr>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </tbody>\t\n      </table>\n      </div>\n\n\n\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n           ";
output += runtime.suppressValue((lineno = 37, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Bids"])), env.opts.autoescape);
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n        <section id=\"bids\">\n          ";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "bids")),"details");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("bid", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n            ";
env.getTemplate("bid.html", false, "bids.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n            ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n              <hr>\n            ";
;
}
output += "\n          ";
})});
}
}
frame = frame.pop();
output += "\n        </section>\n      </div>\n    </div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["buyer.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "buyer")) {
output += "\n\t<aside id=\"buyer\" class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h2>\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 4, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"])), env.opts.autoescape);
output += " \n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<h2>\n\t\t\t\t\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"name"), env.opts.autoescape);
output += "</small>\n\t\t\t\t</h2>\n\t\t\t\t<p>\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")) {
output += "\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 16, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 27, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 30, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 41, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 45, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")) {
output += "\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 78, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 82, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")) {
output += "\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 90, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 97, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 98, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 99, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"https://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("identifier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"https://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 125, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifers"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 129, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t</p>\n\t\t\t</div>\n\t</aside>\n";
;
}
else {
output += "\n\t<aside id=\"buyer\" class=\"panel panel-danger\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h2>\n\t\t\t\t";
output += runtime.suppressValue((lineno = 140, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Buyer data provided"])), env.opts.autoescape);
output += "\n\t\t\t</h2>\n\t\t</div>\n\t</aside>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contract.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contract-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\">\n  <h3>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 2, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += " ";
output += runtime.suppressValue((lineno = 2, colno = 94, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract")])), env.opts.autoescape);
output += "\n  </h3>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 9, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 14, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"id"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 16, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 25, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award ID"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 30, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 32, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award ID provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 43, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 48, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 50, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 59, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 64, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"status"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 66, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 77, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\t<!-- add time hover over? -->\n          <p>\n            ";
output += runtime.suppressValue((lineno = 82, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"period"])), env.opts.autoescape);
output += "\n\n            <strong>";
output += runtime.suppressValue((lineno = 84, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 87, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"startDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 89, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n          </p>\n          <p>\n            <strong>";
output += runtime.suppressValue((lineno = 93, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 96, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"endDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 98, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 108, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <h4>\n            ";
output += runtime.suppressValue((lineno = 113, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"value"])), env.opts.autoescape);
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 116, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"amount"])), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"currency"), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 118, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"currency"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              ";
output += runtime.suppressValue((lineno = 120, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n            ";
;
}
output += "\n          </h4>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 130, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date signed"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\t<!-- add time hover over? -->\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned"),10,true,""), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 136, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"dateSigned"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 138, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items")) {
output += "\n        ";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n        ";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n        ";
env.getTemplate("items.html", false, "contract.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 154, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 158, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents")) {
output += "\n        ";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n        ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n        ";
env.getTemplate("documents.html", false, "contract.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 174, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 178, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 189, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Implementation"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              ";
var t_13;
t_13 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"transactions");
frame.set("transactions", t_13, true);
if(frame.topLevel) {
context.setVariable("transactions", t_13);
}
if(frame.topLevel) {
context.addExport("transactions", t_13);
}
output += "\n              ";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_14, true);
if(frame.topLevel) {
context.setVariable("parent", t_14);
}
if(frame.topLevel) {
context.addExport("parent", t_14);
}
output += "\n              ";
env.getTemplate("transactions.html", false, "contract.html", null, function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
t_15.render(context.getVariables(), frame, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
output += t_16
output += "\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones")) {
output += "\n                ";
var t_19;
t_19 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones");
frame.set("milestones", t_19, true);
if(frame.topLevel) {
context.setVariable("milestones", t_19);
}
if(frame.topLevel) {
context.addExport("milestones", t_19);
}
output += "\n                ";
var t_20;
t_20 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_20, true);
if(frame.topLevel) {
context.setVariable("parent", t_20);
}
if(frame.topLevel) {
context.addExport("parent", t_20);
}
output += "\n                ";
env.getTemplate("milestones.html", false, "contract.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\n              ";
})});
}
else {
output += "\n                <div class=\"panel panel-warning\">\n                  <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                      ";
output += runtime.suppressValue((lineno = 210, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n                    </h3>\n                  </div>\n                  <div class=\"panel-body\">\n                    ";
output += runtime.suppressValue((lineno = 214, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n                  </div>\n                </div>\n              ";
;
}
output += "\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents")) {
output += "\n                ";
var t_25;
t_25 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents");
frame.set("documents", t_25, true);
if(frame.topLevel) {
context.setVariable("documents", t_25);
}
if(frame.topLevel) {
context.addExport("documents", t_25);
}
output += "\n                ";
var t_26;
t_26 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_26, true);
if(frame.topLevel) {
context.setVariable("parent", t_26);
}
if(frame.topLevel) {
context.addExport("parent", t_26);
}
output += "\n                ";
env.getTemplate("documents.html", false, "contract.html", null, function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
t_27.render(context.getVariables(), frame, function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
output += t_28
output += "\n              ";
})});
}
else {
output += "\n                <div class=\"panel panel-warning\">\n                  <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                      ";
output += runtime.suppressValue((lineno = 230, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n                    </h3>\n                  </div>\n                  <div class=\"panel-body\">\n                    ";
output += runtime.suppressValue((lineno = 234, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n                  </div>\n                </div>\n              ";
;
}
output += "\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contract_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<section id=\"contract-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\">\n  <h3>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 3, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 94, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract")])), env.opts.autoescape);
output += " \n    <small> \n      (";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 6, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"id"])), env.opts.autoescape);
output += "\n      ";
;
}
else {
output += "\n        ";
output += runtime.suppressValue((lineno = 8, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\n      ";
;
}
output += ")\n    </small>\n  </h3>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 17, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 19, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n          <dl> \n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"extendsContractID")) {
output += "\n               <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 24, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Extends Contract ID"])), env.opts.autoescape);
output += "\n               </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"extendsContractID"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 59, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"extendsContractID"])), env.opts.autoescape);
output += "\n               </dd>\n             ";
;
}
output += "\n\n             <dt class=\"dt-large dt-inline dt-gap\">\n              ";
output += runtime.suppressValue((lineno = 32, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award ID"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline dd-gap\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 36, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 38, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award ID provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n             </dd>\n\n             <dt class=\"dt-large dt-inline\">\n               ";
output += runtime.suppressValue((lineno = 43, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline\">\n               ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 47, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"status"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 ";
output += runtime.suppressValue((lineno = 49, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n             </dd>\n\n\n             <dt class=\"dt-large dt-gap\">\n               ";
output += runtime.suppressValue((lineno = 55, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue((lineno = 58, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"period"])), env.opts.autoescape);
output += "\n\n                <strong>";
output += runtime.suppressValue((lineno = 60, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 62, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 64, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 66, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 68, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 70, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"durationInDays")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 74, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 75, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"durationInDays"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"maxExtentDate")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 79, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue((lineno = 80, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"maxExtentDate"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n\n              \n             </dd>\n             <dt class=\"dt-large dt-inline dt-gap\">\n               ";
output += runtime.suppressValue((lineno = 87, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline dd-gap\">\n               ";
output += runtime.suppressValue((lineno = 90, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"value"])), env.opts.autoescape);
output += "\n               ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "\n                 ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 93, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"amount"])), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"currency"), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 95, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"currency"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 ";
output += runtime.suppressValue((lineno = 97, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n              </dd>\n             <dt class=\"dt-large dt-inline\">\n               ";
output += runtime.suppressValue((lineno = 101, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date signed"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline\">\n               ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "\n                 ";
output += runtime.suppressValue((lineno = 105, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"dateSigned"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 107, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "</span>\n               ";
;
}
output += "\n             </dd>\n\n           </dl> \n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 125, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Evaluation Indicators"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <dl> \n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"discountRate")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 132, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Discount Rate"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"discountRate"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 135, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators"),"discountRate"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"discountRateDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 140, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Discount Rate Details"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"discountRateDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 143, colno = 80, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators"),"discountRateDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"riskPremium")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 149, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Risk Premium"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"riskPremium"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 152, colno = 72, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators"),"riskPremium"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"riskPremiumDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 157, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Risk Premium Details"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"riskPremiumDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 160, colno = 79, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators"),"riskPremiumDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValue")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 166, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Net Present Value"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValue")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 169, colno = 92, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValue"),"amount"])), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValue")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 170, colno = 85, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValue"),"currency"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValueDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 175, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Net Present Value Details"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators")),"netPresentValueDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 178, colno = 83, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"evaluationIndicators"),"netPresentValueDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n           </dl> \n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items")) {
output += "\n        ";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n        ";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n        ";
env.getTemplate("items.html", false, "contract_ppp.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 198, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 202, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents")) {
output += "\n        ";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n        ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n        ";
env.getTemplate("documents.html", false, "contract_ppp.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 218, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 222, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"relatedProcesses")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 235, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Related Processes"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-responsive\">\n            <thead>\n              <tr>\n                <th>\n                  Title\n                </th>\n                <th>\n                  ID\n                </th>\n                <th>\n                  OCID\n                </th>\n                <th>\n                  Relationship\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              ";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"relatedProcesses");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("relatedProcess", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n              <tr>\n                <td>\n                  ";
if(runtime.memberLookup((t_16),"uri")) {
output += "\n                    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"uri"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"title"), env.opts.autoescape);
output += " </a>\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"title"), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n                </td>\n                <td>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"id"), env.opts.autoescape);
output += "\n                </td>\n                <td>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"ocid"), env.opts.autoescape);
output += "\n                </td>\n                <td>\n                  ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((t_16),"relationship"),", "), env.opts.autoescape);
output += "\n                </td>\n              </tr>\n              ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"milestones")) {
output += "\n        ";
var t_17;
t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"milestones");
frame.set("milestones", t_17, true);
if(frame.topLevel) {
context.setVariable("milestones", t_17);
}
if(frame.topLevel) {
context.addExport("milestones", t_17);
}
output += "\n        ";
var t_18;
t_18 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_18, true);
if(frame.topLevel) {
context.setVariable("parent", t_18);
}
if(frame.topLevel) {
context.addExport("parent", t_18);
}
output += "\n        ";
env.getTemplate("milestones.html", false, "contract_ppp.html", null, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
t_19.render(context.getVariables(), frame, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
output += t_20
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 295, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 299, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"agreedMetrics")) {
output += "\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 312, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
var t_23;
t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"agreedMetrics");
frame.set("metrics", t_23, true);
if(frame.topLevel) {
context.setVariable("metrics", t_23);
}
if(frame.topLevel) {
context.addExport("metrics", t_23);
}
output += "\n            ";
var t_24;
t_24 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_24, true);
if(frame.topLevel) {
context.setVariable("parent", t_24);
}
if(frame.topLevel) {
context.addExport("parent", t_24);
}
output += "\n            ";
env.getTemplate("metrics.html", false, "contract_ppp.html", null, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
t_25.render(context.getVariables(), frame, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
output += t_26
output += "\n          </div>\n        </div>\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 325, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 329, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Agreed Metrics provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 342, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Summary"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <dl> \n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"debtEquityRatio")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 349, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Debt Equity Ratio"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"debtEquityRatio"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 352, colno = 70, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"debtEquityRatio"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"debtEquityRatioDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 357, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Debt Equity Ratio Details"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"debtEquityRatioDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 360, colno = 77, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"debtEquityRatioDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"projectIRR")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 366, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project IRR"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"projectIRR"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 369, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"projectIRR"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"projectIRRDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 374, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project IRR Detials"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"projectIRRDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 377, colno = 72, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"projectIRRDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 383, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Share Capital"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue((lineno = 386, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital")])), env.opts.autoescape);
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital")),"amount")), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 389, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital"),"amount"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital")),"currency"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 391, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapital"),"currency"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapitalDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 398, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Share Capital Details"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"shareCapitalDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 401, colno = 74, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"shareCapitalDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"subsidyRatio")) {
output += "\n              <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 407, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Subsidy Ratio"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-large dd-inline dd-gap\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"subsidyRatio"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 410, colno = 67, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"subsidyRatio"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"subsidyRatioDetails")) {
output += "\n              <dt class=\"dt-small\">\n                ";
output += runtime.suppressValue((lineno = 415, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Subsidy Ratio Details"])), env.opts.autoescape);
output += "\n              </dt>\n              <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary")),"subsidyRatioDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 418, colno = 74, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financeSummary"),"subsidyRatioDetails"])), env.opts.autoescape);
output += "\n              </dd>\n            ";
;
}
output += "\n\n           </dl> \n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"finance")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 435, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_31 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"finance");
if(t_31) {var t_30 = t_31.length;
for(var t_29=0; t_29 < t_31.length; t_29++) {
var t_32 = t_31[t_29];
frame.set("finance", t_32);
frame.set("loop.index", t_29 + 1);
frame.set("loop.index0", t_29);
frame.set("loop.revindex", t_30 - t_29);
frame.set("loop.revindex0", t_30 - t_29 - 1);
frame.set("loop.first", t_29 === 0);
frame.set("loop.last", t_29 === t_30 - 1);
frame.set("loop.length", t_30);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_32),"id"), env.opts.autoescape);
output += ") </small>\n                </h4>\n              </div>\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_32),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 448, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"description"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 450, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 454, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Financing Party"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_32),"financingParty")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"financingParty")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 458, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"financingParty"),"name"])), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"financingParty")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 458, colno = 141, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"financingParty"),"id"])), env.opts.autoescape);
output += ") </small>\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 460, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Financing Party provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 464, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
output += runtime.suppressValue((lineno = 467, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"value"])), env.opts.autoescape);
output += "\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"value")),"amount")) {
output += "\n                      ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_32),"value")),"amount")), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue((lineno = 470, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"value"),"amount"])), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"value")),"currency"), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue((lineno = 472, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"value"),"currency"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 474, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 479, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Type"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"financeType")) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"financeType"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 483, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"financeType"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 485, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No finance type provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 490, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Category"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"financeCategory")) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"financeCategory"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 494, colno = 60, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"financeCategory"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 496, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No finance category provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 501, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Repayment Frequency"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"repaymentFrequency")) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"repaymentFrequency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 505, colno = 63, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"repaymentFrequency"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 507, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Repayment Frequency provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 512, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Step in Rights"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"stepInRights") == true || runtime.memberLookup((t_32),"stepInRights") == false) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"stepInRights"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 516, colno = 57, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"stepInRights"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 518, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Step in Rights provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 523, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Exchange Rate Guarantee"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"exchangeRateGuarantee") == true || runtime.memberLookup((t_32),"exchangeRateGuarantee") == false) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"exchangeRateGuarantee"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 527, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"exchangeRateGuarantee"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 529, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Exchange Rate Guarantee information provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n\n                  <dt class=\"dt-large dt-gap\">\n                    ";
output += runtime.suppressValue((lineno = 535, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Period"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-small\">\n                     ";
output += runtime.suppressValue((lineno = 538, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"period"])), env.opts.autoescape);
output += "\n\n                     <strong>";
output += runtime.suppressValue((lineno = 540, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"startDate")) {
output += "\n                       ";
output += runtime.suppressValue((lineno = 542, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((t_32),"period"),"startDate"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 544, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n                     <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 546, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"endDate")) {
output += "\n                       ";
output += runtime.suppressValue((lineno = 548, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((t_32),"period"),"endDate"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 550, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"durationInDays")) {
output += "\n                       <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 553, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 554, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"period"),"durationInDays"])), env.opts.autoescape);
output += "\n                     ";
;
}
output += "\n\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"maxExtentDate")) {
output += "\n                       <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 558, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n                       ";
output += runtime.suppressValue((lineno = 559, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((t_32),"period"),"maxExtentDate"])), env.opts.autoescape);
output += "\n                     ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-gap\">\n                    ";
output += runtime.suppressValue((lineno = 564, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Interest Rates"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-small\">\n                     ";
output += runtime.suppressValue((lineno = 567, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"interestRate"])), env.opts.autoescape);
output += "\n\n                     <strong>";
output += runtime.suppressValue((lineno = 569, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Margin: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"margin")) {
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"margin"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 572, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"margin"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 574, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No margin provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n\n                     <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 577, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Base: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"base")) {
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"base"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 580, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"base"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 582, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No base provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"fixed") == true || runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"fixed") == false) {
output += "\n                       <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 586, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fixed: "])), env.opts.autoescape);
output += "</strong>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"fixed"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 588, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"fixed"])), env.opts.autoescape);
output += "\n                     ";
;
}
output += "\n\n                     <br/>\n                     <strong>";
output += runtime.suppressValue((lineno = 592, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"notes")) {
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"notes"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 595, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"notes"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 597, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No notes provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n\n                  </dd>\n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financialModel")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 618, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Financial Model"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_35 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financialModel");
if(t_35) {var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("indicator", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_36),"id"), env.opts.autoescape);
output += ") </small>\n                </h4>\n              </div>\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_36),"notes")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"notes"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 631, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_36,"notes"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 635, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Indicator Code"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_36),"indicatorValue")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"indicatorCode"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 639, colno = 59, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_36,"indicatorCode"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 641, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Indicator Code Provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 645, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                     ";
if(runtime.memberLookup((t_36),"indicatorCode")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"indicatorValue"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 649, colno = 60, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_36,"indicatorValue"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       ";
output += runtime.suppressValue((lineno = 651, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Indicator Value Provided"])), env.opts.autoescape);
output += "\n                     ";
;
}
output += "\n                  </dd>\n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"equityTransferCaps")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 671, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Equity Transfer Caps"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_39 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"equityTransferCaps");
if(t_39) {var t_38 = t_39.length;
for(var t_37=0; t_37 < t_39.length; t_37++) {
var t_40 = t_39[t_37];
frame.set("equityTransferCap", t_40);
frame.set("loop.index", t_37 + 1);
frame.set("loop.index0", t_37);
frame.set("loop.revindex", t_38 - t_37);
frame.set("loop.revindex0", t_38 - t_37 - 1);
frame.set("loop.first", t_37 === 0);
frame.set("loop.last", t_37 === t_38 - 1);
frame.set("loop.length", t_38);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_40),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_40),"id"), env.opts.autoescape);
output += ") </small>\n                </h4>\n              </div>\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_40),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_40),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 684, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_40,"description"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 688, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Amount"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_40),"amount")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_40),"amount") * 100, env.opts.autoescape);
output += "% ";
output += runtime.suppressValue((lineno = 692, colno = 67, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_40,"amount"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 694, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Equity Transfer Cap given "])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 698, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestone"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((runtime.memberLookup((t_40),"milestone")),"title")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_40),"milestone")),"title"), env.opts.autoescape);
output += " \n                     ";
output += runtime.suppressValue((lineno = 703, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_40),"milestone"),"title"])), env.opts.autoescape);
output += "\n                     <small>\n                     (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_40),"milestone")),"id"), env.opts.autoescape);
output += " \n                      ";
output += runtime.suppressValue((lineno = 706, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_40),"milestone"),"id"])), env.opts.autoescape);
output += ")\n                     </small>\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 709, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Milestone Referenced"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n\n  ";
;
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"requirementResponses")) {
output += "\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n               ";
output += runtime.suppressValue((lineno = 729, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Reqirement Responses"])), env.opts.autoescape);
output += " \n            </h3>\n          </div>\n              ";
var t_41;
t_41 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"requirementResponses");
frame.set("requirementResponses", t_41, true);
if(frame.topLevel) {
context.setVariable("requirementResponses", t_41);
}
if(frame.topLevel) {
context.addExport("requirementResponses", t_41);
}
output += "\n              ";
env.getTemplate("requirement_responses.html", false, "contract_ppp.html", null, function(t_44,t_42) {
if(t_44) { cb(t_44); return; }
t_42.render(context.getVariables(), frame, function(t_45,t_43) {
if(t_45) { cb(t_45); return; }
output += t_43
output += "\n        </div>\n      </div>\n    </div>\n  ";
})});
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"riskAllocation")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 745, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Risk Allocation"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_48 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"riskAllocation");
if(t_48) {var t_47 = t_48.length;
for(var t_46=0; t_46 < t_48.length; t_46++) {
var t_49 = t_48[t_46];
frame.set("risk", t_49);
frame.set("loop.index", t_46 + 1);
frame.set("loop.index0", t_46);
frame.set("loop.revindex", t_47 - t_46);
frame.set("loop.revindex0", t_47 - t_46 - 1);
frame.set("loop.first", t_46 === 0);
frame.set("loop.last", t_46 === t_47 - 1);
frame.set("loop.length", t_47);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_49),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 753, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"description"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((t_49),"id")) {
output += "\n                  (id: ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 756, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"id"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 761, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Category"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_49),"category")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"category"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 765, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"category"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 767, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No category"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 771, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Mitigation"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_49),"mitigation")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"mitigation"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 775, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"mitigation"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 777, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No mitigation provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 781, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["allocation"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_49),"allocation")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"allocation"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 785, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"allocation"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 787, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No allocation provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 791, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fiscal Impact"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_49),"fiscalImpact")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"fiscalImpact"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 795, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"fiscalImpact"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 797, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Fiscal Impact provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 801, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Likelihood"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_49),"likelihood")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"likelihood"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 805, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"likelihood"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 807, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No likelihood"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 811, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-small\">\n                   ";
if(runtime.memberLookup((t_49),"notes")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_49),"notes"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 815, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_49,"notes"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 817, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No notes"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  \n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n\n  ";
;
}
output += "\n\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"tariffs")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            Tariffs ";
output += runtime.suppressValue((lineno = 839, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"tariffs")])), env.opts.autoescape);
output += " \n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-condensed table-responsive\">\n            <thead>\n              <tr>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 847, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["title"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 850, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 853, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Dimensions"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 856, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 859, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 862, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += " \n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              ";
frame = frame.push();
var t_52 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"tariffs");
if(t_52) {var t_51 = t_52.length;
for(var t_50=0; t_50 < t_52.length; t_50++) {
var t_53 = t_52[t_50];
frame.set("tariff", t_53);
frame.set("loop.index", t_50 + 1);
frame.set("loop.index0", t_50);
frame.set("loop.revindex", t_51 - t_50);
frame.set("loop.revindex0", t_51 - t_50 - 1);
frame.set("loop.first", t_50 === 0);
frame.set("loop.last", t_50 === t_51 - 1);
frame.set("loop.length", t_51);
output += "\n                <tr>\n                  <td>\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_53),"title"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 871, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_53,"title"])), env.opts.autoescape);
output += "\n                     <br>\n                     <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_53),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 873, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_53,"id"])), env.opts.autoescape);
output += " </small>\n                  </td>\n                  <td>\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_53),"period")),"startDate")) {
output += "\n                      <strong> ";
output += runtime.suppressValue((lineno = 877, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start Date:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_53),"period")),"startDate"), env.opts.autoescape);
output += "\n                      ";
if(runtime.memberLookup((runtime.memberLookup((t_53),"period")),"endDate")) {
output += "\n                        <br/>\n                      ";
;
}
output += "\n                    ";
;
}
output += "\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_53),"period")),"endDate")) {
output += "\n                      <strong> ";
output += runtime.suppressValue((lineno = 883, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End Date:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_53),"period")),"endDate"), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </td>\n                  <td>\n                    ";
frame = frame.push();
var t_56 = runtime.memberLookup((t_53),"dimensions");
if(t_56) {var t_54;
if(runtime.isArray(t_56)) {
var t_55 = t_56.length;
for(t_54=0; t_54 < t_56.length; t_54++) {
var t_57 = t_56[t_54][0]
frame.set("key", t_56[t_54][0]);
var t_58 = t_56[t_54][1]
frame.set("value", t_56[t_54][1]);
frame.set("loop.index", t_54 + 1);
frame.set("loop.index0", t_54);
frame.set("loop.revindex", t_55 - t_54);
frame.set("loop.revindex0", t_55 - t_54 - 1);
frame.set("loop.first", t_54 === 0);
frame.set("loop.last", t_54 === t_55 - 1);
frame.set("loop.length", t_55);
output += "\n                      <strong>";
output += runtime.suppressValue(t_57, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_58, env.opts.autoescape);
output += "\n                      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                        <br/>\n                      ";
;
}
output += "\n                    ";
;
}
} else {
t_54 = -1;
var t_55 = runtime.keys(t_56).length;
for(var t_59 in t_56) {
t_54++;
var t_60 = t_56[t_59];
frame.set("key", t_59);
frame.set("value", t_60);
frame.set("loop.index", t_54 + 1);
frame.set("loop.index0", t_54);
frame.set("loop.revindex", t_55 - t_54);
frame.set("loop.revindex0", t_55 - t_54 - 1);
frame.set("loop.first", t_54 === 0);
frame.set("loop.last", t_54 === t_55 - 1);
frame.set("loop.length", t_55);
output += "\n                      <strong>";
output += runtime.suppressValue(t_59, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_60, env.opts.autoescape);
output += "\n                      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                        <br/>\n                      ";
;
}
output += "\n                    ";
;
}
}
}
frame = frame.pop();
output += "\n                  </td>\n                  <td>\n                     ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_53),"value")),"amount")), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 896, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_53),"value"),"amount"])), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_53),"value")),"currency"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 898, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_53),"value"),"currency"])), env.opts.autoescape);
output += "\n                  </td>\n                  <td>\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_53),"unit")),"name"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 902, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_53),"unit"),"name"])), env.opts.autoescape);
output += "\n                  </td>\n                  <td>\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_53),"notes"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 906, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_53,"notes"])), env.opts.autoescape);
output += "\n                  </td>\n                </tr>\n              ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n             ";
output += runtime.suppressValue((lineno = 923, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Signatories"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"col-md-12\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_63 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"signatories");
if(t_63) {var t_62 = t_63.length;
for(var t_61=0; t_61 < t_63.length; t_61++) {
var t_64 = t_63[t_61];
frame.set("signatory", t_64);
frame.set("loop.index", t_61 + 1);
frame.set("loop.index0", t_61);
frame.set("loop.revindex", t_62 - t_61);
frame.set("loop.revindex0", t_62 - t_61 - 1);
frame.set("loop.first", t_61 === 0);
frame.set("loop.last", t_61 === t_62 - 1);
frame.set("loop.length", t_62);
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n                ";
var t_65;
t_65 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_64),"id"));
frame.set("organization", t_65, true);
if(frame.topLevel) {
context.setVariable("organization", t_65);
}
if(frame.topLevel) {
context.addExport("organization", t_65);
}
output += "\n                ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_64),"id"))) {
output += "\n                  ";
var t_66;
t_66 = t_64;
frame.set("organization", t_66, true);
if(frame.topLevel) {
context.setVariable("organization", t_66);
}
if(frame.topLevel) {
context.addExport("organization", t_66);
}
output += "\n                ";
;
}
output += "\n                ";
env.getTemplate("organization.html", false, "contract_ppp.html", null, function(t_69,t_67) {
if(t_69) { cb(t_69); return; }
t_67.render(context.getVariables(), frame, function(t_70,t_68) {
if(t_70) { cb(t_70); return; }
output += t_68
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\">\n  ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "contracts");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("contract", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n    ";
env.getTemplate("contract.html", false, "contracts.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n      <hr>\n    ";
;
}
output += "\n  ";
})});
}
}
frame = frame.pop();
output += "\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\">\n  ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "contracts");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("contract", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n    ";
env.getTemplate("contract_ppp.html", false, "contracts_ppp.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n      <hr>\n    ";
;
}
output += "\n  ";
})});
}
}
frame = frame.pop();
output += "\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["criterion.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"col-md-12\">\n  <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"title")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 5, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "criterion"),"title"])), env.opts.autoescape);
output += "\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criteria")),"id")) {
output += "\n            <small> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 7, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "criterion"),"id"])), env.opts.autoescape);
output += " </small>\n          ";
;
}
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 10, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"col-md-12\">\n        <p> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 16, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "criterion"),"description"])), env.opts.autoescape);
output += " </p>\n        <dl class=\"clearfix\">\n          <dt class=\"dt-small dt-inline\">\n            ";
output += runtime.suppressValue((lineno = 19, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Source"])), env.opts.autoescape);
output += "\n          </dt>\n          <dd class=\"dd-small dd-inline\">\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"source"), env.opts.autoescape);
output += "\n            ";
output += runtime.suppressValue((lineno = 23, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "criterion"),"source"])), env.opts.autoescape);
output += "\n          </dd>\n          <dt class=\"dt-small dt-inline\">\n            ";
output += runtime.suppressValue((lineno = 26, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Related Item"])), env.opts.autoescape);
output += "\n          </dt>\n          <dd class=\"dd-small dd-inline\">\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"relatedItem"), env.opts.autoescape);
output += "\n            ";
output += runtime.suppressValue((lineno = 30, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "criterion"),"relatedItem"])), env.opts.autoescape);
output += "\n          </dd>\n          <dt class=\"dt-small dt-inline\">\n            ";
output += runtime.suppressValue((lineno = 33, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Relates To"])), env.opts.autoescape);
output += "\n          </dt>\n          <dd class=\"dd-small dd-inline\">\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"relatesTo"), env.opts.autoescape);
output += "\n            ";
output += runtime.suppressValue((lineno = 37, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "criterion"),"relatesTo"])), env.opts.autoescape);
output += "\n          </dd>\n        </dl>\n        ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "criterion")),"requirementGroups");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("requirementGroup", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          <h4> <strong> ";
output += runtime.suppressValue((lineno = 41, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Requirement Group:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += ") </small> </h4>\n          <div class=\"table-responsive\">\n            <table class=\"table table-condensed table-bordered table-striped\">\n              <thead>\n                <tr>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 47, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 50, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 53, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 56, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Data Type"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 59, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Values"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 62, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Pattern"])), env.opts.autoescape);
output += " \n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                ";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"requirements");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("requirement", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n                  <tr>\n                    <td>\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += ") </small>\n                    </td>\n                    <td>\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "\n                    </td>\n                    <td>\n                      ";
var t_9;
t_9 = runtime.memberLookup((t_8),"period");
frame.set("period", t_9, true);
if(frame.topLevel) {
context.setVariable("period", t_9);
}
if(frame.topLevel) {
context.addExport("period", t_9);
}
output += "\n                      ";
env.getTemplate("period.html", false, "criterion.html", null, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
t_10.render(context.getVariables(), frame, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
output += t_11
output += "\n                    </td>\n                    <td>\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"dataType"), env.opts.autoescape);
output += "\n                    </td>\n                    <td>\n                      <dl>\n                        ";
if(runtime.memberLookup((t_8),"expectedValue")) {
output += "\n                          <dt> ";
output += runtime.suppressValue((lineno = 85, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Expected Value:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"expectedValue"), env.opts.autoescape);
output += " </dd>\n                        ";
;
}
output += "\n                        ";
if(runtime.memberLookup((t_8),"minValue")) {
output += "\n                          <dt> ";
output += runtime.suppressValue((lineno = 88, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Min Value:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"minValue"), env.opts.autoescape);
output += " </dd>\n                        ";
;
}
output += "\n                        ";
if(runtime.memberLookup((t_8),"maxValue")) {
output += "\n                          <dt> ";
output += runtime.suppressValue((lineno = 91, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Value:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"maxValue"), env.opts.autoescape);
output += " </dd>\n                        ";
;
}
output += "\n                      </dl>\n                    </td>\n                    <td>\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"pattern"), env.opts.autoescape);
output += "\n                    </td>\n                  </tr>\n                ";
})});
}
}
frame = frame.pop();
output += "\n              </tbody>\n            </table>\n          </div>\n        ";
;
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["documents.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"documents"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>";
output += runtime.suppressValue((lineno = 11, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 12, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 13, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Author"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 14, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date published"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 15, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 16, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Format"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 17, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Language"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 18, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Page"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 19, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Access Details"])), env.opts.autoescape);
output += "</th>\n            </tr>\n          </thead>\n          <tbody>\n            ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "documents");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("document", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n              <tr> <!-- add conditional colouring based on presence of url? -->\n                <td>";
output += runtime.suppressValue((lineno = 25, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"url"])), env.opts.autoescape);
output += " <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 25, colno = 121, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"title"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"documentType"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 26, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"documentType"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"author"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"author"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue((lineno = 28, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"datePublished"])), env.opts.autoescape);
output += " </td> \n                <td>";
output += runtime.suppressValue((lineno = 29, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"dateModified"])), env.opts.autoescape);
output += " </td> \n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 30, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"format"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 31, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"language"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"pageStart"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"pageEnd"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 32, colno = 72, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"pageStart"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 32, colno = 108, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"pageEnd"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"accessDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 33, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"accessDetails"])), env.opts.autoescape);
output += "</td>\n              </tr>\n              <tr> <!-- add conditional colouring based on presence of url? -->\n                <td colspan=\"9\"> <strong> ";
output += runtime.suppressValue((lineno = 36, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 36, colno = 113, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n              </tr> <!-- add conditional colouring based on presence of url? -->\n            ";
;
}
}
frame = frame.pop();
output += "\n          </tbody>\n        </table>\n      </div>\n\t\t";
;
}
else {
output += "\n      <div class=\"panel-body\">\n        ";
output += runtime.suppressValue((lineno = 44, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n      </div>\n\t\t";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["items.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"items"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items")) > 0) {
output += "\n      <div class=\"table-responsive\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Classification"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 13, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Quantity"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 14, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += " </small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value per unit"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Delivery Address"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Delivery Location"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4])), env.opts.autoescape);
output += " </td>\t<!-- need to consider whether to present the id - make sure this is consistent with documents approach -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue((lineno = 25, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "long_text_popout"), "long_text_popout", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 27, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"classification"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 91, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t(<a href=\"https://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"scheme"), env.opts.autoescape);
output += "</a> -\n                  ";
output += runtime.suppressValue((lineno = 30, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"scheme"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += "</a>)\n                    ";
output += runtime.suppressValue((lineno = 33, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"uri"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += ")\n                    ";
output += runtime.suppressValue((lineno = 36, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"id"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t</small>\n                ";
output += runtime.suppressValue((lineno = 39, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"additionalClassifications"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_4),"additionalClassifications")) {
output += "\n\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"additionalClassifications");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("classification", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n\t\t\t\t\t\t\t\t\t\t<br>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t(<a href=\"https://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"scheme"), env.opts.autoescape);
output += "</a> -\n\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += "</a>)\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += ")\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"quantity"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 55, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"quantity"])), env.opts.autoescape);
output += " </td>\n\t\t\t\t\t\t\t<td>\n                ";
output += runtime.suppressValue((lineno = 57, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"unit"])), env.opts.autoescape);
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"name")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 59, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"unit"),"name"])), env.opts.autoescape);
output += " <br>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"scheme")) {
output += "\n                  <strong>";
output += runtime.suppressValue((lineno = 62, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme:"])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"scheme"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 62, colno = 87, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"unit"),"scheme"])), env.opts.autoescape);
output += " <br>  \n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"uri")) {
output += "\n                  <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"uri"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"uri"), env.opts.autoescape);
output += "</a> ";
output += runtime.suppressValue((lineno = 65, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"unit"),"uri"])), env.opts.autoescape);
output += " \n                ";
;
}
output += "\n              </td>\n\t\t\t\t\t\t  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")) {
output += "\n                ";
output += runtime.suppressValue((lineno = 69, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"unit"),"value"])), env.opts.autoescape);
output += "\n                <td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 70, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value"),"amount"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 70, colno = 133, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value"),"currency"])), env.opts.autoescape);
output += "</td>\n              ";
;
}
else {
output += "\n                <td></td>\n\t\t\t\t\t\t  ";
;
}
output += "\n\n              <td>\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"streetAddress")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"streetAddress"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 77, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryAddress"),"streetAddress"])), env.opts.autoescape);
output += "<br>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"locality")) {
output += " ";
output += runtime.suppressValue((lineno = 79, colno = 63, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryAddress"),"locality"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"locality"), env.opts.autoescape);
output += " <br>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"region")) {
output += " ";
output += runtime.suppressValue((lineno = 82, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryAddress"),"region"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"region"), env.opts.autoescape);
output += " <br>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"postalCode")) {
output += " ";
output += runtime.suppressValue((lineno = 85, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryAddress"),"postalCode"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"postalCode"), env.opts.autoescape);
output += " <br>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"countryName")) {
output += " ";
output += runtime.suppressValue((lineno = 88, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryAddress"),"countryName"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryAddress")),"countryName"), env.opts.autoescape);
output += " <br>\n                ";
;
}
output += "\n              </td>\n              <td>\n                <dl>\n                  <dt>";
output += runtime.suppressValue((lineno = 94, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Location Description"])), env.opts.autoescape);
output += "</dt>\n                  <dd>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 95, colno = 70, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryLocation"),"description"])), env.opts.autoescape);
output += "</dd>\n\n                  <dt>";
output += runtime.suppressValue((lineno = 97, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["URI"])), env.opts.autoescape);
output += "</dt\n                  ><dd><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"uri"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 98, colno = 101, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"deliveryLocation"),"uri"])), env.opts.autoescape);
output += "</a></dd>\n\n                  <dt>";
output += runtime.suppressValue((lineno = 100, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Gazetteer Scheme"])), env.opts.autoescape);
output += "</dt>\n                  <dd>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"gazetteer")),"scheme"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 101, colno = 75, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"gazetteer"),"scheme"])), env.opts.autoescape);
output += "</dd>\n\n                  <dt>";
output += runtime.suppressValue((lineno = 103, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Gazetteer Identifiers"])), env.opts.autoescape);
output += "</dt>\n                  <dd>\n                    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"gazetteer")),"identifiers")) {
output += " \n                        ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"gazetteer")),"identifiers"),", "), env.opts.autoescape);
output += " \n                        ";
output += runtime.suppressValue((lineno = 107, colno = 36, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((t_4),"deliveryLocation")),"gazetteer"),"identifiers"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n                </dl>\n              </td>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\t\n\t\t\t</table>\n      </div>\n\t\t";
;
}
else {
output += "\n      <div class=\"panel-body\">\n        ";
output += runtime.suppressValue((lineno = 120, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n      </div>\n\t\t";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["locations.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>";
output += runtime.suppressValue((lineno = 4, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Location Description"])), env.opts.autoescape);
output += "</th>\n        <th>";
output += runtime.suppressValue((lineno = 5, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["URI"])), env.opts.autoescape);
output += "</th>\n        <th>";
output += runtime.suppressValue((lineno = 6, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Gazetteer Scheme"])), env.opts.autoescape);
output += "</th>\n        <th>";
output += runtime.suppressValue((lineno = 7, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Gazetteer Identifiers"])), env.opts.autoescape);
output += "</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "locations");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("location", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <tr> <!-- add conditional colouring based on presence of url? -->\n          <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 13, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n          <td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 14, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"uri"])), env.opts.autoescape);
output += "</a></td>\n          <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"gazetteer")),"scheme"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 15, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"gazetteer"),"scheme"])), env.opts.autoescape);
output += "</td>\n          <td>";
if(runtime.memberLookup((runtime.memberLookup((t_4),"gazetteer")),"identifiers")) {
output += " \n                ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"gazetteer")),"identifiers"),", "), env.opts.autoescape);
output += " \n                ";
output += runtime.suppressValue((lineno = 18, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"gazetteer"),"identifiers"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n          </td>\n              \n        </tr>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </tbody>\n  </table>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["change", "gettext"], 
["class"], 
function (l_change, l_gettext, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("change", l_change);
frame.set("gettext", l_gettext);
frame.set("class", kwargs.hasOwnProperty("class") ? kwargs["class"] : "");
var t_2 = "";t_2 += "\n\n";
if(l_change == "new") {
t_2 += "\n<span class=\"label label-success ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 3, colno = 47, runtime.callWrap(l_gettext, "gettext", context, ["new"])), env.opts.autoescape);
t_2 += "</span>\n";
;
}
else {
if(l_change == "changed") {
t_2 += "\n<span class=\"label label-primary ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 5, colno = 47, runtime.callWrap(l_gettext, "gettext", context, ["changed"])), env.opts.autoescape);
t_2 += "</span>\n";
;
}
;
}
t_2 += "\n\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("change_label");
context.setVariable("change_label", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["metrics.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "metrics");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("metric", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n<div class=\"col-xs-12\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        ";
output += runtime.suppressValue((lineno = 5, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 5, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"title"])), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 5, colno = 107, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"id"])), env.opts.autoescape);
output += "</small>\n      </h3>\n    </div>\n\n    <div class=\"panel-body\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 10, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "\n    </div>\n    <div class=\"table-responsive\">\n    <table class=\"table table-striped table-condensed\">\n      <thead>\n        <tr>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 17, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 20, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Dimensions"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 23, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 26, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 29, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Measure"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 32, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 35, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Related Milestone"])), env.opts.autoescape);
output += " \n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        ";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"observations");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("observation", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n          <tr>\n            <td>\n              ";
var t_9;
t_9 = runtime.memberLookup((t_8),"period");
frame.set("period", t_9, true);
if(frame.topLevel) {
context.setVariable("period", t_9);
}
if(frame.topLevel) {
context.addExport("period", t_9);
}
output += "\n              ";
env.getTemplate("period.html", false, "metrics.html", null, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
t_10.render(context.getVariables(), frame, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
output += t_11
output += "\n            </td>\n            <td>\n\n              <dl>\n              ";
frame = frame.push();
var t_16 = runtime.memberLookup((t_8),"dimensions");
if(t_16) {var t_14;
if(runtime.isArray(t_16)) {
var t_15 = t_16.length;
for(t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14][0]
frame.set("key", t_16[t_14][0]);
var t_18 = t_16[t_14][1]
frame.set("value", t_16[t_14][1]);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n                ";
if(t_17 != "__path") {
output += "\n                   <dt>";
output += runtime.suppressValue(t_17, env.opts.autoescape);
output += ":<dt/><dd>";
output += runtime.suppressValue(t_18, env.opts.autoescape);
output += "</dd>\n                ";
;
}
output += "\n              ";
;
}
} else {
t_14 = -1;
var t_15 = runtime.keys(t_16).length;
for(var t_19 in t_16) {
t_14++;
var t_20 = t_16[t_19];
frame.set("key", t_19);
frame.set("value", t_20);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n                ";
if(t_19 != "__path") {
output += "\n                   <dt>";
output += runtime.suppressValue(t_19, env.opts.autoescape);
output += ":<dt/><dd>";
output += runtime.suppressValue(t_20, env.opts.autoescape);
output += "</dd>\n                ";
;
}
output += "\n              ";
;
}
}
}
frame = frame.pop();
output += "\n              </dl>\n            </td>\n            <td>\n               ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"value")),"amount")) {
output += "\n                 ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_8),"value")),"amount")), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 59, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"value"),"amount"])), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"value")),"currency"), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 61, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"value"),"currency"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"name"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 66, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"unit"),"name"])), env.opts.autoescape);
output += "\n               ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"id")) {
output += "\n                 <small> \n                   (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"id"), env.opts.autoescape);
output += ")\n                   ";
output += runtime.suppressValue((lineno = 70, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"unit"),"id"])), env.opts.autoescape);
output += "\n                 </small>\n               ";
;
}
output += "\n               ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"scheme")) {
output += "\n                  </br>\n                  <strong> ";
output += runtime.suppressValue((lineno = 75, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"scheme"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 76, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"unit"),"scheme"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n               ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"uri")) {
output += "\n                  </br>\n                  <strong> ";
output += runtime.suppressValue((lineno = 80, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["URI:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"uri"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 81, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"unit"),"uri"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"measure"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 87, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_8,"measure"])), env.opts.autoescape);
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue((lineno = 90, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "long_text_popout"), "long_text_popout", context, [t_8,"notes"])), env.opts.autoescape);
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"relatedImplementationMilestone")),"title"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 94, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"relatedImplementationMilestone"),"title"])), env.opts.autoescape);
output += "\n\n               ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"relatedImplementationMilestone")),"id")) {
output += "\n                 (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"relatedImplementationMilestone")),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 97, colno = 77, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"relatedImplementationMilestone"),"id"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n            </td>\n          </tr>\n        ";
})});
}
}
frame = frame.pop();
output += "\n      </tbody>\n    </table>\n    </div>\n  </div>\n</div>\n    \n";
;
}
}
frame = frame.pop();
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["milestones.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "milestones")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"milestones"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "milestones")) > 0) {
output += "\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>";
output += runtime.suppressValue((lineno = 11, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 12, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 13, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Due Date"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 14, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 15, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 16, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Code"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 17, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\n              <th>";
output += runtime.suppressValue((lineno = 18, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date Met"])), env.opts.autoescape);
output += "</th>\n            </tr>\n          </thead>\n          <tbody>\n            ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("milestone", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n              <tr> <!-- add conditional colouring based on presence of url? -->\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"milestones"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue((lineno = 25, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "long_text_popout"), "long_text_popout", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue((lineno = 26, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"dueDate"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue((lineno = 27, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"dateModified"])), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 28, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"status"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"code"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 29, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"code"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 30, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"type"])), env.opts.autoescape);
output += "</td>\n                <td>";
output += runtime.suppressValue((lineno = 31, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"dateMet"])), env.opts.autoescape);
output += "</td>\n              </tr>\n            ";
;
}
}
frame = frame.pop();
output += "\n          </tbody>\n        </table>\n      </div>\n\t\t";
;
}
else {
output += "\n      <div class=\"panel-body\">\n\t\t\t";
output += runtime.suppressValue((lineno = 39, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n      </div>\n\t\t";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<h3 class=\"tab-heading\">\n  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization"),"name"])), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"id")) {
output += " <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"id"), env.opts.autoescape);
output += ")</small> ";
output += runtime.suppressValue((lineno = 3, colno = 121, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization")])), env.opts.autoescape);
;
}
output += "\n\n</h3>\n<p>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsBefore"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 12, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization"),"contactPoint"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 18, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"name"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 21, colno = 101, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"email"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 24, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"telephone"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 27, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 71, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"faxNumber"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 30, colno = 106, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"url"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 33, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 40, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 40, colno = 36, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization"),"address"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 46, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"streetAddress"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality")) {
output += " ";
output += runtime.suppressValue((lineno = 48, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"locality"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region")) {
output += " ";
output += runtime.suppressValue((lineno = 51, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"region"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode")) {
output += " ";
output += runtime.suppressValue((lineno = 54, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"postalCode"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName")) {
output += " ";
output += runtime.suppressValue((lineno = 57, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"countryName"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 61, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 68, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n        <div class=\"table-responsive\">\n\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 77, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 78, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 79, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")) {
output += "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><a href=\"https://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 85, colno = 182, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"scheme"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 86, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"id"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t<td>\n                  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri")) {
output += "\n                    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a> ";
output += runtime.suppressValue((lineno = 89, colno = 128, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"legalName"])), env.opts.autoescape);
output += " \n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 91, colno = 68, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"legalName"])), env.opts.autoescape);
output += " \n                  ";
;
}
output += "\n                </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t";
frame = frame.push();
var t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers");
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("identifier", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><a href=\"https://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_6),"scheme"), env.opts.autoescape);
output += "</a> ";
output += runtime.suppressValue((lineno = 99, colno = 171, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"legalName"])), env.opts.autoescape);
output += " </td>\n\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_6),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 100, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"id"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t<td>\n                    ";
if(runtime.memberLookup((t_6),"uri")) {
output += "\n                      <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_6),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_6),"legalName"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 103, colno = 104, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"legalName"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_6),"legalName"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 105, colno = 58, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"legalName"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n        </div>\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 115, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsAfter"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n</p>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsBefore(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsAfter(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_additionalOrgFieldsBefore: b_additionalOrgFieldsBefore,
b_additionalOrgFieldsAfter: b_additionalOrgFieldsAfter,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("organization.html", true, "organization_ppp.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsBefore"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsAfter"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsBefore(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"roles")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n      <strong> ";
output += runtime.suppressValue((lineno = 5, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Roles within process"])), env.opts.autoescape);
output += " </strong> \n\t\t</div>\n\t\t<div class=\"panel-body\">\n      <ul>\n      ";
frame = frame.push();
var t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"roles");
if(t_9) {var t_8 = t_9.length;
for(var t_7=0; t_7 < t_9.length; t_7++) {
var t_10 = t_9[t_7];
frame.set("role", t_10);
frame.set("loop.index", t_7 + 1);
frame.set("loop.index0", t_7);
frame.set("loop.revindex", t_8 - t_7);
frame.set("loop.revindex0", t_8 - t_7 - 1);
frame.set("loop.first", t_7 === 0);
frame.set("loop.last", t_7 === t_8 - 1);
frame.set("loop.length", t_8);
output += "\n       <li>\n       ";
output += runtime.suppressValue(t_10, env.opts.autoescape);
output += "\n       </li>\n      ";
;
}
}
frame = frame.pop();
output += "\n      <ul>\n\t\t</div>\n\t</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsAfter(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders")) {
output += "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n          ";
output += runtime.suppressValue((lineno = 25, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholders"])), env.opts.autoescape);
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>";
output += runtime.suppressValue((lineno = 32, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholder"])), env.opts.autoescape);
output += "</th>\n                <th>";
output += runtime.suppressValue((lineno = 33, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholding"])), env.opts.autoescape);
output += "</th>\n                <th>";
output += runtime.suppressValue((lineno = 34, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Voting Rights"])), env.opts.autoescape);
output += "</th>\n                <th>";
output += runtime.suppressValue((lineno = 35, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Voting Rights Details"])), env.opts.autoescape);
output += "</th>\n                <th>";
output += runtime.suppressValue((lineno = 36, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholder Notes"])), env.opts.autoescape);
output += "</th>\n              </tr>\n            </thead>\n            <tbody>\n              ";
frame = frame.push();
var t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders");
if(t_13) {var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("shareholder", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\n                <tr>\n                  <td>  \n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id"))) {
output += "\n                    <a data-toggle=\"modal\" href=\"#organization-";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id"), env.opts.autoescape);
output += "\">\n                    ";
;
}
output += "\n\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 47, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_14),"shareholder"),"name"])), env.opts.autoescape);
output += "\n                    <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 48, colno = 68, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_14),"shareholder"),"id"])), env.opts.autoescape);
output += ") </small> \n\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id"))) {
output += "\n                    </a>\n                    ";
;
}
output += "\n                  </td>\n                  <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"shareholding") * 100, env.opts.autoescape);
output += "% ";
output += runtime.suppressValue((lineno = 54, colno = 67, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"shareholding"])), env.opts.autoescape);
output += " </td>\n                  <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"votingRights"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 55, colno = 60, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"votingRights"])), env.opts.autoescape);
output += " </td>\n                  <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"votingRightsDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 56, colno = 67, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"votingRightsDetails"])), env.opts.autoescape);
output += " </td>\n                  <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"notes"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 57, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"notes"])), env.opts.autoescape);
output += " </td>\n                </tr>\n              ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n          </table>\n          <div class=\"shareholders-chart\" id=\"";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name")," ",""), env.opts.autoescape);
output += "\" data-shareholders-chart=\"";
output += runtime.suppressValue(env.getFilter("dump").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders")), env.opts.autoescape);
output += "\"></div>\n      </div>\n    </div>\n  ";
;
}
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"beneficialOwnership")) {
output += "\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n          ";
output += runtime.suppressValue((lineno = 70, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Beneficial Ownership"])), env.opts.autoescape);
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n        <p> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"beneficialOwnership")),"description"), env.opts.autoescape);
output += " </p>\n      </div>\n    </div>\n  ";
;
}
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_additionalOrgFieldsBefore: b_additionalOrgFieldsBefore,
b_additionalOrgFieldsAfter: b_additionalOrgFieldsAfter,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["period.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<dl>\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "period")),"startDate")) {
output += "\n    <dt> ";
output += runtime.suppressValue((lineno = 2, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start Date:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue((lineno = 2, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "period"),"startDate"])), env.opts.autoescape);
output += " </dd>\n  ";
;
}
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "period")),"endDate")) {
output += "\n    <dt> ";
output += runtime.suppressValue((lineno = 5, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End Date:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue((lineno = 5, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "period"),"endDate"])), env.opts.autoescape);
output += " </dd>\n  ";
;
}
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "period")),"durationInDays")) {
output += "\n    <dt> ";
output += runtime.suppressValue((lineno = 8, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Duration in Days:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "period")),"durationInDays"), env.opts.autoescape);
output += " </dd>\n  ";
;
}
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "period")),"maxExtentDate")) {
output += "\n    <dt> ";
output += runtime.suppressValue((lineno = 11, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date:"])), env.opts.autoescape);
output += " </dt> <dd>";
output += runtime.suppressValue((lineno = 11, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "period"),"maxExtentDate"])), env.opts.autoescape);
output += " </dd>\n  ";
;
}
output += "\n</dl>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["planning.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"planning\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-body\">\n            <dl> \n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 7, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 12, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"amount"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 14, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"currency"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 16, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 21, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 26, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"id"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 28, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 33, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget Source"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\n                  <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "</a>\n                  ";
output += runtime.suppressValue((lineno = 38, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"source"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 40, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source not provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 46, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 51, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"description"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 53, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                  ";
output += runtime.suppressValue((lineno = 58, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 63, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "planning"),"rationale"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   ";
output += runtime.suppressValue((lineno = 65, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget rationale not provided"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n               </dd>\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap dt-inline\">\n                 ";
output += runtime.suppressValue((lineno = 69, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project Name"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 74, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"project"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 76, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project name not provided."])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n               </dd>\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                 ";
output += runtime.suppressValue((lineno = 80, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 85, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"projectID"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 87, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID not provided"])), env.opts.autoescape);
output += ")</span>\n                 ";
;
}
output += "\n               </dd>\n             </dl> \n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
frame.set("documents", t_1, true);
if(frame.topLevel) {
context.setVariable("documents", t_1);
}
if(frame.topLevel) {
context.addExport("documents", t_1);
}
output += "\n\t\t\t\t\t";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 107, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 111, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n</section>\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["planning_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<section id=\"planning\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-body\">\n            <dl> \n\t\t\t\t\t\t   <dt class=\"dt-large\">\n                  ";
output += runtime.suppressValue((lineno = 8, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 13, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "planning"),"rationale"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   ";
output += runtime.suppressValue((lineno = 15, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget rationale not provided"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 20, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 25, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"amount"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 27, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"currency"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 29, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 34, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 39, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"id"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 41, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 45, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget URI"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"uri")) {
output += "\n                <a href=";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"uri"), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"uri"), env.opts.autoescape);
output += "</a>\n                  ";
output += runtime.suppressValue((lineno = 50, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"uri"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 52, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 58, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 63, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"description"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 65, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n\n             </dl> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 81, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget Breakdown"])), env.opts.autoescape);
output += " \n            </h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped table-condensed\">\n              <thead>\n                <tr>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 90, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 93, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 96, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Source Party"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 99, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Amount"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 102, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += " \n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"budgetBreakdown");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("line", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n                  <tr>\n                    <td>\n                      ";
if(runtime.memberLookup((t_4),"uri")) {
output += "\n                        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</a>\n                      ";
;
}
else {
output += "\n                        ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\n                      ";
;
}
output += "\n                    </td>\n                    <td>\n                      ";
var t_5;
t_5 = runtime.memberLookup((t_4),"period");
frame.set("period", t_5, true);
if(frame.topLevel) {
context.setVariable("period", t_5);
}
if(frame.topLevel) {
context.addExport("period", t_5);
}
output += "\n                      ";
env.getTemplate("period.html", false, "planning_ppp.html", null, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
t_6.render(context.getVariables(), frame, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
output += t_7
output += "\n                    </td>\n                    <td>\n                      ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"id"))) {
output += "\n                         <a data-toggle=\"modal\" href=\"#organization-";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"id"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"name"), env.opts.autoescape);
output += "</a>\n                      ";
;
}
else {
output += "\n                        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"name"), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"id")) {
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"sourceParty")),"id"), env.opts.autoescape);
output += ") </small> ";
;
}
output += "\n                      ";
;
}
output += "\n                    </td>\n                    <td>\n                       ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"amount")), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 129, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"amount"),"amount"])), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"currency"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 131, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"amount"),"currency"])), env.opts.autoescape);
output += "\n                    </td>\n                    <td>\n                     ";
output += runtime.suppressValue((lineno = 134, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "long_text_popout"), "long_text_popout", context, [t_4,"description"])), env.opts.autoescape);
output += "\n                    </td>\n                  </tr>\n                ";
})});
}
}
frame = frame.pop();
output += "\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\t\t</div>\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"project")) {
output += "\n\t\t\t\t\t";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"project");
frame.set("project", t_10, true);
if(frame.topLevel) {
context.setVariable("project", t_10);
}
if(frame.topLevel) {
context.addExport("project", t_10);
}
output += "\n\t\t\t\t\t";
var t_11;
t_11 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_11, true);
if(frame.topLevel) {
context.setVariable("parent", t_11);
}
if(frame.topLevel) {
context.addExport("parent", t_11);
}
output += "\n\t\t\t\t\t";
env.getTemplate("project.html", false, "planning_ppp.html", null, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
t_12.render(context.getVariables(), frame, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
output += t_13
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 156, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 160, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No project provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"forecasts")) {
output += "\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 173, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Forecasts"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n              ";
var t_16;
t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"forecasts");
frame.set("metrics", t_16, true);
if(frame.topLevel) {
context.setVariable("metrics", t_16);
}
if(frame.topLevel) {
context.addExport("metrics", t_16);
}
output += "\n              ";
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_17, true);
if(frame.topLevel) {
context.setVariable("parent", t_17);
}
if(frame.topLevel) {
context.addExport("parent", t_17);
}
output += "\n              ";
env.getTemplate("metrics.html", false, "planning_ppp.html", null, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
t_18.render(context.getVariables(), frame, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
output += t_19
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 186, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Forecasts"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 190, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No forecasts provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_22;
t_22 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"milestones");
frame.set("milestones", t_22, true);
if(frame.topLevel) {
context.setVariable("milestones", t_22);
}
if(frame.topLevel) {
context.addExport("milestones", t_22);
}
output += "\n\t\t\t\t\t";
var t_23;
t_23 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_23, true);
if(frame.topLevel) {
context.setVariable("parent", t_23);
}
if(frame.topLevel) {
context.addExport("parent", t_23);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "planning_ppp.html", null, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
t_24.render(context.getVariables(), frame, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
output += t_25
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 207, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 211, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents")) {
output += "\n\t\t\t\t\t";
var t_28;
t_28 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
frame.set("documents", t_28, true);
if(frame.topLevel) {
context.setVariable("documents", t_28);
}
if(frame.topLevel) {
context.addExport("documents", t_28);
}
output += "\n\t\t\t\t\t";
var t_29;
t_29 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_29, true);
if(frame.topLevel) {
context.setVariable("parent", t_29);
}
if(frame.topLevel) {
context.addExport("parent", t_29);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning_ppp.html", null, function(t_32,t_30) {
if(t_32) { cb(t_32); return; }
t_30.render(context.getVariables(), frame, function(t_33,t_31) {
if(t_33) { cb(t_33); return; }
output += t_31
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 228, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 232, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n</section>\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["prequalification.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"preQualification");
frame.set("tender", t_1, true);
if(frame.topLevel) {
context.setVariable("tender", t_1);
}
if(frame.topLevel) {
context.addExport("tender", t_1);
}
output += "\n<h3 class=\"tab-heading\">\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"title")) {
output += "\n  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"title"])), env.opts.autoescape);
output += "\n";
;
}
else {
output += "\n  ";
output += runtime.suppressValue((lineno = 5, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
output += "\n";
;
}
output += "\n</h3>\n<div class=\"row\">\n\n  <div class=\"col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 14, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"description"])), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n        <dl> \n           <dt class=\"dt-large dt-inline dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 20, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline dd-gap\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 44, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"status"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 26, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-inline\">\n              ";
output += runtime.suppressValue((lineno = 31, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-large dd-inline\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 35, colno = 57, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"eligibilityCriteria"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 37, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n           </dd>\n           <dt class=\"dt-inline dt-large\">\n              ";
output += runtime.suppressValue((lineno = 41, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-inline dd-large\">\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"id"])), env.opts.autoescape);
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 48, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n            <strong>";
output += runtime.suppressValue((lineno = 51, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"startDate")) {
output += "\n              ";
output += runtime.suppressValue((lineno = 53, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period"),"startDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 55, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n            <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 57, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"endDate")) {
output += "\n              ";
output += runtime.suppressValue((lineno = 59, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period"),"endDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 61, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"durationInDays")) {
output += "\n              <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 64, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 65, colno = 57, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period"),"durationInDays"])), env.opts.autoescape);
output += "\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"maxExtentDate")) {
output += "\n              <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 68, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n              ";
output += runtime.suppressValue((lineno = 69, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period"),"maxExtentDate"])), env.opts.autoescape);
output += "\n            ";
;
}
output += "\n            <br/>\n\n\n            <strong>";
output += runtime.suppressValue((lineno = 74, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Qualification start: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod")),"startDate")) {
output += "\n              ";
output += runtime.suppressValue((lineno = 76, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod"),"startDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 78, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n            <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 80, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Qualification end: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod")),"endDate")) {
output += "\n              ";
output += runtime.suppressValue((lineno = 82, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod"),"endDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 84, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod")),"durationInDays")) {
output += "\n              <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 87, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Qualification Period Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 88, colno = 69, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n            ";
;
}
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod")),"maxExtentDate")) {
output += "\n              <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 91, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n              ";
output += runtime.suppressValue((lineno = 92, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"qualificationPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n            ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 97, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n             <p>\n             ";
output += runtime.suppressValue((lineno = 101, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"hasEnquiries"])), env.opts.autoescape);
output += "\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n               ";
output += runtime.suppressValue((lineno = 103, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n               ";
output += runtime.suppressValue((lineno = 105, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 107, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
;
}
output += "\n             </p>\n             <strong>";
output += runtime.suppressValue((lineno = 110, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n             ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n               ";
output += runtime.suppressValue((lineno = 112, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"startDate"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 114, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
output += "\n             <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 116, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n             ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n               ";
output += runtime.suppressValue((lineno = 118, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"endDate"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 120, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
output += "\n\n             ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"durationInDays")) {
output += "\n               <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 124, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries Period Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"durationInDays"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 126, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n             ";
;
}
output += "\n             ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"maxExtentDate")) {
output += "\n               <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 129, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n               ";
output += runtime.suppressValue((lineno = 130, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n             ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 135, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n            <strong>\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n                ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += ":\n                ";
output += runtime.suppressValue((lineno = 141, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethod"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 143, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n            </strong>\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 148, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethodDetails"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 150, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n           </dd>\n         </dl> \n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n      ";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_2, true);
if(frame.topLevel) {
context.setVariable("documents", t_2);
}
if(frame.topLevel) {
context.addExport("documents", t_2);
}
output += "\n      ";
var t_3;
t_3 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_3, true);
if(frame.topLevel) {
context.setVariable("parent", t_3);
}
if(frame.topLevel) {
context.addExport("parent", t_3);
}
output += "\n      ";
env.getTemplate("documents.html", false, "prequalification.html", null, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
t_4.render(context.getVariables(), frame, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
output += t_5
output += "\n    ";
})});
}
else {
output += "\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 168, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
output += runtime.suppressValue((lineno = 172, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n        </div>\n      </div>\n    ";
;
}
output += "\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n           ";
output += runtime.suppressValue((lineno = 184, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procuring Entity"])), env.opts.autoescape);
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"col-md-12\">\n          ";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")),"id"));
frame.set("organization", t_8, true);
if(frame.topLevel) {
context.setVariable("organization", t_8);
}
if(frame.topLevel) {
context.addExport("organization", t_8);
}
output += "\n          ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")),"id"))) {
output += "\n            ";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity");
frame.set("organization", t_9, true);
if(frame.topLevel) {
context.setVariable("organization", t_9);
}
if(frame.topLevel) {
context.addExport("organization", t_9);
}
output += "\n          ";
;
}
output += "\n          ";
env.getTemplate("organization_ppp.html", false, "prequalification.html", null, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
t_10.render(context.getVariables(), frame, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
output += t_11
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n           ";
output += runtime.suppressValue((lineno = 205, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 205, colno = 129, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n        ";
frame = frame.push();
var t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_16) {var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("tenderer", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n          <div class=\"col-md-12\">\n            ";
var t_18;
t_18 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_17),"id"));
frame.set("organization", t_18, true);
if(frame.topLevel) {
context.setVariable("organization", t_18);
}
if(frame.topLevel) {
context.addExport("organization", t_18);
}
output += "\n            ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_17),"id"))) {
output += "\n              ";
var t_19;
t_19 = t_17;
frame.set("organization", t_19, true);
if(frame.topLevel) {
context.setVariable("organization", t_19);
}
if(frame.topLevel) {
context.addExport("organization", t_19);
}
output += "\n            ";
;
}
output += "\n            ";
env.getTemplate("organization_ppp.html", false, "prequalification.html", null, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
t_20.render(context.getVariables(), frame, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
output += t_21
output += "\n          </div>\n        ";
})});
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n      ";
var t_24;
t_24 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_24, true);
if(frame.topLevel) {
context.setVariable("milestones", t_24);
}
if(frame.topLevel) {
context.addExport("milestones", t_24);
}
output += "\n      ";
var t_25;
t_25 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_25, true);
if(frame.topLevel) {
context.setVariable("parent", t_25);
}
if(frame.topLevel) {
context.addExport("parent", t_25);
}
output += "\n      ";
env.getTemplate("milestones.html", false, "prequalification.html", null, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
t_26.render(context.getVariables(), frame, function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
output += t_27
output += "\n    ";
})});
}
else {
output += "\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 233, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
output += runtime.suppressValue((lineno = 237, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n        </div>\n      </div>\n    ";
;
}
output += "\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["project.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(runtime.contextOrFrameLookup(context, frame, "project")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n      ";
output += runtime.suppressValue((lineno = 3, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"project"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project: "])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 87, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"title"])), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 138, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"id"])), env.opts.autoescape);
output += ")</small>\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n  <dl> \n    <dt class=\"dt-large\">\n    </dt>\n    <dd class=\"dd-large\">\n     ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"description")) {
output += "\n       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"description"), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue((lineno = 13, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"description"])), env.opts.autoescape);
output += "\n     ";
;
}
else {
output += "\n       ";
output += runtime.suppressValue((lineno = 15, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project description not provided"])), env.opts.autoescape);
output += "\n     ";
;
}
output += "\n    </dd>\n    <dt class=\"dt-large dt-inline dt-gap\">\n       Further Information\n    </dt>\n    <dd class=\"dd-large dd-inline dd-gap\">\n     ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"uri")) {
output += "\n       <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"uri"), env.opts.autoescape);
output += "</a>\n       ";
output += runtime.suppressValue((lineno = 24, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"uri"])), env.opts.autoescape);
output += "\n     ";
;
}
else {
output += "\n       ";
output += runtime.suppressValue((lineno = 26, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Further information not provided"])), env.opts.autoescape);
output += "\n     ";
;
}
output += "\n    </dd>\n    <dt class=\"dt-large dt-inline dt-gap\">\n     ";
output += runtime.suppressValue((lineno = 30, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Total Value"])), env.opts.autoescape);
output += " \n    </dt>\n    <dd class=\"dd-large dd-inline dd-gap\">\n     ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue")),"amount")) {
output += "\n       ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue")),"amount")), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue((lineno = 35, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue"),"amount"])), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue")),"currency"), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue((lineno = 37, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue"),"currency"])), env.opts.autoescape);
output += "\n     ";
;
}
else {
output += "\n       ";
output += runtime.suppressValue((lineno = 39, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Total value not provided"])), env.opts.autoescape);
output += "\n     ";
;
}
output += "\n   </dd>\n   <dt class=\"dt-large dt-gap\"> ";
output += runtime.suppressValue((lineno = 42, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Sector Classifications"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 42, colno = 78, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"sector"])), env.opts.autoescape);
output += " </dt>\n   <dd class=\"dd-large\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"description"])), env.opts.autoescape);
output += "\n      <small>\n        (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"scheme"), env.opts.autoescape);
output += " -\n        ";
output += runtime.suppressValue((lineno = 47, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"scheme"])), env.opts.autoescape);
output += "\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"uri")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"id"), env.opts.autoescape);
output += "</a>)\n          ";
output += runtime.suppressValue((lineno = 50, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"uri"])), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"id"), env.opts.autoescape);
output += ")\n          ";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"id"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </small>\n      ";
output += runtime.suppressValue((lineno = 56, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"additionalClassifications"])), env.opts.autoescape);
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"additionalClassifications")) {
output += "\n        ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"additionalClassifications");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("classification", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          <br>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "\n          <small>\n            (";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += " -\n            ";
if(runtime.memberLookup((t_4),"uri")) {
output += "\n              <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</a>)\n            ";
;
}
else {
output += "\n              ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += ")\n            ";
;
}
output += "\n          </small>\n        ";
;
}
}
frame = frame.pop();
output += "\n      ";
;
}
output += "\n   </dd>\n   <dt class=\"dt-large dt-gap\">\n       ";
output += runtime.suppressValue((lineno = 72, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project Locations"])), env.opts.autoescape);
output += "\n   </dt>\n   <dd class=\"dd-large\">\n   ";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"locations");
frame.set("locations", t_5, true);
if(frame.topLevel) {
context.setVariable("locations", t_5);
}
if(frame.topLevel) {
context.addExport("locations", t_5);
}
output += "\n   ";
env.getTemplate("locations.html", false, "project.html", null, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
t_6.render(context.getVariables(), frame, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
output += t_7
output += "\n   </dd>\n  </dl> \n\t</div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_release.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("record_release_base.html", true, "record_release.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("release"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_release(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
env.getTemplate("release.html", false, "record_release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_release: b_release,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_release_base.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<ul class=\"release-timeline\">\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "releases");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("release", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n <li class=\"release-timeline-item\">\n   <a href=\"#\" class=\"release-button\" data-release-number=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"), env.opts.autoescape);
output += "\" >\n     <div class=\"release-badge ";
if(runtime.contextOrFrameLookup(context, frame, "releaseNumber") == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0")) {
output += " success ";
;
}
else {
output += "  primary ";
;
}
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "</div>\n   </a>\n   ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n     <span class=\"release-timeline-line\"></span>\n   ";
;
}
output += "\n </li>\n\n";
;
}
}
frame = frame.pop();
output += "\n</ul>\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("release"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_release(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_release: b_release,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_release_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("record_release_base.html", true, "record_release_ppp.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("release"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_release(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
env.getTemplate("release_ppp.html", false, "record_release_ppp.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_release: b_release,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_select.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n    <h2> OCDS Record\n\n    <label id=\"label-id-select\" class=\"pull-right\">\n        OCID:\n    <select id=\"id-select\">\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "ocids");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("id", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n      <option ";
if(t_4 == runtime.contextOrFrameLookup(context, frame, "ocid")) {
output += "selected";
;
}
output += " value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option> \n      ";
;
}
}
frame = frame.pop();
output += "\n    </select>\n    </label>\n    </h2>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["related_processes.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"table-responsive\">\n<table class=\"table table-striped table-responsive\">\n  <thead>\n    <tr>\n      <th>\n        Title\n      </th>\n      <th>\n        ID\n      </th>\n      <th>\n        Scheme - Identifier\n      </th>\n      <th>\n        Relationship\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "relatedProcesses");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("relatedProcess", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n    <tr>\n      <td>\n        ";
if(runtime.memberLookup((t_4),"uri")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += " </a>\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </td>\n      <td>\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\n      </td>\n      <td>\n        <strong> ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += " </strong> - ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"identifier"), env.opts.autoescape);
output += "\n      </td>\n      <td>\n        ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((t_4),"relationship"),", "), env.opts.autoescape);
output += "\n      </td>\n    </tr>\n    ";
;
}
}
frame = frame.pop();
output += "\n  </tbody>\n</table>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "  ";
var macro_t_1 = runtime.makeMacro(
["object", "key"], 
[], 
function (l_object, l_key, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("object", l_object);
frame.set("key", l_key);
var t_2 = "";t_2 += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "get_change")) {
t_2 += "\n      ";
var t_3;
t_3 = (lineno = 2, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "get_change"), "get_change", context, [l_object,l_key]));
frame.set("change", t_3, true);
if(frame.topLevel) {
context.setVariable("change", t_3);
}
if(frame.topLevel) {
context.addExport("change", t_3);
}
t_2 += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "change") == "new") {
t_2 += "\n        <span class=\"label label-success ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 4, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["new"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "change") == "changed") {
t_2 += "\n        <span class=\"label label-primary ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 6, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["changed"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
;
}
t_2 += "\n    ";
;
}
t_2 += "\n  ";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("change_label");
context.setVariable("change_label", macro_t_1);
output += "\n\n  <h1>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"title"), env.opts.autoescape);
output += " ";
if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"title")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += " ";
;
}
output += "  \n  </h1>\n\n<main class=\"row\">\n\n  <ul class=\"release-pills col-md-3 nav nav-pills nav-stacked\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#metadata\">Metadata</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "disabled";
;
}
output += "\" ><a href=\"#procuringEntity\">Procuring entity ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += runtime.suppressValue((lineno = 19, colno = 181, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"tender"])), env.opts.autoescape);
;
}
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "disabled";
;
}
output += "\" ><a href=\"#buyer\">Buyer ";
output += runtime.suppressValue((lineno = 20, colno = 108, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"buyer"])), env.opts.autoescape);
output += " </a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning")) {
output += "disabled";
;
}
output += "\" ><a href=\"#planning\">Planning ";
output += runtime.suppressValue((lineno = 21, colno = 117, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"planning"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")) {
output += "disabled";
;
}
output += " \" ><a href=\"#tender\">Tender ";
output += runtime.suppressValue((lineno = 22, colno = 113, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"tender"])), env.opts.autoescape);
output += "</a> </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards")) {
output += "disabled";
;
}
output += "\" ><a href=\"#awards\">Awards ";
output += runtime.suppressValue((lineno = 23, colno = 112, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"awards"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")) {
output += "disabled";
;
}
output += "\" ><a href=\"#contracts\">Contracts ";
output += runtime.suppressValue((lineno = 24, colno = 121, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"contracts"])), env.opts.autoescape);
output += "</a></li>\n  </ul>\n\n\n  <div id=\"release-tabs\" class=\"tab-content\">\n\t<div class=\"col-md-9 tab-pane active\" id=\"metadata\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>OCID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"id"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Date: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"date"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Tags: </strong>\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag")) {
output += "\n                ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag"),", "), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n\t\t\t\t\t\t\t  ";
output += runtime.suppressValue((lineno = 45, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Tags Provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"initiationType"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t</div>\n\t<div class=\"col-md-9 tab-pane\" id=\"procuringEntity\">\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "\n      ";
var t_4;
t_4 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity");
frame.set("organization", t_4, true);
if(frame.topLevel) {
context.setVariable("organization", t_4);
}
if(frame.topLevel) {
context.addExport("organization", t_4);
}
output += "\n      ";
env.getTemplate("organization.html", false, "release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
})});
}
else {
output += "\n      ";
output += runtime.suppressValue((lineno = 58, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No procuring entity information provided"])), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n  </div>\n\t<div class=\"col-md-9 tab-pane\" id=\"buyer\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "\n      ";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer");
frame.set("organization", t_9, true);
if(frame.topLevel) {
context.setVariable("organization", t_9);
}
if(frame.topLevel) {
context.addExport("organization", t_9);
}
output += "\n      ";
var t_10;
t_10 = (lineno = 64, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"]));
frame.set("title", t_10, true);
if(frame.topLevel) {
context.setVariable("title", t_10);
}
if(frame.topLevel) {
context.addExport("title", t_10);
}
output += "\n      ";
env.getTemplate("organization.html", false, "release.html", null, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
t_11.render(context.getVariables(), frame, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
output += t_12
output += "\n    ";
})});
}
else {
output += "\n      ";
output += runtime.suppressValue((lineno = 67, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No buyer information provided"])), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n\t</div>\n\n  ";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning");
frame.set("planning", t_15, true);
if(frame.topLevel) {
context.setVariable("planning", t_15);
}
if(frame.topLevel) {
context.addExport("planning", t_15);
}
output += "\n\t<div id=\"planning\" class=\"tab-pane col-md-9\">\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n\t\t\t";
env.getTemplate("planning.html", false, "release.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\n\t\t";
})});
}
else {
output += "\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h2 class=\"panel-title\">\n\t\t\t\t\t\tNo planning data provided\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
;
}
output += "\n\t</div>\n  ";
var t_20;
t_20 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender");
frame.set("tender", t_20, true);
if(frame.topLevel) {
context.setVariable("tender", t_20);
}
if(frame.topLevel) {
context.addExport("tender", t_20);
}
output += "\n\t<div id=\"tender\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("tender.html", false, "release.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\n\t</div>\n  ";
var t_25;
t_25 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards");
frame.set("awards", t_25, true);
if(frame.topLevel) {
context.setVariable("awards", t_25);
}
if(frame.topLevel) {
context.addExport("awards", t_25);
}
output += "\n\t<div id=\"awards\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("awards.html", false, "release.html", null, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
t_26.render(context.getVariables(), frame, function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
output += t_27
output += "\n\t</div>\n  ";
var t_30;
t_30 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts");
frame.set("contracts", t_30, true);
if(frame.topLevel) {
context.setVariable("contracts", t_30);
}
if(frame.topLevel) {
context.addExport("contracts", t_30);
}
output += "\n\t<div id=\"contracts\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("contracts.html", false, "release.html", null, function(t_33,t_31) {
if(t_33) { cb(t_33); return; }
t_31.render(context.getVariables(), frame, function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
output += t_32
output += " \t\t\n\t</div>\n</main>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n  ";
var macro_t_1 = runtime.makeMacro(
["object", "key"], 
[], 
function (l_object, l_key, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("object", l_object);
frame.set("key", l_key);
var t_2 = "";t_2 += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "get_change")) {
t_2 += "\n      ";
var t_3;
t_3 = (lineno = 3, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "get_change"), "get_change", context, [l_object,l_key]));
frame.set("change", t_3, true);
if(frame.topLevel) {
context.setVariable("change", t_3);
}
if(frame.topLevel) {
context.addExport("change", t_3);
}
t_2 += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "change") == "new") {
t_2 += "\n        <span class=\"label label-success ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 5, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["new"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "change") == "changed") {
t_2 += "\n        <span class=\"label label-primary ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 7, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["changed"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
;
}
t_2 += "\n    ";
;
}
t_2 += "\n  ";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("change_label");
context.setVariable("change_label", macro_t_1);
output += "\n\n  ";
var macro_t_4 = runtime.makeMacro(
["object", "key"], 
[], 
function (l_object, l_key, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("object", l_object);
frame.set("key", l_key);
var t_5 = "";t_5 += "\n    <span class=\"no-wrap\" data-toggle=\"tooltip\" title=\"";
t_5 += runtime.suppressValue(runtime.memberLookup((l_object),l_key), env.opts.autoescape);
t_5 += "\"> ";
t_5 += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((l_object),l_key),10,true,""), env.opts.autoescape);
t_5 += " ";
t_5 += runtime.suppressValue((lineno = 13, colno = 116, runtime.callWrap(macro_t_1, "change_label", context, [l_object,l_key])), env.opts.autoescape);
t_5 += " \n      \n    ";
if(runtime.memberLookup((l_object),l_key)) {
t_5 += "\n      <span class=\"glyphicon glyphicon-new-window small-icon\" aria-hidden=\"true\"></span> \n    ";
;
}
t_5 += "\n    </span>\n  ";
;
frame = frame.pop();
return new runtime.SafeString(t_5);
});
context.addExport("date_popout");
context.setVariable("date_popout", macro_t_4);
output += "\n\n  ";
var macro_t_6 = runtime.makeMacro(
["object", "key"], 
[], 
function (l_object, l_key, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("object", l_object);
frame.set("key", l_key);
var t_7 = "";t_7 += "\n  <div ";
if(env.getFilter("length").call(context, runtime.memberLookup((l_object),l_key)) > 70) {
t_7 += " data-toggle=\"popover\" ";
;
}
t_7 += " data-trigger=\"hover\" data-placement=\"left\" data-content=\"";
t_7 += runtime.suppressValue(runtime.memberLookup((l_object),l_key), env.opts.autoescape);
t_7 += "\">\n    ";
t_7 += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((l_object),l_key),70), env.opts.autoescape);
t_7 += "\n    ";
t_7 += runtime.suppressValue((lineno = 24, colno = 17, runtime.callWrap(macro_t_1, "change_label", context, [l_object,l_key])), env.opts.autoescape);
t_7 += "\n    ";
if(env.getFilter("length").call(context, runtime.memberLookup((l_object),l_key)) > 70) {
t_7 += " <span class=\"glyphicon glyphicon-new-window small-icon\" aria-hidden=\"true\"></span> ";
;
}
t_7 += "\n  </div>\n  ";
;
frame = frame.pop();
return new runtime.SafeString(t_7);
});
context.addExport("long_text_popout");
context.setVariable("long_text_popout", macro_t_6);
output += "\n\n  <h1>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"title"), env.opts.autoescape);
output += " ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"title")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += " ";
;
}
output += "  \n  </h1>\n\n<main class=\"row\">\n\n  <ul class=\"release-pills col-md-3 nav nav-pills nav-stacked\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#metadata\">Description";
output += runtime.suppressValue((lineno = 36, colno = 86, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"description"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"relatedProcesses")) {
output += "disabled";
;
}
output += "\" >\n       <a href=\"#relatedProcesses\">Related Processes ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"relatedProcesses")) {
output += runtime.suppressValue((lineno = 38, colno = 94, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"relatedProcesses"])), env.opts.autoescape);
;
}
output += "</a>\n    </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties")) {
output += "disabled";
;
}
output += "\" >\n       <a href=\"#parties\">Parties ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties")) {
output += runtime.suppressValue((lineno = 41, colno = 66, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"parties"])), env.opts.autoescape);
;
}
output += "</a>\n    </li>\n       <li role=\"presentation\" class=\"";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"socialWitness")) == 0) {
output += "disabled";
;
}
output += "\" >\n       <a href=\"#social-witness\">Social Witness ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"socialWitness")) {
output += runtime.suppressValue((lineno = 44, colno = 86, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"socialWitness"])), env.opts.autoescape);
;
}
output += "</a>\n    </li>\n\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority")) {
output += "disabled";
;
}
output += "\" ><a href=\"#publicAuthority\">Public Authority ";
output += runtime.suppressValue((lineno = 47, colno = 139, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"publicAuthority"])), env.opts.autoescape);
output += " </a></li>\n\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning")) {
output += "disabled";
;
}
output += "\" ><a href=\"#planning\">Planning ";
output += runtime.suppressValue((lineno = 49, colno = 117, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"planning"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"preQualification")) {
output += "disabled";
;
}
output += " \" ><a href=\"#preQualification\">Pre-Qualification ";
output += runtime.suppressValue((lineno = 50, colno = 144, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"preQualification"])), env.opts.autoescape);
output += "</a> </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")) {
output += "disabled";
;
}
output += "\"><a href=\"#tender\">Tender ";
output += runtime.suppressValue((lineno = 51, colno = 111, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"tender"])), env.opts.autoescape);
output += "</a> </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"bids")) {
output += "disabled";
;
}
output += "\" ><a href=\"#bids\">Bids ";
output += runtime.suppressValue((lineno = 52, colno = 106, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"bids"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards")) {
output += "disabled";
;
}
output += "\" ><a href=\"#awards\">Awards ";
output += runtime.suppressValue((lineno = 53, colno = 112, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"awards"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")) {
output += "disabled";
;
}
output += "\" ><a href=\"#contracts\">Contract ";
output += runtime.suppressValue((lineno = 54, colno = 120, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"contracts"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")),0)),"implementation")) {
output += "disabled";
;
}
output += "\" >\n      <a href=\"#implementation\">Implementation ";
output += runtime.suppressValue((lineno = 56, colno = 60, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")),0)),"implementation"),"contracts"])), env.opts.autoescape);
output += "</a>\n    </li>\n  </ul>\n\n\n  <div id=\"release-tabs\" class=\"tab-content\">\n\t<div class=\"col-md-9 tab-pane active\" id=\"metadata\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n         ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"description"), env.opts.autoescape);
output += "\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <strong>OCID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"id"), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n      <strong>Date: </strong> ";
output += runtime.suppressValue((lineno = 76, colno = 42, runtime.callWrap(macro_t_4, "date_popout", context, [runtime.contextOrFrameLookup(context, frame, "release"),"date"])), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Language: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"language"), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Tags: </strong>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag")) {
output += "\n          ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag"),", "), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 86, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Tags Provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"initiationType"), env.opts.autoescape);
output += "\n      </li>\n    </ul>\n\t</div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"relatedProcesses\">\n    <div class=\"panel panel-default\">\n      ";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"relatedProcesses");
frame.set("relatedProcesses", t_8, true);
if(frame.topLevel) {
context.setVariable("relatedProcesses", t_8);
}
if(frame.topLevel) {
context.addExport("relatedProcesses", t_8);
}
output += "\n      ";
env.getTemplate("related_processes.html", false, "release_ppp.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n    </div>\n  </div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"parties\">\n    ";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("organization", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n      ";
env.getTemplate("organization_ppp.html", false, "release_ppp.html", null, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
t_17.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
output += t_18
output += "\n      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n        <hr>\n      ";
;
}
output += "\n    ";
})});
}
}
frame = frame.pop();
output += "\n  </div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"social-witness\">\n    ";
frame = frame.push();
var t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"socialWitness");
if(t_23) {var t_22 = t_23.length;
for(var t_21=0; t_21 < t_23.length; t_21++) {
var t_24 = t_23[t_21];
frame.set("organization", t_24);
frame.set("loop.index", t_21 + 1);
frame.set("loop.index0", t_21);
frame.set("loop.revindex", t_22 - t_21);
frame.set("loop.revindex0", t_22 - t_21 - 1);
frame.set("loop.first", t_21 === 0);
frame.set("loop.last", t_21 === t_22 - 1);
frame.set("loop.length", t_22);
output += "\n      ";
env.getTemplate("organization_ppp.html", false, "release_ppp.html", null, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
t_25.render(context.getVariables(), frame, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
output += t_26
output += "\n      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n        <hr>\n      ";
;
}
output += "\n    ";
})});
}
}
frame = frame.pop();
output += "\n  </div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"publicAuthority\">\n    ";
var t_29;
t_29 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority")),"id"));
frame.set("organization", t_29, true);
if(frame.topLevel) {
context.setVariable("organization", t_29);
}
if(frame.topLevel) {
context.addExport("organization", t_29);
}
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority")),"id"))) {
output += "\n      ";
var t_30;
t_30 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority");
frame.set("organization", t_30, true);
if(frame.topLevel) {
context.setVariable("organization", t_30);
}
if(frame.topLevel) {
context.addExport("organization", t_30);
}
output += "\n    ";
;
}
output += "\n    ";
var t_31;
t_31 = (lineno = 125, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Public authority"]));
frame.set("title", t_31, true);
if(frame.topLevel) {
context.setVariable("title", t_31);
}
if(frame.topLevel) {
context.addExport("title", t_31);
}
output += "\n    ";
env.getTemplate("organization_ppp.html", false, "release_ppp.html", null, function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
t_32.render(context.getVariables(), frame, function(t_35,t_33) {
if(t_35) { cb(t_35); return; }
output += t_33
output += "\n\t</div>\n\n\n\n  ";
var t_36;
t_36 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning");
frame.set("planning", t_36, true);
if(frame.topLevel) {
context.setVariable("planning", t_36);
}
if(frame.topLevel) {
context.addExport("planning", t_36);
}
output += "\n\t<div id=\"planning\" class=\"tab-pane col-md-9\">\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n\t\t\t";
env.getTemplate("planning_ppp.html", false, "release_ppp.html", null, function(t_39,t_37) {
if(t_39) { cb(t_39); return; }
t_37.render(context.getVariables(), frame, function(t_40,t_38) {
if(t_40) { cb(t_40); return; }
output += t_38
output += "\n\t\t";
})});
}
else {
output += "\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h2 class=\"panel-title\">\n\t\t\t\t\t\tNo planning data provided\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
;
}
output += "\n\t</div>\n  ";
var t_41;
t_41 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"preQualification");
frame.set("tender", t_41, true);
if(frame.topLevel) {
context.setVariable("tender", t_41);
}
if(frame.topLevel) {
context.addExport("tender", t_41);
}
output += "\n\t<div id=\"preQualification\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("prequalification.html", false, "release_ppp.html", null, function(t_44,t_42) {
if(t_44) { cb(t_44); return; }
t_42.render(context.getVariables(), frame, function(t_45,t_43) {
if(t_45) { cb(t_45); return; }
output += t_43
output += "\n\t</div>\n  ";
var t_46;
t_46 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender");
frame.set("tender", t_46, true);
if(frame.topLevel) {
context.setVariable("tender", t_46);
}
if(frame.topLevel) {
context.addExport("tender", t_46);
}
output += "\n\t<div id=\"tender\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("tender_ppp.html", false, "release_ppp.html", null, function(t_49,t_47) {
if(t_49) { cb(t_49); return; }
t_47.render(context.getVariables(), frame, function(t_50,t_48) {
if(t_50) { cb(t_50); return; }
output += t_48
output += "\n\t</div>\n\n  ";
var t_51;
t_51 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"bids");
frame.set("bids", t_51, true);
if(frame.topLevel) {
context.setVariable("bids", t_51);
}
if(frame.topLevel) {
context.addExport("bids", t_51);
}
output += "\n\t<div id=\"bids\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("bids.html", false, "release_ppp.html", null, function(t_54,t_52) {
if(t_54) { cb(t_54); return; }
t_52.render(context.getVariables(), frame, function(t_55,t_53) {
if(t_55) { cb(t_55); return; }
output += t_53
output += "\n\t</div>\n\n\n  ";
var t_56;
t_56 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards");
frame.set("awards", t_56, true);
if(frame.topLevel) {
context.setVariable("awards", t_56);
}
if(frame.topLevel) {
context.addExport("awards", t_56);
}
output += "\n\t<div id=\"awards\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("awards.html", false, "release_ppp.html", null, function(t_59,t_57) {
if(t_59) { cb(t_59); return; }
t_57.render(context.getVariables(), frame, function(t_60,t_58) {
if(t_60) { cb(t_60); return; }
output += t_58
output += "\n\t</div>\n  ";
var t_61;
t_61 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts");
frame.set("contracts", t_61, true);
if(frame.topLevel) {
context.setVariable("contracts", t_61);
}
if(frame.topLevel) {
context.addExport("contracts", t_61);
}
output += "\n\t<div id=\"contracts\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("contracts_ppp.html", false, "release_ppp.html", null, function(t_64,t_62) {
if(t_64) { cb(t_64); return; }
t_62.render(context.getVariables(), frame, function(t_65,t_63) {
if(t_65) { cb(t_65); return; }
output += t_63
output += " \t\t\n\t</div>\n\n\t<div id=\"implementation\" class=\"tab-pane col-md-9\">\n    ";
var t_66;
t_66 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")),0);
frame.set("contract", t_66, true);
if(frame.topLevel) {
context.setVariable("contract", t_66);
}
if(frame.topLevel) {
context.addExport("contract", t_66);
}
output += "\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ";
var t_67;
t_67 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"transactions");
frame.set("transactions", t_67, true);
if(frame.topLevel) {
context.setVariable("transactions", t_67);
}
if(frame.topLevel) {
context.addExport("transactions", t_67);
}
output += "\n        ";
var t_68;
t_68 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_68, true);
if(frame.topLevel) {
context.setVariable("parent", t_68);
}
if(frame.topLevel) {
context.addExport("parent", t_68);
}
output += "\n        ";
env.getTemplate("transactions.html", false, "release_ppp.html", null, function(t_71,t_69) {
if(t_71) { cb(t_71); return; }
t_69.render(context.getVariables(), frame, function(t_72,t_70) {
if(t_72) { cb(t_72); return; }
output += t_70
output += "\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones")) {
output += "\n          ";
var t_73;
t_73 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones");
frame.set("milestones", t_73, true);
if(frame.topLevel) {
context.setVariable("milestones", t_73);
}
if(frame.topLevel) {
context.addExport("milestones", t_73);
}
output += "\n          ";
var t_74;
t_74 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_74, true);
if(frame.topLevel) {
context.setVariable("parent", t_74);
}
if(frame.topLevel) {
context.addExport("parent", t_74);
}
output += "\n          ";
env.getTemplate("milestones.html", false, "release_ppp.html", null, function(t_77,t_75) {
if(t_77) { cb(t_77); return; }
t_75.render(context.getVariables(), frame, function(t_78,t_76) {
if(t_78) { cb(t_78); return; }
output += t_76
output += "\n        ";
})});
}
else {
output += "\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                ";
output += runtime.suppressValue((lineno = 188, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n              </h3>\n            </div>\n            <div class=\"panel-body\">\n              ";
output += runtime.suppressValue((lineno = 192, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n            </div>\n          </div>\n        ";
;
}
output += "\n      </div>\n    </div>\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"charges")) {
output += "\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                ";
output += runtime.suppressValue((lineno = 205, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Charges"])), env.opts.autoescape);
output += "\n              </h3>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th>";
output += runtime.suppressValue((lineno = 212, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\n                    <th>";
output += runtime.suppressValue((lineno = 213, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += "</th>\n                    <th>";
output += runtime.suppressValue((lineno = 214, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Actual Value"])), env.opts.autoescape);
output += "</th>\n                    <th>";
output += runtime.suppressValue((lineno = 215, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Estimated Value"])), env.opts.autoescape);
output += "</th>\n                    <th>";
output += runtime.suppressValue((lineno = 216, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Paid By"])), env.opts.autoescape);
output += "</th>\n                    <th>";
output += runtime.suppressValue((lineno = 217, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += "</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  ";
frame = frame.push();
var t_81 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"charges");
if(t_81) {var t_80 = t_81.length;
for(var t_79=0; t_79 < t_81.length; t_79++) {
var t_82 = t_81[t_79];
frame.set("charge", t_82);
frame.set("loop.index", t_79 + 1);
frame.set("loop.index0", t_79);
frame.set("loop.revindex", t_80 - t_79);
frame.set("loop.revindex0", t_80 - t_79 - 1);
frame.set("loop.first", t_79 === 0);
frame.set("loop.last", t_79 === t_80 - 1);
frame.set("loop.length", t_80);
output += "\n                    <tr> <!-- add conditional colouring based on presence of url? -->\n                      <td>";
output += runtime.suppressValue(runtime.memberLookup((t_82),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 223, colno = 53, runtime.callWrap(macro_t_1, "change_label", context, [t_82,"title"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(runtime.memberLookup((t_82),"id"), env.opts.autoescape);
output += ")";
output += runtime.suppressValue((lineno = 223, colno = 103, runtime.callWrap(macro_t_1, "change_label", context, [t_82,"id"])), env.opts.autoescape);
output += "</small></td>\n                      <td>\n                        ";
var t_83;
t_83 = runtime.memberLookup((t_82),"period");
frame.set("period", t_83, true);
if(frame.topLevel) {
context.setVariable("period", t_83);
}
if(frame.topLevel) {
context.addExport("period", t_83);
}
output += "\n                        ";
env.getTemplate("period.html", false, "release_ppp.html", null, function(t_86,t_84) {
if(t_86) { cb(t_86); return; }
t_84.render(context.getVariables(), frame, function(t_87,t_85) {
if(t_87) { cb(t_87); return; }
output += t_85
output += "\n                      </td>\n                      <td>\n                       ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_82),"estimatedValue")),"amount")), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 230, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_82),"estimatedValue"),"amount"])), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_82),"estimatedValue")),"currency"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 232, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_82),"estimatedValue"),"currency"])), env.opts.autoescape);
output += "\n                      </td>\n                      <td>\n                       ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_82),"actualValue")),"amount")), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 236, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_82),"actualValue"),"amount"])), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_82),"actualValue")),"currency"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 238, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_82),"actualValue"),"currency"])), env.opts.autoescape);
output += "\n                      </td>\n                      <td>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((t_82),"paidBy"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 242, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [t_82,"amount"])), env.opts.autoescape);
output += "\n                      </td>\n                      <td>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((t_82),"notes"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 246, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [t_82,"notes"])), env.opts.autoescape);
output += "\n                      </td>\n                    </tr>\n                  ";
})});
}
}
frame = frame.pop();
output += "\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    ";
;
}
output += "\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents")) {
output += "\n          ";
var t_88;
t_88 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents");
frame.set("documents", t_88, true);
if(frame.topLevel) {
context.setVariable("documents", t_88);
}
if(frame.topLevel) {
context.addExport("documents", t_88);
}
output += "\n          ";
var t_89;
t_89 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_89, true);
if(frame.topLevel) {
context.setVariable("parent", t_89);
}
if(frame.topLevel) {
context.addExport("parent", t_89);
}
output += "\n          ";
env.getTemplate("documents.html", false, "release_ppp.html", null, function(t_92,t_90) {
if(t_92) { cb(t_92); return; }
t_90.render(context.getVariables(), frame, function(t_93,t_91) {
if(t_93) { cb(t_93); return; }
output += t_91
output += "\n        ";
})});
}
else {
output += "\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                ";
output += runtime.suppressValue((lineno = 268, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n              </h3>\n            </div>\n            <div class=\"panel-body\">\n              ";
output += runtime.suppressValue((lineno = 272, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n            </div>\n          </div>\n        ";
;
}
output += "\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"metrics")) {
output += "\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 284, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n              ";
var t_94;
t_94 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"metrics");
frame.set("metrics", t_94, true);
if(frame.topLevel) {
context.setVariable("metrics", t_94);
}
if(frame.topLevel) {
context.addExport("metrics", t_94);
}
output += "\n              ";
var t_95;
t_95 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_95, true);
if(frame.topLevel) {
context.setVariable("parent", t_95);
}
if(frame.topLevel) {
context.addExport("parent", t_95);
}
output += "\n              ";
env.getTemplate("metrics.html", false, "release_ppp.html", null, function(t_98,t_96) {
if(t_98) { cb(t_98); return; }
t_96.render(context.getVariables(), frame, function(t_99,t_97) {
if(t_99) { cb(t_99); return; }
output += t_97
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 297, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 301, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Metrics provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n      </div>\n    </div>\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"tariffs")) {
output += "\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              Tariffs ";
output += runtime.suppressValue((lineno = 314, colno = 34, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"tariffs")])), env.opts.autoescape);
output += " \n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n            <table class=\"table table-striped table-condensed\">\n              <thead>\n                <tr>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 323, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["title"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 326, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 329, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Dimensions"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 332, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 335, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 338, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Paid By"])), env.opts.autoescape);
output += " \n                  </th>\n                  <th>\n                    ";
output += runtime.suppressValue((lineno = 341, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += " \n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                ";
frame = frame.push();
var t_102 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"tariffs");
if(t_102) {var t_101 = t_102.length;
for(var t_100=0; t_100 < t_102.length; t_100++) {
var t_103 = t_102[t_100];
frame.set("tariff", t_103);
frame.set("loop.index", t_100 + 1);
frame.set("loop.index0", t_100);
frame.set("loop.revindex", t_101 - t_100);
frame.set("loop.revindex0", t_101 - t_100 - 1);
frame.set("loop.first", t_100 === 0);
frame.set("loop.last", t_100 === t_101 - 1);
frame.set("loop.length", t_101);
output += "\n                  <tr>\n                    <td>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((t_103),"title"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 350, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [t_103,"title"])), env.opts.autoescape);
output += "\n                       <br>\n                       <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_103),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 352, colno = 55, runtime.callWrap(macro_t_1, "change_label", context, [t_103,"id"])), env.opts.autoescape);
output += " </small>\n                    </td>\n                    <td>\n                      ";
var t_104;
t_104 = runtime.memberLookup((t_103),"period");
frame.set("period", t_104, true);
if(frame.topLevel) {
context.setVariable("period", t_104);
}
if(frame.topLevel) {
context.addExport("period", t_104);
}
output += "\n                      ";
env.getTemplate("period.html", false, "release_ppp.html", null, function(t_107,t_105) {
if(t_107) { cb(t_107); return; }
t_105.render(context.getVariables(), frame, function(t_108,t_106) {
if(t_108) { cb(t_108); return; }
output += t_106
output += "\n                    </td>\n                    <td>\n                      ";
frame = frame.push();
var t_111 = runtime.memberLookup((t_103),"dimensions");
if(t_111) {var t_109;
if(runtime.isArray(t_111)) {
var t_110 = t_111.length;
for(t_109=0; t_109 < t_111.length; t_109++) {
var t_112 = t_111[t_109][0]
frame.set("key", t_111[t_109][0]);
var t_113 = t_111[t_109][1]
frame.set("value", t_111[t_109][1]);
frame.set("loop.index", t_109 + 1);
frame.set("loop.index0", t_109);
frame.set("loop.revindex", t_110 - t_109);
frame.set("loop.revindex0", t_110 - t_109 - 1);
frame.set("loop.first", t_109 === 0);
frame.set("loop.last", t_109 === t_110 - 1);
frame.set("loop.length", t_110);
output += "\n                        <strong>";
output += runtime.suppressValue(t_112, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_113, env.opts.autoescape);
output += "\n                        ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                          <br/>\n                        ";
;
}
output += "\n                      ";
;
}
} else {
t_109 = -1;
var t_110 = runtime.keys(t_111).length;
for(var t_114 in t_111) {
t_109++;
var t_115 = t_111[t_114];
frame.set("key", t_114);
frame.set("value", t_115);
frame.set("loop.index", t_109 + 1);
frame.set("loop.index0", t_109);
frame.set("loop.revindex", t_110 - t_109);
frame.set("loop.revindex0", t_110 - t_109 - 1);
frame.set("loop.first", t_109 === 0);
frame.set("loop.last", t_109 === t_110 - 1);
frame.set("loop.length", t_110);
output += "\n                        <strong>";
output += runtime.suppressValue(t_114, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_115, env.opts.autoescape);
output += "\n                        ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                          <br/>\n                        ";
;
}
output += "\n                      ";
;
}
}
}
frame = frame.pop();
output += "\n                    </td>\n                    <td>\n                       ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_103),"value")),"amount")), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 368, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_103),"value"),"amount"])), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_103),"value")),"currency"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 370, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_103),"value"),"currency"])), env.opts.autoescape);
output += "\n                    </td>\n                    <td>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_103),"unit")),"name"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 374, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_103),"unit"),"name"])), env.opts.autoescape);
output += "\n                       ";
if(runtime.memberLookup((runtime.memberLookup((t_103),"unit")),"id")) {
output += "\n                         ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_103),"unit")),"id"), env.opts.autoescape);
output += "\n                         ";
output += runtime.suppressValue((lineno = 377, colno = 37, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((t_103),"unit"),"id"])), env.opts.autoescape);
output += "\n                       ";
;
}
output += "\n                    </td>\n                    <td>\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_103),"paidBy"), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue((lineno = 382, colno = 34, runtime.callWrap(macro_t_1, "change_label", context, [t_103,"paidBy"])), env.opts.autoescape);
output += "\n                    </td>\n                    <td>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((t_103),"notes"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 386, colno = 35, runtime.callWrap(macro_t_1, "change_label", context, [t_103,"notes"])), env.opts.autoescape);
output += "\n                    </td>\n                  </tr>\n                ";
})});
}
}
frame = frame.pop();
output += "\n              </tbody>\n            </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
;
}
output += "\n\t</div>\n</main>\n\n\n";
frame = frame.push();
var t_118 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties");
if(t_118) {var t_117 = t_118.length;
for(var t_116=0; t_116 < t_118.length; t_116++) {
var t_119 = t_118[t_116];
frame.set("organization", t_119);
frame.set("loop.index", t_116 + 1);
frame.set("loop.index0", t_116);
frame.set("loop.revindex", t_117 - t_116);
frame.set("loop.revindex0", t_117 - t_116 - 1);
frame.set("loop.first", t_116 === 0);
frame.set("loop.last", t_116 === t_117 - 1);
frame.set("loop.length", t_117);
output += "\n  <div class=\"modal\" id=\"organization-";
output += runtime.suppressValue(runtime.memberLookup((t_119),"id"), env.opts.autoescape);
output += "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"orgainization-";
output += runtime.suppressValue(runtime.memberLookup((t_119),"id"), env.opts.autoescape);
output += "\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          ";
env.getTemplate("organization_ppp.html", false, "release_ppp.html", null, function(t_122,t_120) {
if(t_122) { cb(t_122); return; }
t_120.render(context.getVariables(), frame, function(t_123,t_121) {
if(t_123) { cb(t_123); return; }
output += t_121
output += "\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n";
})});
}
}
frame = frame.pop();
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release_select.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "    <h2> PPP Release\n\n    <label id=\"label-id-select\" class=\"pull-right\">\n        Release ID:\n    <select id=\"id-select\">\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "release_ids");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("id", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <option ";
if(t_4 == runtime.contextOrFrameLookup(context, frame, "release_id")) {
output += "selected";
;
}
output += " value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option> \n      ";
;
}
}
frame = frame.pop();
output += "\n    </select>\n    </label>\n    </h2>\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["requirement_responses.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<div class=\"table-responsive\">\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>";
output += runtime.suppressValue((lineno = 5, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Requirement"])), env.opts.autoescape);
output += "</th>\n      <th>";
output += runtime.suppressValue((lineno = 6, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\n      <th>";
output += runtime.suppressValue((lineno = 7, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\n      <th>";
output += runtime.suppressValue((lineno = 8, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += "</th>\n      <th>";
output += runtime.suppressValue((lineno = 9, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Related Tenderer"])), env.opts.autoescape);
output += "</th>\n      <th>";
output += runtime.suppressValue((lineno = 10, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "</th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "requirementResponses");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("requirementResponse", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n      <tr>\n        <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"requirement")),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 16, colno = 64, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"requirement"),"title"])), env.opts.autoescape);
output += " \n          <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"requirement")),"id"), env.opts.autoescape);
output += ")";
output += runtime.suppressValue((lineno = 17, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"requirement"),"id"])), env.opts.autoescape);
output += "<small>  \n        </td>\t<!-- need to consider whether to present the id - make sure this is consistent with documents approach -->\n\n        <td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 20, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"title"])), env.opts.autoescape);
output += "</td>\n        <td> ";
output += runtime.suppressValue((lineno = 21, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "long_text_popout"), "long_text_popout", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n        <td>\n          ";
var t_5;
t_5 = runtime.memberLookup((t_4),"period");
frame.set("period", t_5, true);
if(frame.topLevel) {
context.setVariable("period", t_5);
}
if(frame.topLevel) {
context.addExport("period", t_5);
}
output += "\n          ";
env.getTemplate("period.html", false, "requirement_responses.html", null, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
t_6.render(context.getVariables(), frame, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
output += t_7
output += "\n        </td>\n        <td>\n          ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"id"))) {
output += "\n          <a data-toggle=\"modal\" href=\"#organization-";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"id"), env.opts.autoescape);
output += "\">\n          ";
;
}
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 30, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"relatedTenderer"),"name"])), env.opts.autoescape);
output += "\n          <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"id"), env.opts.autoescape);
output += ")";
output += runtime.suppressValue((lineno = 31, colno = 69, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"relatedTenderer"),"id"])), env.opts.autoescape);
output += "<small>  \n          ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"relatedTenderer")),"id"))) {
output += "\n          </a>\n          ";
;
}
output += "\n        </td>\n        <td>\n           ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"value"), env.opts.autoescape);
output += "\n           ";
output += runtime.suppressValue((lineno = 38, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"value"])), env.opts.autoescape);
output += "\n        </td>\n      </tr>\n    ";
})});
}
}
frame = frame.pop();
output += "\n  </tbody>\t\n</table>\n</div>\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tender.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 5, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 10, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 21, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 29, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minvalue")),"amount") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 39, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 43, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 45, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 45, colno = 125, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"currency"])), env.opts.autoescape);
output += "</small>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 47, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No minimum value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 49, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 51, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 51, colno = 116, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"currency"])), env.opts.autoescape);
output += "</small></p>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 53, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 64, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 69, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"eligibilityCriteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 71, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 80, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 87, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 89, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 93, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 95, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 97, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 101, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 103, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 105, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\t\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 109, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 111, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 113, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 123, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<p>\n            ";
output += runtime.suppressValue((lineno = 128, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"hasEnquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 130, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 132, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 134, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 138, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 141, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 143, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 147, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 150, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 152, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 165, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n\t\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 170, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethod"])), env.opts.autoescape);
output += "</h4>\t<!-- set up a filter or function to convert between codelist values and titles -->\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<h4>No procurement method provided</h4>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 176, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethodRationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 178, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 188, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 195, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 197, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 203, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteriaDetails"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 205, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 215, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 222, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethod"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 224, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 230, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethodDetails"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 232, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n\t\t\t\t\t";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 249, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 253, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n\t\t\t\t\t";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n\t\t\t\t\t";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 269, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 273, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 284, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.contextOrFrameLookup(context, frame, "numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 284, colno = 119, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("tenderer", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) == 1) {
output += "12";
;
}
else {
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) == 2) {
output += "6";
;
}
else {
output += "4";
;
}
;
}
output += "\">\n\t\t\t\t\t\t\t\t";
var t_17;
t_17 = t_16;
frame.set("organization", t_17, true);
if(frame.topLevel) {
context.setVariable("organization", t_17);
}
if(frame.topLevel) {
context.addExport("organization", t_17);
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "tender.html", null, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
t_18.render(context.getVariables(), frame, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
output += t_19
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_22;
t_22 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_22, true);
if(frame.topLevel) {
context.setVariable("milestones", t_22);
}
if(frame.topLevel) {
context.addExport("milestones", t_22);
}
output += "\n\t\t\t\t\t";
var t_23;
t_23 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_23, true);
if(frame.topLevel) {
context.setVariable("parent", t_23);
}
if(frame.topLevel) {
context.addExport("parent", t_23);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "tender.html", null, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
t_24.render(context.getVariables(), frame, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
output += t_25
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 308, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 312, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tender_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "    <h3 class=\"tab-heading\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"title")) {
output += "\n      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 2, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"title"])), env.opts.autoescape);
output += "\n    ";
;
}
else {
output += "\n      ";
output += runtime.suppressValue((lineno = 4, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n    </h3>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 12, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 14, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n            <dl> \n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 18, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 22, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"status"])), env.opts.autoescape);
output += "\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue((lineno = 24, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline\">\n\t\t\t\t\t\t\t    ";
output += runtime.suppressValue((lineno = 29, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline\">\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 33, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"eligibilityCriteria"])), env.opts.autoescape);
output += "\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue((lineno = 35, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n               </dd>\n               <dt class=\"dt-inline dt-large\">\n                  ";
output += runtime.suppressValue((lineno = 39, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\n               </dt>\n               <dd class=\"dd-inline dd-large\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 42, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"id"])), env.opts.autoescape);
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 46, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                <strong>";
output += runtime.suppressValue((lineno = 49, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 51, colno = 64, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 51, colno = 136, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"currency"])), env.opts.autoescape);
output += "</small>\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 53, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No minimum value provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 55, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 57, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 57, colno = 127, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"currency"])), env.opts.autoescape);
output += "</small>\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 59, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t    ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 64, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                <strong>";
output += runtime.suppressValue((lineno = 67, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 69, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 71, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 73, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 75, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 77, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"durationInDays")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 80, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue((lineno = 81, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"maxExtentDate")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 84, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue((lineno = 85, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n\n                <br/>\n                <strong>";
output += runtime.suppressValue((lineno = 90, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 92, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 94, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 96, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 98, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 100, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"durationInDays")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 103, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award Period Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 104, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"maxExtentDate")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 107, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue((lineno = 108, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n                <br/>\n                <strong>";
output += runtime.suppressValue((lineno = 112, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 114, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 116, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 118, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract end: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue((lineno = 120, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 122, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod")),"durationInDays")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 125, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod")),"durationInDays"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 126, colno = 68, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod")),"maxExtentDate")) {
output += "\n                  <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 129, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n                  ";
output += runtime.suppressValue((lineno = 130, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"contractPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 135, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 <p>\n                 ";
output += runtime.suppressValue((lineno = 139, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"hasEnquiries"])), env.opts.autoescape);
output += "\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n                   ";
output += runtime.suppressValue((lineno = 141, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n                   ";
output += runtime.suppressValue((lineno = 143, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 145, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
;
}
output += "\n                 </p>\n                 <strong>";
output += runtime.suppressValue((lineno = 148, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n                   ";
output += runtime.suppressValue((lineno = 150, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 152, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n                 <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 154, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n                   ";
output += runtime.suppressValue((lineno = 156, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 158, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"durationInDays")) {
output += "\n                   <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 161, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries Period Duration (in days): "])), env.opts.autoescape);
output += "</strong>\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"durationInDays"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 163, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"durationInDays"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"maxExtentDate")) {
output += "\n                   <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 166, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries Max Extent Date: "])), env.opts.autoescape);
output += "</strong>\n                   ";
output += runtime.suppressValue((lineno = 167, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"maxExtentDate"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n               </dd>\n\n               ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementCategory")) {
output += "\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 173, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement Category"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementCategory"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 176, colno = 58, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementCategory"])), env.opts.autoescape);
output += "\n               </dd>\n               ";
;
}
output += "\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 181, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n                 <strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += ":";
output += runtime.suppressValue((lineno = 185, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethod"])), env.opts.autoescape);
output += "</strong>\t<!-- set up a filter or function to convert between codelist values and titles -->\n                 ";
;
}
else {
output += "\n                   <strong>No procurement method provided </strong>\n                 ";
;
}
output += "\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 190, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethodRationale"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 192, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodDetails")) {
output += "\n                   <p> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 195, colno = 69, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethodDetails"])), env.opts.autoescape);
output += "</p>\n                 ";
;
}
output += "\n\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 201, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement Categories"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"mainProcurementCategory")) {
output += "\n                   <strong>";
output += runtime.suppressValue((lineno = 205, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Main Procurement Category:"])), env.opts.autoescape);
output += "</strong>\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"mainProcurementCategory"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 206, colno = 64, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"mainProcurementCategory"])), env.opts.autoescape);
output += "</p>\n                 ";
;
}
output += "\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"additionalProcurementCategories")) {
output += "\n                   <strong>";
output += runtime.suppressValue((lineno = 209, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Additional Procurement Categories:"])), env.opts.autoescape);
output += "</strong>\n                   ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"additionalProcurementCategories"),", "), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 210, colno = 83, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"additionalProcurementCategories"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 215, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 <strong>\n                   ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += ":\n                     ";
output += runtime.suppressValue((lineno = 221, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteria"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 223, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                 </strong>\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 228, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteriaDetails"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 230, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                 ";
output += runtime.suppressValue((lineno = 235, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                <strong>\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n                    ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += ":\n                    ";
output += runtime.suppressValue((lineno = 241, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethod"])), env.opts.autoescape);
output += "\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue((lineno = 243, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n                </strong>\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 248, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethodDetails"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 250, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n             </dl> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n\t\t\t\t\t";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender_ppp.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 268, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 272, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n\t\t\t\t\t";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n\t\t\t\t\t";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender_ppp.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 288, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 292, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 304, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procuring Entity"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n            <div class=\"col-md-12\">\n              ";
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")),"id"));
frame.set("organization", t_13, true);
if(frame.topLevel) {
context.setVariable("organization", t_13);
}
if(frame.topLevel) {
context.addExport("organization", t_13);
}
output += "\n              ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")),"id"))) {
output += "\n                ";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity");
frame.set("organization", t_14, true);
if(frame.topLevel) {
context.setVariable("organization", t_14);
}
if(frame.topLevel) {
context.addExport("organization", t_14);
}
output += "\n              ";
;
}
output += "\n              ";
env.getTemplate("organization.html", false, "tender_ppp.html", null, function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
t_15.render(context.getVariables(), frame, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
output += t_16
output += "\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    \n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 325, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n            <div class=\"col-md-12\">\n              ";
frame = frame.push();
var t_21 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"criteria");
if(t_21) {var t_20 = t_21.length;
for(var t_19=0; t_19 < t_21.length; t_19++) {
var t_22 = t_21[t_19];
frame.set("criterion", t_22);
frame.set("loop.index", t_19 + 1);
frame.set("loop.index0", t_19);
frame.set("loop.revindex", t_20 - t_19);
frame.set("loop.revindex0", t_20 - t_19 - 1);
frame.set("loop.first", t_19 === 0);
frame.set("loop.last", t_19 === t_20 - 1);
frame.set("loop.length", t_20);
output += "\n                ";
env.getTemplate("criterion.html", false, "tender_ppp.html", null, function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
t_23.render(context.getVariables(), frame, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
output += t_24
output += "\n              ";
})});
}
}
frame = frame.pop();
output += "\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 344, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 344, colno = 126, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_29 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_29) {var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("tenderer", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) == 1) {
output += "12";
;
}
else {
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) == 2) {
output += "6";
;
}
else {
output += "4";
;
}
;
}
output += "\">\n                ";
var t_31;
t_31 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_30),"id"));
frame.set("organization", t_31, true);
if(frame.topLevel) {
context.setVariable("organization", t_31);
}
if(frame.topLevel) {
context.addExport("organization", t_31);
}
output += "\n                ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_30),"id"))) {
output += "\n                  ";
var t_32;
t_32 = t_30;
frame.set("organization", t_32, true);
if(frame.topLevel) {
context.setVariable("organization", t_32);
}
if(frame.topLevel) {
context.addExport("organization", t_32);
}
output += "\n                ";
;
}
output += "\n                ";
env.getTemplate("organization.html", false, "tender_ppp.html", null, function(t_35,t_33) {
if(t_35) { cb(t_35); return; }
t_33.render(context.getVariables(), frame, function(t_36,t_34) {
if(t_36) { cb(t_36); return; }
output += t_34
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 367, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Targets:"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n          <div class=\"panel-body\">\n            ";
var t_37;
t_37 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"targets");
frame.set("metrics", t_37, true);
if(frame.topLevel) {
context.setVariable("metrics", t_37);
}
if(frame.topLevel) {
context.addExport("metrics", t_37);
}
output += "\n            ";
env.getTemplate("metrics.html", false, "tender_ppp.html", null, function(t_40,t_38) {
if(t_40) { cb(t_40); return; }
t_38.render(context.getVariables(), frame, function(t_41,t_39) {
if(t_41) { cb(t_41); return; }
output += t_39
output += "\n          </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_42;
t_42 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_42, true);
if(frame.topLevel) {
context.setVariable("milestones", t_42);
}
if(frame.topLevel) {
context.addExport("milestones", t_42);
}
output += "\n\t\t\t\t\t";
var t_43;
t_43 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_43, true);
if(frame.topLevel) {
context.setVariable("parent", t_43);
}
if(frame.topLevel) {
context.addExport("parent", t_43);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "tender_ppp.html", null, function(t_46,t_44) {
if(t_46) { cb(t_46); return; }
t_44.render(context.getVariables(), frame, function(t_47,t_45) {
if(t_47) { cb(t_47); return; }
output += t_45
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 388, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 392, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["transactions.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "transactions")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Transactions"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "transactions")) > 0) {
output += "\n      <div class=\"table-responsive\">\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Payee"])), env.opts.autoescape);
output += " </th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Payer"])), env.opts.autoescape);
output += " </th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Related Milestone"])), env.opts.autoescape);
output += " </th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Links"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "transactions");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("transaction", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue((lineno = 24, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "date_popout"), "date_popout", context, [t_4,"date"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"currency"), env.opts.autoescape);
output += "</td>\n\n              <td>\n\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"id"))) {
output += "\n                <a data-toggle=\"modal\" href=\"#organization-";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"id"), env.opts.autoescape);
output += "\">\n                ";
;
}
output += "\n\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"name"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"id"), env.opts.autoescape);
output += ")</a>\n\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"payee")),"id"))) {
output += "\n                </a>\n                ";
;
}
output += "\n              \n              </td>\n              <td>\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"id"))) {
output += "\n                <a data-toggle=\"modal\" href=\"#organization-";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"id"), env.opts.autoescape);
output += "\">\n                ";
;
}
output += "\n\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"name"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"id"), env.opts.autoescape);
output += ")</a></td>\n\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"id") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((t_4),"payer")),"id"))) {
output += "\n                </a>\n                ";
;
}
output += "\n              </td>\n\n              <td>\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"relatedImplementationMilestone")),"title"), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 54, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"relatedImplementationMilestone"),"title"])), env.opts.autoescape);
output += "\n\n                 ";
if(runtime.memberLookup((runtime.memberLookup((t_4),"relatedImplementationMilestone")),"id")) {
output += "\n                   (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"relatedImplementationMilestone")),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 57, colno = 79, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"relatedImplementationMilestone"),"id"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n              </td>\n\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"source"), env.opts.autoescape);
output += "\">Source</a> / <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">URI</a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\t\n        </div>\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue((lineno = 67, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No transactions provided"])), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
