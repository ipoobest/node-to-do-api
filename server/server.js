var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(url, { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minlength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unale to save todo');
// })

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unale to save todo');
});