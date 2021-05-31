//change the values based on selected options
window.addEventListener("load", function () {
  document.querySelector("select").addEventListener("change", function () {
    var select_val = document.querySelector("select").value;
    var input_placeholder = document.getElementById("val");
    var output = document.getElementById("result");
    var error_box = document.getElementById("error-box");
    error_box.style.display = "none";
    input_placeholder.value = "";
    output.value = "";
    if (select_val == "decimal") {
      input_placeholder.setAttribute("placeholder", "Enter Decimal Number");
    } else if (select_val == "KmtoM") {
      input_placeholder.setAttribute(
        "placeholder",
        "Enter Length in Kilometer"
      );
    } else if (select_val == "MtoKm") {
      input_placeholder.setAttribute("placeholder", "Enter Length in Meter");
    } else if (select_val == "MtoCm") {
      input_placeholder.setAttribute("placeholder", "Enter Length in Meter");
    } else if (select_val == "CmtoM") {
      input_placeholder.setAttribute(
        "placeholder",
        "Enter Length in Centimeter"
      );
    } else if (select_val == "CmtoMm") {
      input_placeholder.setAttribute(
        "placeholder",
        "Enter Length in Centimeter"
      );
    } else if (select_val == "MmtoCm") {
      input_placeholder.setAttribute(
        "placeholder",
        "Enter Length in Millimeter"
      );
    }
  });
  // click events are assigned to button based on selected values
  document.querySelector("button").addEventListener("click", function () {
    var select_val = document.querySelector("select").value;
    var result = document.getElementById("result");
    var input_field = document.getElementById("val");
    if (select_val == "decimal") {
      result.value = to_binary("val");
    } else if (select_val == "KmtoM") {
      result.value = kilometer_to_meter("val") + " m";
    } else if (select_val == "MtoKm") {
      result.value = meter_to_kilometer("val") + " km";
    } else if (select_val == "MtoCm") {
      result.value = meter_to_centimeter("val") + " cm";
    } else if (select_val == "CmtoMt") {
      result.value = centimeter_to_meter("val") + " m";
    } else if (select_val == "CmtoMm") {
      result.value = centimeter_to_millimeter("val") + " mm";
    } else if (select_val == "MmtoCm") {
      result.value = millimeter_to_centimeter("val") + " cm";
    }
  });
  document.querySelector(".close-btn").addEventListener("click", function () {
    close_error();
  });
});
//error checking functions;
function check_error() {
  var input_field = document.getElementById("val").value;
  var output_field = document.getElementById("result").value;
  var error_box = document.getElementById("error-box");
  var error = document.querySelector("#error-box p");
  var pattern = /\D/;
  if (input_field == null || input_field == "") {
    output_field = "";
    error_box.style.display = "block";
    error.innerHTML = "oops! empty input field, please enter value";
  } else if (input_field.match(pattern)) {
    output_field.value = "";
    error_box.style.display = "block";
    error.innerHTML = "Invalid input";
  } else {
    error_box.style.display = "none";
    error.innerHTML = "";
  }
}
// function to close errors manually
function close_error() {
  var error_box = document.getElementById("error-box");
  error_box.style.display = "none";
}

//function to convert kilometer to meter
function kilometer_to_meter(x) {
  var kilometer_value, meter_value, int_kilometer_value;
  kilometer_value = document.getElementById(x).value;
  check_error();
  int_kilometer_value = parseInt(kilometer_value);
  meter_value = int_kilometer_value * 1000;
  return meter_value;
}
//function to convert meter to kilometer
function meter_to_kilometer(x) {
  var meter_value, kilometer_value, int_meter_value;
  meter_value = document.getElementById(x).value;
  check_error();
  int_meter_value = parseInt(meter_value);
  kilometer_value = int_meter_value / 1000;
  return kilometer_value;
}
//function to convert meter to centimeter
function meter_to_centimeter(x) {
  var meter_value, centimeter_value, int_meter_value;
  meter_value = document.getElementById(x).value;
  check_error();
  int_meter_value = parseInt(meter_value);
  centimeter_value = int_meter_value * 100;
  return centimeter_value;
}
//function to convert centimeter to meter
function centimeter_to_meter(x) {
  var centimeter_value, meter_value, int_centimeter_value;
  centimeter_value = document.getElementById(x).value;
  check_error();
  int_centimeter_value = parseInt(centimeter_value);
  meter_value = int_centimeter_value / 100;
  return meter_value;
}

//function to convert centimeter to millimeter
function centimeter_to_millimeter(x) {
  var centimeter_value, millimeter_value, int_centimeter_value;
  centimeter_value = document.getElementById(x).value;
  check_error();
  int_centimeter_value = parseInt(centimeter_value);
  millimeter_value = int_centimeter_value * 10;
  return millimeter_value;
}

//function to convert millimeter to centimeter
function millimeter_to_centimeter(x) {
  var millimeter_value, centimeter_value, int_millimeter_value;
  millimeter_value = document.getElementById(x).value;
  check_error();
  int_millimeter_value = parseInt(millimeter_value);
  centimeter_value = int_millimeter_value / 10;
  return centimeter_value;
}

//function to reset values
function ClearFields() {
  document.getElementById("val").value = "";
  document.getElementById("result").value = "";
}