const express = require("express");

const port = 1000;

var app = express();



app.use(express.static(__dirname + "/public"));


// app.get("/about", (req, res) => {
//     res.render("about.hbs", {
//         headerMessage: "About Page",
//     });
// })

// app.get("/", (req, res) => {
//     res.render("home.hbs", {
//         welcomeMessage: "Welcome to HOME WEBSITE",
//         headerMessage: "Home Page",
//     })
// })


app.listen(port, () => {
    console.log("port 1000 is running");
});

