

(function (jQuery) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {


jQuery("a[data-help]").on("click",function(e){
	e.preventDefault();
	
	var title = jQuery(e.currentTarget).text();
	var data_help = jQuery(e.currentTarget).attr("data-help");
    /* here you can specify the url */
    var url = '/sites/all/modules/help_dialog/docs/'+data_help;
     
    /* container of the content loaded from a url */
    var tag = jQuery("<div></div>");
     
    console.log("url: " + url);
     
    /* show the image loader */
//    jQuery('#imgLoader').show();
     
    jQuery.ajax({
        url: url,
        success: function( data ) {
         
            tag.html(data).dialog({
                title: title,
                width: '80%',
                height: 450
            }).dialog('open').dialogExtend({
"minimizable" : true,        "maximizable" : true,
    "maximize" : function(evt, dlg){ 
console.log(this);
jQuery(this).parent(".ui-dialog").css("top","50px") },
        "dblclick" : "maximize",
        "icons" : { "maximize" : "ui-icon-arrow-4-diag" }
      });

 
            /* hide the image loader */
//            jQuery('#imgLoader').hide();
            console.log("success!");
        }
    });
return false;

});

    }
  };
})(jQuery);
