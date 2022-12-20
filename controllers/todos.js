// the filename is named after our resource

//capital used as convention when doing MVC
const Todo = require("../models/todo");

// "index" is convention for function that displays main show functionalities
// "index" is the go-to for a main file/entry point for an application
function index(req, res) {
  res.render("todos/index.ejs", {
    todos: Todo.getAll(),
    time: req.time,
  });
}
//req.params will return parameters in the matched route
function show(req, res) {
  res.render("todos/show.ejs", {
    todo: Todo.getOne(req.params.id),
  });
}
// create function to export to model

function newPage(req, res) {
    res.render("todos/new.ejs");
}
function create(req, res) {
    //req.body Contains key-value pairs of data submitted in the request body
    const todo = { todo: req.body.todoNameAttr };
    Todo.create(todo);
    res.redirect("/todos");
}
function renderUpdatePage(req, res) {
  //step 2: create uI that issues request that matches the route (created in views folder)
  const todo = Todo.getOne(req.params.id);
  res.render("todos/update", { todo });
}
function updateTodo(req, res) {
  // Step 4: code and export the controller action
  const newTodo = { newTodo: req.body.editTodo };
  const todoId = { todoId: req.params.id }
  const checkBox = { checkBox: req.body.done }
  Todo.updateTodo(newTodo, todoId, checkBox);

  //step 5: res.redirect if data was changed
  res.redirect(`/todos/${req.params.id}`);
}
function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/todos");
}
module.exports = {
  index,
  show,
  new: newPage,
  create,
  delete: deleteTodo,
  renderUpdatePage,
  updateTodo,
};
