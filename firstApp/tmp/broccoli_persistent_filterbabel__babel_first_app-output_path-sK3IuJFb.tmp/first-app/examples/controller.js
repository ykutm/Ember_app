define('first-app/examples/controller', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        showlist: false,
        actions: {
            show: function show() {
                this.set('showList', true);
            },
            hide: function hide() {
                this.set('showList', false);
            }
        },
        people: [{
            name: 'Jordan Houston',
            age: '5 April 1975',
            alias: 'Juicy J',
            hometown: 'Memphis, Tennessee'
        }, {
            name: 'Patrick Houston',
            age: '8 February 1973',
            alias: 'Project Pat',
            hometown: 'Memphis, Tennessee'
        }, {
            name: 'Paul Beauregard',
            age: '12 January 1975',
            alias: 'DJ Paul',
            hometown: 'Memphis, Tennessee'
        }]
    });
});