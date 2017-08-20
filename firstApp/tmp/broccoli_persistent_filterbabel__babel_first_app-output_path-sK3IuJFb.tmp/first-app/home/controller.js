define('first-app/home/controller', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        content: 'this is the some filter content for container. it is said that is ',
        h1: 'jumbotron',
        body: 'container',
        spLogo: 'https://www.ostraining.com/cdn/images/logo/sitepoint_logo_small.jpg',
        responsive: 'img-responsive'
    });
});