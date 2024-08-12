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
    supportFile:'cypress/support/index.js',
  },
  retries: {
    runMode: 2,  // Número de tentativas ao rodar `cypress run`
    openMode: 2, // Número de tentativas ao rodar `cypress open`
  },
  downloadsFolder: 'cypress/downloads',
  defaultCommandTimeout: 15000,
});
