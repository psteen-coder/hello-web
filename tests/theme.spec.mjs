import { test, expect } from "@playwright/test";

// Each test gets a fresh browser context, so storage starts empty.
test.use({ colorScheme: "dark" });

const theme = (page) =>
  page.evaluate(() => document.documentElement.getAttribute("data-theme"));

test("toggle switches data-theme and the label", async ({ page }) => {
  await page.goto("/index.html");
  const toggle = page.locator("#theme-toggle");
  expect(await theme(page)).toBeNull();
  await expect(toggle).toHaveAccessibleName("Switch to light theme");

  await toggle.click();
  expect(await theme(page)).toBe("light");
  await expect(toggle).toHaveAccessibleName("Switch to dark theme");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
});

test("theme choice persists across reloads", async ({ page }) => {
  await page.goto("/index.html");
  await page.locator("#theme-toggle").click();
  await page.reload();
  expect(await theme(page)).toBe("light");

  await page.locator("#theme-toggle").click();
  await page.reload();
  expect(await theme(page)).toBeNull();
});
