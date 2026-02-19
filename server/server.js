
const express = require("express");
const cors = require("cors");
const PORT = 8080;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Hello! This is server!"});
});

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
});