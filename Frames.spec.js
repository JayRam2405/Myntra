import {test} from '@playwright/test';
test('Frames Handling', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    const frame = page.frameLocator('//iframe[@name="globalSqa"]');
    await frame.locator("//h3[text()='JMeter Training']").click();
  await page.waitForTimeout(3000);
  await frame.locator("//h3[text()='Mobile Application Testing Training']").click();
  await page.waitForTimeout(3000);
   await page.locator('//span[text()="Sortable"]').click();
  await page.waitForTimeout(3000);
})
