const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/logInPage");
const testData = require("../testData/testData.json");

test.describe("Data-driven Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("admin", "password123");
  });

  testData.forEach(({ app, task, columnIndex, column, tags }) => {
    test(`Verify task "${task}" in "${app}"`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      // Navigate to the specified application
      await loginPage.navigateTo(app);
      // Locate the column by visible text
      const commonLocator = page.locator(
        `main > div > div > div:nth-child(${columnIndex})`
      );
      const columnLocator = commonLocator.locator(`h2:has-text("${column}")`);
      await expect(columnLocator).toBeVisible();

      // Find the task within the column
      const taskLocator = commonLocator.locator(`h3:has-text("${task}")`);
      await expect(taskLocator).toBeVisible();

      // Verify tags
      for (const tag of tags) {
        const tagSelector = commonLocator.locator(`span:has-text("${tag}")`);
        // `${taskSelector} [data-tag="${tag}"]`;
        await expect(tagSelector).toBeVisible();
      }
    });
  });
});
