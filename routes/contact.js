const express = require("express")
const path = require("path")

const router = express.Router()

router.get("/contact", (req, res, next) =>{ 
    res.sendFile(path.join(__dirname, "../", "views", "contact.html"))
})

router.post("/sucess", (req, res, next) =>{ 
    res.sendFile(path.join(__dirname, "../", "views", "sucess.html"))
})

module.exports = router