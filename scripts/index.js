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
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    buttons = $(".buttons")
    buttons[0].style.display = "flex"
    userBox = $(".userBox")
    userBox[0].style.display = "none"
  }
  