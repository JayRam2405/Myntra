import { test } from '@playwright/test';
test('Trending now', async ({ page }) => {
  await page.goto("https://in.search.yahoo.com/?fr2=inr");
  await page.locator(`//span[text()='Trending now']/ancestor::div[@class="layoutTop"]/following-sibling::div[@class="layoutMiddle"]/descendant::li[contains(@class, 'keyword-wrapper')][7]`).click();
      
     const Trending = await page.locator(`//span[text()='Trending now']/ancestor::div[@class="layoutTop"]/following-sibling::div[@class="layoutMiddle"]/descendant::li[contains(@class, 'keyword-wrapper')][7]`).allTextContents();
      await page.waitForTimeout(4000);
     console.log("Trending person: " + Trending);
    });