let router = require("express").Router();

let user = require("./user");
let itinerarycity = require("./itinerarycity");
let hotel = require("./hotel");
let city = require("./city");
let showHotel = require("./showHotel");
let comment = require('./comment')

router.use("/auth", user);
router.use("/api", itinerarycity);
router.use("/api", hotel);
router.use("/api", city);
router.use("/api", showHotel);
router.use("/api", comment)

module.exports = router;
