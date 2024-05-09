const express = require("express");
const path = require("path");
const app = express();

const port = 8082;

app.use(express.urlencoded());
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")));

const middleware = (req, res, next) => {
    let age = req.query.age;
    if (age >= 18) {
        next();
    }
    res.render("index");
}

// app.use(middleware);

app.get("/", (req, res) => {
    res.render("layout");
})

app.get("/form-basic", (req, res) => {
    res.render("form-basic");
})

app.get("/form-wizard", (req, res) => {
    res.render("form-wizard");
})

app.get("/charts", (req, res) => {
    res.render("charts");
})

app.get("/widgets", (req, res) => {
    res.render("widgets");
})

app.get("/tables", (req, res) => {
    res.render("tables");
})

app.get("/grid", (req, res) => {
    res.render("grid");
})

app.get("/pages-buttons", (req, res) => {
    res.render("pages-buttons");
})

app.get("/icon-material", (req, res) => {
    res.render("icon-material");
})

app.get("/icon-fontawesome", (req, res) => {
    res.render("icon-fontawesome");
})

app.get("/pages-calendar", (req, res) => {
    res.render("pages-calendar");
})

app.get("/pages-chat", (req, res) => {
    res.render("pages-chat");
})

app.get("/pages-elements", (req, res) => {
    res.render("pages-elements");
})

app.get("/pages-gallery", (req, res) => {
    res.render("pages-gallery");
})

app.get("/pages-invoice", (req, res) => {
    res.render("pages-invoice");
})

app.get("/index2", (req, res) => {
    res.render("index2");
})

app.get("/authentication-login", (req, res) => {
    res.render("authentication-login");
})

app.get("/authentication-register", (req, res) => {
    res.render("authentication-register");
})

app.listen(port, (errer) => {
    if (errer) {
        console.log("server not started!!");
        return false;
    }
    console.log("http://localhost:" + port);
})