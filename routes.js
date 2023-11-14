const UserController = require("./src/controllers/UserController.js");
module.exports = [
  {
    method: "get",
    path: "/user/get",
    controller: UserController.Get,
  },
  {
    method: "post",
    path: "/user/add",
    controller: UserController.Add,
  },
  {
    method: "patch",
    path: "/user/update/:id",
    controller: UserController.Update,
  },
  {
    method: "delete",
    path: "/user/delete/:id",
    controller: UserController.Delete,
  },
];
