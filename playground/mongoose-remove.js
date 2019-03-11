const {ObjectID} = require ('mongodb')

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findByIdAndRemove({_id: '5c8286a539ff74773e63c20b'}).then((todo) => {

})

// Todo.findByIdAndRemove('5c8286a539ff74773e63c20b').then((todo) => {
//     console.log(todo)
// });


