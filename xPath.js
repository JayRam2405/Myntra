import { test, expect } from '@playwright/test';

test('Validate lowest discount price', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts', {
        waitUntil: 'domcontentloaded'
    });
const rateLocators1 = page.locator('//li[@class="product-base"]/a/div[@class="product-productMetaInfo"]/div[@class="product-price"]/span/span[@class="product-discountedPrice"]');
const rateLocators2 = page.locator('//li[contains(@class,"product-base")][not(.//span[contains(@class,"strike")])]//div[contains(@class,"product-price")]//span');

const combined = rateLocators1.or(rateLocators2);
const rateTexts = await combined.allTextContents();
console.log(rateTexts);

const prices = rateTexts.map(text => {
return Number(text.replace(/[^0-9]/g, ''));
});
const lowestPrice = Math.min(...prices);
console.log('Lowest price:', Higherst
    Price);