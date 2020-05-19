define(['underscore', 'backbone'], function(_, Backbone){
    var CarList = Backbone.Model.extend({
        defaults: {
            name: null,
            brand: null,
            location: null
        }
    });
    return CarList;
});