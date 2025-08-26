const express = require("express");
const { registerUser, loginUser,loginAdmin,getAllUsers,deleteUser } = require("../controllers/authController");
const protect = require("../middleware/adminMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin/login", loginAdmin);
router.get("/users", getAllUsers);
router.delete("/:id",  deleteUser);
module.exports = router;
