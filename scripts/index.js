$(document).ready(function() {
    if (getCookie('first') != "") {
        buttons = $(".buttons")
        buttons[0].style.display = "None"
        userBox = $(".userBox")
        userBox[0].style.display = "flex"
        user = $('.user')
        user[0].innerHTML = user[0].innerHTML + " " + getCookie('first').trim()
        user = $(".user")

        $('.signout').on('click', function(event) {
            clearCookie('first');
        });
    }
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function clearCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + document.cookie + ";" + expires + ";path=/";
    location.reload();
  }