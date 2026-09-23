import { test } from '@playwright/test';
test('upload file', async ({ page }) => {
await page.goto('https://demoqa.com/upload-download');
page.locator('uploadFile').setInputFiles('C:\Users\Jay\Downloads\modern-company-logo-design-vector.jpg');
await page.waitForTimeout
})