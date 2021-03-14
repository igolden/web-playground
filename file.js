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
    $("#certifications-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitCertificationsForm(values);
    });
    $("#demographics-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitDemographicsForm(values);
    });
    $("#hours-form").submit(function (e) {
      e.preventDefault();
      e.stopPropagation();
      let values = JSON.stringify($(this).serialize());
      ServusProfileManager.submitHoursForm(values);
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

    console.log({ form });
    console.log("NEW_WORK_TYPES!: ", serialized);

    var submitBtn = document
      .getElementById("work-types-form")
      .querySelector('input[type="submit"]');
    console.log({ submitBtn });
    $(submitBtn).val("load");
    setTimeout(function () {
      $.ajax({
        url: "https://interceptor.ngrok.io/work_types",
        type: "post",
        data: serialized,
        success: function () {
          submitBtn.innerText = "Submit";
          $(submitBtn).val("Submit");
        },
        error: function (e) {
          let elm = document.createElement("p");
          elm.innerText = "Sorry bub.";
          $(form).append(elm);
        },
      });
    }, 1200);


    console.log("Submission Successful: ", serialized);
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
      url: "https://interceptor.ngrok.io/work-area",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitProfileDetailsForm: function (form) {
    let allFiles = document.querySelectorAll("input[type=file]");
    let gotFiles = allFiles[0].files;
    console.log("GOT_PROFILE_FILES:    ", gotFiles);

    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    console.log("NEW_PROFILE_DETAILS!: ", serialized);

    $.ajax({
      url: "https://interceptor.ngrok.io/profile",
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
      url: "https://interceptor.ngrok.io/tax",
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
      url: "https://interceptor.ngrok.io/work_types",
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
      url: "https://interceptor.ngrok.io/insurance",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitCertificationsForm: function (form) {
    let allFiles = document.querySelectorAll("input[type=file]");
    let gotFiles = allFiles[0].files;
    console.log("GOT_CERTIFICATION_FILES:    ", gotFiles);

    let serialized = {};
    console.log("NEW_CERTIFICATIONS_FORM!: ", serialized);

    $.ajax({
      url: "https://interceptor.ngrok.io/certifications",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
    });
  },
  submitDemographicsForm: function (form) {
    let allCheckBoxes = document.querySelectorAll("input[type=checkbox]");

    let serialized = {};
    allCheckBoxes.forEach((item) => {
      if (item.checked) {
        serialized[item.name] = true;
      } else {
        serialized[item.name] = false;
      }
    });

    console.log("NEW_DEMOGRAPHICS_FORM!: ", serialized);

    $.ajax({
      url: "https://interceptor.ngrok.io/demographics",
      type: "post",
      data: serialized,
      success: function () {
        console.log("Submission Successful: ", serialized);
      },
      error: function(e) {
        window.location = "/?error=Server is down."
      }
    });
  },
  submitHoursForm: function (form) {
    let params = $("form").serializeArray();
    let serialized = {};
    params.map((item) => {
      let { name, value } = item;
      serialized[name] = value;
    });

    let allCheckBoxes = document.querySelectorAll("input[type=checkbox]");
    allCheckBoxes.forEach((item) => {
      if (item.checked) {
        serialized[item.name] = true;
      } else {
        serialized[item.name] = false;
      }
    });

    console.log("NEW_HOURS_FORM!: ", serialized);

    $.ajax({
      url: "https://interceptor.ngrok.io/hours",
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
      url: "https://interceptor.ngrok.io/agreement",
      type: "post",
      data: form,
      success: function () {
        console.log("Submission Successful: ", form);
      },
    });
  },
};

window.onload = function () {
  ServusProfileManager.init();
};
