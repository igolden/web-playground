// Callback to authenticate
// window.onload = function() {
// auth function here
// }
// function getCookie(cname) {}

const ServusProfileManager = {
  // cname = cookie name
  getCookie: function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  setCookie: function (name, value) {
    document.cookie = `${name}=${value}`;
  },

  redirectToAuth: function () {
    window.location = "/?reauth=true";
  },
};

window.onload = function () {
  let cookie = ServusProfileManager.getCookie("notexist");

  if (cookie.length === 0) {
    ServusProfileManager.redirectToAuth();
    return;
  }
};
