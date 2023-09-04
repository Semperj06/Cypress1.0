const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 960,
  e2e: {
    'baseUrl':'https://consumersenergymanagement.ca/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
