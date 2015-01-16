(function($) {
  $.fn.DOMNodeAppear = function(callback) {

    var $this = $(this);

    var options = {
      keyframes: "@keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } } @-moz-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } } @-webkit-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } } @-ms-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } } @-o-keyframes nodeInserted { from { opacity: 0.99; } to { opacity: 0.99; } }, ",
      selector: $this.selector,
      stylesClass: $this.selector.replace(".", ""),
      styles: $this.selector + " { animation-name: nodeInserted; -webkit-animation-name: nodeInserted; animation-duration: 0.001s; -webkit-animation-duration: 0.001s; }"
    }

    // if the keyframes aren't present, add them in a style element
    if(!$("style.domnodeappear-keyframes").length) {
      $("head").append("<style class='domnodeappear-keyframes'>" + options.keyframes + "</style>");
    }

    // add animation to selected element
    $("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")

    // on animation start, execute the callback
    $(document).on('animationstart webkitAnimationStart oanimationstart MSAnimationStart', function(e){
      var self = $(e.target);
      if (e.originalEvent.animationName == 'nodeInserted' && self.is(options.selector)) {
        if (typeof callback == 'function') {
          callback.call(self);
        }
      }
    });

  };
  jQuery.fn.onAppear = jQuery.fn.DOMNodeAppear;
})(jQuery);