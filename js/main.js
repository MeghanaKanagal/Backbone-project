require.config({
  paths: {
    jquery: "libs/jquery-3.5.1",
    underscore: "libs/underscore-min",
    backbone: "libs/backbone",
    text: "libs/text.min",
  },
});

require([
  "views/carsview",
  "jquery",
  "models/carmodel",
  "collections/carscollection",
], function (CarView, $, carmodel, cars) {

  $(".add-car").on("click", function () {
    var car = new carmodel({
      name: $(".name-input").val(),
      brand: $(".brand-input").val(),
      location: $(".location-input").val(),
    });
    $(".name-input").val("");
    $(".brand-input").val("");
    $(".location-input").val("");
    cars.add(car);
  });
});
