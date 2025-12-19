const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

const router = express.Router();

router.route("/users").get(getAllUsers).post(createUser);
router.route("/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
