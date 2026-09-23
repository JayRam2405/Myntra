
import { test, expect } from '@playwright/test';

test('myntra product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

    // Product count
    const products_all = await page
        .locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]')
        .allTextContents();

    const count_all = products_all.length;

    console.log("Product counts : " + count_all);


    // Minimum price of all products
    async function get_Minimum_amount() {

        const priceElements = await page
            .locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]')
            .allTextContents();

        const prices = priceElements.map(text => {
            return Number(text.replace(/[^0-9]/g, ''));
        });

        const minimum_amount = Math.min(...prices);

        return minimum_amount;
    }


    const minimum_amount = await get_Minimum_amount();

    console.log("Minimum Product amount:", minimum_amount);


    // Function to find Product Name
    async function Product_name(minimum_amount) {

        const product = page.locator(
            `//li[@class="product-base"][
                descendant::div[@class="product-price"]
                /descendant::span[
                    (@class="product-discountedPrice" and contains(.,'${minimum_amount}'))
                    or
                    (text() and not(@class) and contains(.,'${minimum_amount}'))
                ]
            ]`
        ).first();

        const brand = product.locator(
            './descendant::h3[@class="product-brand"]'
        );

        return await brand.textContent();
    }


    // Pass minimum_amount to Product_name()
    const minimumProductName = await Product_name(minimum_amount);

    console.log("Minimum Price Product Name:", minimumProductName);

});
```

