// bind interactivity to the color boxes so that, when interacted with, they play a musical tone. :)


// 1---  Our initial goal will to be trigger the appropriate tone when someone clicks inside a box.

 // 2 -- Once that is working we will extend the interaction to be triggered when someone presses a key on the keyboard.

$(document).ready( function() {

  $('.c').on('click', function() {
    $('#cAudio')[0].play();
  });


  $('body').keydown((event) => {
    if (event.key === 'c') {
      $('#cAudio')[0].play();
    } else if (event.key === 'd') {
      $('#dAudio')[0].play();
    } else if (event.key === 'e') {
      $('#eAudio')[0].play();
    } else if (event.key === 'f') {
      $('#fAudio')[0].play();
    }else if (event.key === 'g') {
      $('#gAudio')[0].play();
    } else if (event.key === 'a') {
      $('#aAudio')[0].play();
    }else if (event.key === 'b') {
      $('#bAudio')[0].play();
    }
  });


  $('.d').on('click', function() {
    $('#dAudio')[0].play();
  });

  $('.e').on('click', function() {
    $('#eAudio')[0].play();
  });

  $('.f').on('click', function() {
    $('#fAudio')[0].play();
  });

  $('.g').on('click', function() {
    $('#gAudio')[0].play();
  });

  $('.a').on('click', function() {
    $('#aAudio')[0].play();
  });

  $('.b').on('click', function() {
    $('#bAudio')[0].play();
  });



});
