import { test, expect } from '@playwright/test';

test('amazon iphone 17', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.locator('#twotabsearchtextbox').click();

    await page.locator('#twotabsearchtextbox').fill('iPhone 17');
    await page.waitForTimeout(3000);
    await page.locator('//div[@id="sac-suggestion-row-1"]').click();
    await page.waitForTimeout(4000);
    
    const iPhone = page.locator('//span[@data-component-type="s-search-results"]/div/div[@role="listitem"][.//div[@data-cy="reviews-block"]//span[@aria-hidden="true" and contains(text(), "4.6")]]//div[@data-cy="title-recipe"]/a/h2/span[not(@class) and contains(text(), "iPhone 17")]');
      const count = await iPhone.count();
      const product = page.locator('//span[@data-component-type="s-search-results"]/div/div[@role="listitem"][.//div[@data-cy="reviews-block"]//span[@aria-hidden="true" and contains(text(), "4.6")]]//div[@data-cy="title-recipe"]/a/h2/span[not(@class) and contains(text(), "iPhone 17")]');
      const product_name = await product.allTextContents();
console.log("Total No of IPhone 17: " + count);
console.log("No of products(iphone 17): " + product_name);
});