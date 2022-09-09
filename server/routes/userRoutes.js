const { register } = require("../controllers/usersControllers");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getallUsers);

module.exports = router;