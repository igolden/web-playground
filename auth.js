async function postData(url = "", data = {}) {
  console.log("POSTING");
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
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
    document.cookie = `${name}=${value}`;
  },
  redirectToAuth: function () {
    window.location = "/?reauth=true";
  },
  parseAuthentication: function () {
    var profileId = AuthManager.getSearchParams("profile_id");
    var sessionKey = AuthManager.getSearchParams("session_key");

    // console.log({ profileId, sessionKey });

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
    // console.log({ profileId, sessionKey });
    postData("https://howdyeli.free.beeceptor.com/auth", {
      profile_id: profileId,
      session_key: sessionKey,
    }).then((data) => {
      console.log("NEW", data);
      // Cookie should timeout after 60 miniutes
      AuthManager.setCookie("profile_id", profileId);
      AuthManager.setCookie("session_key", sessionKey);
    });
  },
};

window.onload = function () {
  AuthManager.parseAuthentication();
};