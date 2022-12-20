var express = require("express");
var router = express.Router();

//we need to require the controller in order to have access to its actions (methods):
const todosCtrl = require("../controllers/todos");

router.get("/", todosCtrl.index);
router.get("/new", todosCtrl.new);
router.post("/", todosCtrl.create);
// :id will route anything followed by the given path
router.get("/:id", todosCtrl.show);
router.delete("/:id", todosCtrl.delete);
// step 3: Define the route on the server and map it to a controller action.
router.get("/:id/update", todosCtrl.renderUpdatePage);
router.put("/:id", todosCtrl.updateTodo);

module.exports = router;
