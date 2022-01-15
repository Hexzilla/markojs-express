const axios = require("axios");

module.exports = {
  updateUsername(username) {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          axios.post(`${window.location}username`, {
            username
          })
        );
      } catch (error) {
        reject(error);
      }
    });
  },
};
