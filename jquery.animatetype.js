(function ( $ ) {
  $.fn.animateType = function(font_size, duration, callback) {
    var FPS = 60;
    var fpms = FPS/1000;
    var framecount = duration * fpms;
    var slice_time = 1000/FPS;
    var current_time = slice_time; // This is the first time we can animate something
    var current_size = parseFloat(this.css('font-size'));
    var slice_size = (parseFloat(font_size) - current_size) / framecount;
    var element = this;
    for(var i = 1; i <= framecount; i++) {
      current_size += slice_size;

      var desired_size = Math.round(current_size);
      var setText = (function(desired_size) {
        return function() {
          //TODO: We need to remove the assumption we're working with pixels
          element.css('font-size', desired_size+ "px");
        };
      })(desired_size);
      setTimeout(setText, current_time);


      current_time += slice_time;
    }


    callback();
    return this;
  }
})(jQuery);
