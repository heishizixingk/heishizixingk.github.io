// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);

$(document).ready(function() {
    /*******************************************************************
     * 1. replace css class "src" and "example" with "prettyprint", for
     *    prettify.js to render
     * 2. replace detail language css class, e.g. "src-scheme" to
     *    "lang-scheme" per the description of prettify.js
     ******************************************************************/
    var $blocks = $('pre.src');
    $blocks.each(function(index) {
        var self = $(this);
        var classes = self.removeClass('src').attr('class').split(/\s+/);
        $.each(classes, function(idx, cls) {
            if (cls.substring(0, 4) === 'src-') {
                var lang = cls.substring(4);
                self.removeClass(cls).addClass('lang-' + lang);
            }
        });
        self.addClass('prettyprint');
    });
    $('pre.example').removeClass('example').addClass('prettyprint');

    /*******************************************************************
     * 1. remove all org exported line number spans
     * 2. add css class "linenums" to code block per the description of
     *    prettify.js
     ******************************************************************/
    var $lines = $('span.linenr');
    var $linedBlocks = $lines.parent();
    $lines.remove();
    $linedBlocks.each(function(index) {
        $(this).addClass('linenums');
    });

    /*******************************************************************
     * pretty print all code blocks
     ******************************************************************/
    prettyPrint();
});

$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为 footer 添加类 fixed-bottom
            $("footer").addClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});
