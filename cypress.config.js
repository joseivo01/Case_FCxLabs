const { defineConfig } = require('cypress');

async function setupNodeEvents(on, config) {
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.spec.cy.js',
    chromeWebSecurity: false,
    baseUrl: 'https://www.ferreiracosta.com',
    supportFile: 'cypress/support/commands.js',
  },
  downloadsFolder: 'cypress/downloads',
  defaultCommandTimeout: 15000,
});
