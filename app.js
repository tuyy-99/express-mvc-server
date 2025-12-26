const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use("/api", mainRoutes);

/* 404 */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/* Error handler */
app.use(errorHandler);

module.exports = app;
