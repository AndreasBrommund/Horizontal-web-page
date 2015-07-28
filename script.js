$(document).ready(function() {
	function scrollToAnchor(aid){
		
		var aTag = $("a[name='"+ aid +"']");
		$('html,body').animate({scrollLeft: aTag.offset().left},800);
		
		
    }
    $("a").click(function() {
        var href = $(this).attr('href').replace('#', '')
        scrollToAnchor(href);
    });  	
});