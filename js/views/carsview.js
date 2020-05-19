define([
  "jquery",
  "underscore",
  "backbone",
  "models/carmodel",
  "collections/carscollection",
], function ($, _, Backbone, carmodel, carcollection) {
  var Carview = Backbone.View.extend({
    model: new carmodel(),
    tagName: "tr",
    initialize: function () {
      this.template = _.template($('.cars-list-template').html());
    },
    events: {
      "click .edit-car": "edit",
      "click .update-car": function() {
        this.update();
        this.cancel();
      },
      "click .cancel": "cancel",
      "click .delete-car": "delete",
    },
    edit: function () {
      $(".edit-car").hide();
      $(".delete-car").hide();
      this.$(".update-car").show();
      this.$(".cancel").show();

      var name = this.$(".name").html();
      var brand = this.$(".brand").html();
      var location = this.$(".location").html();

      this.$(".name").html(
        '<input type="text" class="form-control name-update" value="' +
          name +
          '">'
      );
      this.$(".brand").html(
        '<input type="text" class="form-control brand-update" value="' +
          brand +
          '">'
      );
      this.$(".location").html(
        '<input type="text" class="form-control location-update" value="' +
          location +
          '">'
      );
    },
    update: function () {
      this.model.set("name", $(".name-update").val());
      this.model.set("brand", $(".brand-update").val());
      this.model.set("location", $(".location-update").val());

      this.model.save(null, {
        success: function (response) {
          console.log(
            "Successfully UPDATED CAR with Name:" + response.toJSON().name
          );
          //carsView.render();
        },
      });
      carsView.render();
    },
    cancel: function () {
      carsView.render();
    },
    delete: function () {
      this.model.destroy({
        success: function (response) {
          console.log(
            "Successfully DELETED CAR with Name:" + response.toJSON().name
          );
          carsView.render();
        },
      });
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  });

  var CarsView = Backbone.View.extend({
    model: carcollection,
    el: $(".cars-list"),
    initialize: function () {
      var self = this;
      this.model.on("add", this.render, this);
      this.model.on(
        "change",
        function () {
          setTimeout(function () {
            self.render;
          }, 30);
        },
        this
      );
    },
    render: function () {
      var self = this;
      this.$el.html("");
      _.each(this.model.toArray(), function (car) {
        self.$el.append(new Carview({ model: car }).render().$el);
      });
      return this;
    },
  });
  var carsView = new CarsView();
});
