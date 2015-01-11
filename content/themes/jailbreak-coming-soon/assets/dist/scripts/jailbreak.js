/*
Main JS file for Theme behaviours
*/


(function() {
  $(document).foundation({
    accordion: {
      multi_expand: true
    }
  });

  jQuery(function($) {
    return $('#countdown-timer').countdown('2015/01/24', function(event) {
      return $(this).html(event.strftime('<ul>\n  <li><span>%-D</span> day%!d</li>\n  <li><span>%H</span> hours</li>\n  <li><span>%M</span> minutes</li>\n  <li><span>%S</span> seconds</li>\n</ul>'));
    });
  });

}).call(this);

/*
//@ sourceMappingURL=jailbreak.js.map
*/