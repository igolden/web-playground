const ServusProfileManager = {
  init: function () {
    // Listeners
    $("#work-types-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitWorkTypesForm();
    });
    $("#work-area-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitWorkAreaForm();
    });
    $("#profile-details-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitProfileDetailsForm();
    });
    $("#tax-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitTaxForm();
    });
    $("#payment-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitPaymentForm();
    });
    $("#insurance-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitInsuranceForm();
    });
    $("#agreements-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      ServusProfileManager.submitAgreementsForm();
    });
  },

  /*
    1. Get Form Values, build to object
    2. Serialize data: let values = JSON.stringify($(this).serializeArray());
    3. Submit
  */
  // Submits
  submitWorkTypesForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/work-types",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
  submitWorkAreaForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/work-area",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
  submitProfileDetailsForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/profile-details",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
  submitTaxForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/tax",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
  submitPaymentForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/payment",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
  submitInsuranceForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/insurance",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
  submitAgreementsForm: function (form) {
    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/agreement",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },

  // Cookies
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
  ServusProfileManager.init();
};
