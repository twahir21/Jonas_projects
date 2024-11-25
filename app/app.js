const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route to render the game
app.get("/", (req, res) => {
    res.render("index");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
