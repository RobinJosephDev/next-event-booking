import express from "express";

const app = express();

app.get("/health", (req, res) => {
  console.log("✅ TEST HEALTH HIT");
  res.json({ status: "ok" });
});

app.listen(5001, () => console.log("Test server running on 5001"));
