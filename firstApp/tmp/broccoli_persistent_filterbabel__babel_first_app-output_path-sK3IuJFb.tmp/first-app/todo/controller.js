define('first-app/todo/controller', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            createTodo: function createTodo() {
                var newTodo = this.store.createRecord('todo', {
                    name: this.get('name'),
                    date: new Date()
                });
                newTodo.save();
                this.set('name', '');
            },
            deleteTodo: function deleteTodo(todo) {
                todo.destroyRecord();
            }
        }
    });
});