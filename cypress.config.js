const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 2000,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    env: {
      "URL_DEV": "https://development.app.com",
      "VAR_ENV_CYPRESS_CONFIG_1": "SOY VAR ENV DE CYPRESS CONFIG 1",
      "VAR_ENV_CYPRESS_CONFIG_2": "SOY VAR ENV DE CYPRESS CONFIG 2",
    }
  },
});
