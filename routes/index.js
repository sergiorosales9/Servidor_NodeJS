const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const contentRoutes = require("./conten");
const AutenthicateUser = require("../middleware/AutenthicateUser");

router.get("/", (req, res, next) => res.send("GESIONANDO USUARIOS"));

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/private", AutenthicateUser, contentRoutes);

router.use("/public", contentRoutes);

module.exports = router;
