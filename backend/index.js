import express from "express";
import { getCalendarData } from "./src/getCalendar";

const app = express();
app.use("cors");
app.use("json");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/getCalendarData", async (req, res) => {
  const userId = req.body.userId;
  const googleToken = req.body.googleToken;
  const response = await getCalendarData(userId, googleToken);

  res.json({ data: response });
});

app.listen(8000, () => {
  console.log("Server is listening");
});
