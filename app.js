const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const contactRoute = require("./routes/contact")

app.use(adminRoutes)
app.use(shopRoutes)
app.use(contactRoute)



app.use("/", (req, res, next) =>{ 
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000)