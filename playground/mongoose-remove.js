const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.fineOneAndRemove
//Todo.findOneByIdAndRemove

Todo.findOneAndRemove({_id: '59a1e599a72ea9b41e5acc1d'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('59a1e599a72ea9b41e5acc1d').then((todo) => {
  console.log(todo);
});
