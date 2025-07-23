//Modules
const express = require('express');
const path = require("path");
const router = express.Router();

//Setting up statics
router.use(express.static(path.join(__dirname, '..', 'public')));

router.get("/", (req, res) => {
    console.log("userLanding");
    res.render("userLanding", { name: "" });
    console.log(path.join(__dirname, '..', 'public'));
});

router.post("/", (req, res) => {
    res.render("userLanding", { name: "hello"}, (err, html) => {
        if (err) {
            console.error(err);
        } else {
            console.log(html);
        }
    });
});

router.put("/", (req, res) => {
    console.log("userlanding");
});

router.delete("/", (req, res) => {
    console.log("userlanding");
});


module.exports = router;