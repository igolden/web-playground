const ServusProfileManager = {
  init: function () {
    // Listeners
    $("#work-types-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serializeArray());
      ServusProfileManager.submitWorkTypesForm(values);
    });
    $("#work-area-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitWorkAreaForm(values);
    });
    $("#profile-details-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitProfileDetailsForm(values);
    });
    $("#tax-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let value = JSON.stringify($(this).serialize());
      ServusProfileManager.submitTaxForm(value);
    });
    $("#payment-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitPaymentForm(values);
    });
    $("#insurance-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitInsuranceForm(values);
    });
    $("#agreements-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitAgreementsForm(values);
    });
  },

  // Submits
  submitWorkTypesForm: function (form) {
    let allCheckBoxes = document.querySelectorAll("input[type=checkbox]");

    let serialized = {};
    allCheckBoxes.forEach((item) => {
      if (item.checked) {
        serialized[item.name] = true;
      } else {
        serialized[item.name] = false;
      }
    });

    console.log("NEW_WORK_TYPES!: ", serialized);

    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/work-types",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitWorkAreaForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    console.log("NEW_WORK_AREA!: ", serialized);

    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/work-area",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitProfileDetailsForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    console.log("NEW_PROFILE_DETAILS!: ", serialized);

    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/profile-details",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitTaxForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    console.log("NEW_TAX_FORM!: ", serialized);

    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/tax",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitPaymentForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    console.log("NEW_PAYMENT_FORM!: ", serialized);

    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/payment",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitInsuranceForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    console.log("NEW_INSURANCE_FORM!: ", serialized);

    $.ajax({
      url: "https://howdyeli.free.beeceptor.com/insurance",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitAgreementsForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      if (value === "on" || value === "off") {
        serialized[name] = value === "on" ? true : false;
      }
    });

    console.log("NEW_AGREEMENT!: ", serialized);

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
