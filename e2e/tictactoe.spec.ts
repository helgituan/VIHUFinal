import { test, expect } from '@playwright/test';

// TODO replace these with tic tac toe e2e tests

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const Title = page.getByPlaceholder("Tic Tac Toe");
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tic Tac Toe", /Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
