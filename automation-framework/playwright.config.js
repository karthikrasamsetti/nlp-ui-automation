// automation-framework/playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }]
  ],
  use: {
    headless: true
  }
});
