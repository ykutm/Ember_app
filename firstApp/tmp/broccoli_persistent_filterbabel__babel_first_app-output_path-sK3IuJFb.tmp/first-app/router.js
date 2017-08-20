define('first-app/router', ['exports', 'first-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home', {
      path: '/'
    });
    this.route('examples');
    this.route('todo');
  });

  exports.default = Router;
});