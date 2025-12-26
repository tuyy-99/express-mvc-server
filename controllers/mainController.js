const mainService = require("../services/mainService");
const { appName } = require("../config/env");

/* Home */
const home = (req, res) => {
  res.json({
    message: mainService.getWelcomeMessage(appName),
  });
};

/* About */
const about = (req, res) => {
  res.json({
    message: "Advanced Express.js MVC backend",
  });
};

/* Contact */
const contact = (req, res) => {
  res.json({
    email: "contact@example.com",
    phone: "+123456789",
  });
};

/* Dynamic */
const getTime = (req, res) => {
  res.json({
    time: mainService.getCurrentTime(),
  });
};

/* POST */
const echoData = (req, res) => {
  res.json({
    receivedData: req.body,
  });
};

module.exports = {
  home,
  about,
  contact,
  getTime,
  echoData,
};
