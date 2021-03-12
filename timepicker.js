const TimePicker = {
  init: function () {
    console.log("TIMEPICKER_INIT");
    // Create Time Pickers
    $(".timepicker-start").timepicker({
      timeFormat: "h:mm p",
      interval: 60,
      defaultTime: "7",
      startTime: "12:00",
      dynamic: false,
      dropdown: true,
      scrollbar: true,
    });
    $(".timepicker-end").timepicker({
      timeFormat: "h:mm p",
      interval: 60,
      defaultTime: "18",
      startTime: "12:00",
      dynamic: false,
      dropdown: true,
      scrollbar: true,
    });
  },
};

$(document).ready(function () {
  TimePicker.init();
});
