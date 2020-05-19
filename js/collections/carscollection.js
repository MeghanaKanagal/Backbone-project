define(["underscore", "backbone", "models/carmodel"], function (
  _,
  Backbone,
  CARS
) {
//   var Contact1 = new CARS;
//   Contact1.set({
//     name: "ABC",
//     brand: "xyz",
//     location: "Bangalore",
//   });
//   var Contact2 = new CARS;
//   Contact2.set({
//     name: "ABC",
//     brand: "xyz",
//     location: "Bangalore",
//   });
//   var Contact1 = {
//     name: "ABC",
//     brand: "xyz",
//     location: "Bangalore",
//   };
//   var Contact2 = {
//     name: "Mango",
//     brand: "abc",
//     location: "Shivamogga",
//   };
  
  //var cars = {...Contact1, ...Contact2};
  //var cars = new CarsCollection([Contact1, Contact2]);

  var CarsCollection = Backbone.Collection.extend({
    url: null
  });

  return new CarsCollection();
});
