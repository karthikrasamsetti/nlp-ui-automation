// automation-framework/tests/manual/sample.spec.js
const { test, expect } = require('@playwright/test');

test('sample loads example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toContainText('Example Domain');
});
