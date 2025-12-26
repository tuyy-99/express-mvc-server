const getWelcomeMessage = (appName) => {
  return `Welcome to ${appName}`;
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

module.exports = {
  getWelcomeMessage,
  getCurrentTime,
};
