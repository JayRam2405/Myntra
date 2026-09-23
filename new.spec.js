const all_Prices = await page.locator('//li[@class="product-base"]/a/div[@class="product-productMetaInfo"]/div[@class="product-price"]/span/span[@class="product-discountedPrice"] | //li[contains(@class,"product-base")][not(.//span[contains(@class,"strike")])]//div[contains(@class,"product-price")]//span');
    const priceText = await all_Prices.allTextContents();
    const price = priceText.map(text => {
        return Number(text.replace(/[^0-9]/g, ''));
    });
    console.log("Minimum price is: "+ Math.min(...price));