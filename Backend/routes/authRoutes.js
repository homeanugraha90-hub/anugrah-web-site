const express = require("express");
const { registerUser, loginUser,loginAdmin,getAllUsers } = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);
router.get("/users", getAllUsers);

module.exports = router;
