(function($) {
  'use strict';

  // closes the sidebar menu
  $('.menu-toggle').click(function(e) {
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
    $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times');
    $(this).toggleClass('active');
  });

  // smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });

  // closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $('#sidebar-wrapper').removeClass('active');
    $('.menu-toggle').removeClass('active');
    $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times');
  });

  // scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

}(jQuery));

// typing animation effect
(function typingEffect($) {
  'use strict';
  var textArr = [
        'Hello! My name is Michael Yang (杨乐东).',
        'I\'m a JavaScript developer who loves JavaScript and all aspects of the web, as well as other stuff related to programming.',
        'I also love nature and animals. The background image is taken in Niagara Falls Devil\'s Hole State Park, isn\'t it Beautiful! Ah! '
      ],
      speed = 50,
      index = 0,
      textLen = textArr[0].length,
      textPos = 0,
      contents = '',
      row = 0,
      destination = $('#typedtext');

  function typewriter() {
    contents =  ' ';
    row = 0;

    while (row < index) {
      contents += textArr[row] + '<br />';
      row += 1;
    }
    destination.html(contents + textArr[index].substring(0, textPos) + '_');
    textPos += 1;
    if (textPos === textLen) { // sentence ended
      textPos = 0;
      index++;
      if (index !== textArr.length) {
        textLen = textArr[index].length;
        setTimeout(() => {
          typewriter();
        }, 500);
      }
    } else {
      setTimeout(() => {
        typewriter();
      }, speed);
    }
  }
  typewriter();
}(jQuery));
