const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "retries": {
    "runMode": 2,
    "openMode": 2
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false,
    baseUrl: "https://george.csas.cz/?login_hint=7777777777",
    setupNodeEvents,
    numTestsKeptInMemory: 0,
  },
});