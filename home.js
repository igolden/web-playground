const HomeManager = {
  getSearchParams: function (k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
      p[k] = v;
    });
    return k ? p[k] : p;
  },
  parseAndFillParams: function (k) {
    let params = BillCreator.getSearchParams();

    let keys = Object.keys(params);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];

      let elm = document.querySelector(`input[name='${key}']`);
      if (elm !== null) {
        elm.value = params[key];
      }
    }
  },

  checkError: function () {
    console.log("ECHK");
    let errParam = HomeManager.getSearchParams("error");
    console.log({ errParam });
    if (errParam !== undefined) {
      if (errParam !== "") {
        $("#reauth-toast").addClass("show-toast").text(decodeURIComponent(errParam));
      } else {
        $("#reauth-toast")
          .addClass("show-toast")
          .text("There's been an error. Try again later.");
      }
    }
  },

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

  redirectToError: function () {
    window.location = "/?error=Session Expired";
  },
};

window.onload = function () {
  HomeManager.checkError();
};
