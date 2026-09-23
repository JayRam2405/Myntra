import {test} from '@playwright/test';

test('Hyrtutorials points',async({page})=> {

    await page.goto('https://www.hyrtutorials.com/p/frames5-practice.html');

    const frame2 = page.frameLocator('iframe[src="https://www.hyrtutorials.com/p/basic-controls.html"]');

    await frame2.locator('//input[@id="firstName"]').fill('Jay');

    await frame2.locator('//input[@id="lastName"]').fill('Ram');

    await frame2.locator('//input[@id="femaleRb"]').click();

    await frame2.locator('//input[@id="englishchkBx"]').click();

    await frame2.locator('//input[@placeholder="Enter Email"]').fill('Dummy@gmail.com');

    await frame2.locator('//input[@placeholder="Enter Password"]').fill('Jay@2405');

    await page.waitForTimeout(4000);

})