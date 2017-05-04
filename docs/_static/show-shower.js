$(function() {

$("a[href*='_static/ocds-show']").click(function() { 
$.modal('<iframe src="' + $(this).attr("href") + '" height="800" width="100%" style="border:0">', {
    closeHTML:"",
    containerCss:{
        backgroundColor:"#fff", 
        borderColor:"#fff", 
        height:800, 
        padding:0, 
        width:"90%"
    },
    overlayClose:true
}); ;return false });

})