// GENERATED_BY_AI: 2025-11-24
import { test, expect } from "@playwright/test";
test("ai saved sample", async ({ page }) => { await page.goto("https://example.com"); await expect(page.locator("h1")).toContainText("Example Domain"); });