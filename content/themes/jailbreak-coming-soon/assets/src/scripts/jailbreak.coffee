###
Main JS file for Theme behaviours
###

$(document).foundation(
    accordion:
      multi_expand: true
  )

jQuery ($) ->
  $('#countdown-timer').countdown '2015/01/24', (event) ->
    $(this).html(event.strftime('''<ul>
        <li><span>%-D</span> day%!d</li>
        <li><span>%H</span> hours</li>
        <li><span>%M</span> minutes</li>
        <li><span>%S</span> seconds</li>
      </ul>'''))