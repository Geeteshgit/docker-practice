import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.send("<h1>This is backend for docker<h1/>");
});

app.get("/content", (req, res) => {
    return res.send("<h1>This is nodemon for docker<h1/>");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
