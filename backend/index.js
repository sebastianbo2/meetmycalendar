import express from "express";

const app = express();
app.use("cors");
app.use("json");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000, () => {
  console.log("Server is listening");
});
