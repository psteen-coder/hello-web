import { test, expect } from "@playwright/test";

const pages = [
  { path: "/index.html", title: "Hello, world" },
  { path: "/about.html", title: "About hello-web" },
  { path: "/404.html", title: "Page not found" },
];

for (const { path, title } of pages) {
  test(`${path} loads with no console errors`, async ({ page }) => {
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(title);
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });
}
