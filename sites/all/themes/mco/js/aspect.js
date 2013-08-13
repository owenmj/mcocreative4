(function($) {        
    $(document).ready(function(){ 
	   $('.view-specialisms .item-list .views-field-field-sub-specialisms .content').hide();
	   var anchors = $('.views-field-field-sub-specialisms h2.node-title a');
	   anchors.addClass('anchor-relative');
	   var subheadings = $('.views-field-field-sub-specialisms h2.node-title');
	   subheadings.prepend('<span></span>');
	   var symbols = subheadings.find('span');
	   symbols.addClass('open');	   
	   
           $('.views-field-field-sub-specialisms h2.node-title a').click(function () {
           var item = $(this).closest('.node-sub-specialisms');
           var subheadingSymbol = item.find('h2.node-title span');
           if (subheadingSymbol.hasClass('open')) {
              subheadingSymbol.removeClass('open');
	          subheadingSymbol.addClass('close');
              $('.content', item).show();
           } 
		   else {
               subheadingSymbol.removeClass('close');
			   subheadingSymbol.addClass('open');
			   $('.content', item).hide();
           }
           return false;
        });
    });
})(jQuery)