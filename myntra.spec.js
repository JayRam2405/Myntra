import { test, expect } from '@playwright/test';

test('myntra product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    // Total product count
    const products = await page.locator('//li[@class="product-base"]').allTextContents();
    const count = products.length;
    console.log("Total Number of Products: " + count);

//     //discounted product prices
//     const price_with_discount = await page
//         .locator('//div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]')
//         .allTextContents();
//     const prices = price_with_discount.map(text => {
//         return Number(text.replace(/[^0-9]/g, ''));
//     });
//  let minimum_price= Math.min(...prices)
//     console.log('Prices:', prices);
//     console.log('Lowest price:', minimum_price);

// Minimum price product name
async function getProductName( minimum_price) {

    const productname = await page.locator (`//span[@class="product-discountedPrice"and text()="${minimum_price}"]/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`)
        .textContent();
    
    return productname
    
}
const minimumProductName = await getProductName( minimum_price); 
console.log("Minimum Price Product Name:", minimumProductName);

 async function getMinimumprice() {

    const priceElements = await page.locator(
        '//div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]'
    ).allTextContents();

    const prices = priceElements.map(text => {
        return Number(text.replace(/[^0-9]/g, ''));
    });

    const minimum_price = Math.min(...prices);

    return minimum_price;
}  })

console.log("Minimum Product Price:", await getMinimumprice());

    
   

