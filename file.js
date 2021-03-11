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
    let copyData = JSON.parse(form);

    let serialized = {};
    copyData.map((item) => {
      let { name, value } = item;
      serialized[name] = value === "on" ? true : false;
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
    var copyData = decodeURIComponent(form);
    let address_line_1 = copyData.split("address_line_1=").pop().split("&")[0];
    let address_line_2 = copyData.split("address_line_2=").pop().split("&")[0];
    let city = copyData.split("city=").pop().split("&")[0];
    let state = copyData.split("state=").pop().split("&")[0];
    let zip_code = copyData.split("zip_code=").pop().split("&")[0];
    let country = copyData.split("country=").pop().split("&")[0];
    let service_radius = copyData.split("service_radius=").pop().split("&")[0];

    let serialized = {
      address_line_1,
      address_line_2,
      city,
      state,
      zip_code,
      country,
      service_radius,
    };

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
    let copyData = JSON.parse(form);
    console.log("COPY: ", copyData);

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
    let copyData = JSON.parse(form);
    console.log("COPY: ", copyData);

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
    let copyData = JSON.parse(form);
    console.log("COPY: ", copyData);

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
    let copyData = JSON.parse(form);
    console.log("COPY: ", copyData);

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
    let copyData = JSON.parse(form);
    console.log("COPY: ", copyData);

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
