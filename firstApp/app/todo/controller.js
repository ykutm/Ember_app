import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createTodo: function(){
            var newTodo = this.store.createRecord('todo', {
                name: this.get('name'),
                date: new Date()
            });
            newTodo.save();
            this.set('name','')
        },
        deleteTodo: function(todo) {
            todo.destroyRecord();
        }
    }
});
