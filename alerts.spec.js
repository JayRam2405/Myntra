
import { test } from '@playwright/test';
test('Alert Handling', async ({ page }) => {
await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async (dialog) => {
    console.log('Dialog Message: ' + dialog.message());
    console.log('Dialog Type: ' + dialog.type());
     await page.waitForTimeout(3000);

        if (dialog.type() === 'alert') {
        await dialog.accept();
        } else if (dialog.type() === 'confirm') {
        await dialog.dismiss();
        } else if (dialog.type() === 'prompt') {
        await dialog.accept('Jayaram');
        }
  });
    await page.locator('#alertButton').click();
    await page.locator('#timerAlertButton').click();
    await page.locator('#confirmButton').click();
    await page.locator('#promtButton').click();
});