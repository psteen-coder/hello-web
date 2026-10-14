import { test, expect } from "@playwright/test";

test("clock shows a time and advances every second", async ({ page }) => {
  // Fixed start time, independent of the runner's real clock and timezone.
  await page.clock.install({ time: new Date("2026-01-01T12:00:00Z") });
  await page.goto("/index.html");

  const first = await page.textContent("#now");
  expect(first).toMatch(/\d/);

  await page.clock.runFor(2000);
  const second = await page.textContent("#now");
  expect(second).not.toBe(first);
});
