import { test, expect } from '@playwright/test';

test('myntra product', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

//     // Total product count
//     const products = await page
//         .locator('//li[@class="product-base"]')
//         .allTextContents();

//     const count = products.length;

//     console.log("Total Number of Products: " + count);

//    //  minimum price of discounted product
//     async function getMinimumprice() {

//         const priceElements = await page
//             .locator('//div[@class="product-price"]/descendant::span[@class="product-discountedPrice"]')
//             .allTextContents();

//         const prices = priceElements.map(text => {
//             return Number(text.replace(/[^0-9]/g, ''));
//         });

//         const minimum_price = Math.min(...prices);

//         return minimum_price;
//     }


//     // Minimum price product name
//     async function getProductName(minimum_price) {

//         const productname = await page
//             .locator(`//span[@class="product-discountedPrice" and text()="${minimum_price}"]/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`)
//             .textContent();

//         return productname;
//     }


//     //  minimum price
//     const minimum_price = await getMinimumprice();

//     console.log("Minimum Product Price:", minimum_price);


//     // product name
//     const minimumProductName = await getProductName(minimum_price);

//     console.log("Minimum Price Product Name:", minimumProductName);

 


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

        const brand = page.locator(
            `//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[((@class="product-discountedPrice" and contains(.,'${minimum_amount}')) or (contains(.,'${minimum_amount}') and not(@class)))]/parent::div[@class="product-price"]/preceding-sibling::h3[@class="product-brand"]`
        ).first();

        return await brand.textContent();
    }


    // Pass minimum_amount to Product_name()
    const minimumProductName = await Product_name(minimum_amount);

    console.log("Minimum Price Product Name:", minimumProductName);

});
```


  