$(document).ready(function() {
    $('#signup').on('submit', function(event) {
      event.preventDefault(); // prevent the default form submission behavior
      window.location.href = 'survey.html';
      first = $('#first')[0].value
      setCookie('first', first, 0.5)
    });
  });
  

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }