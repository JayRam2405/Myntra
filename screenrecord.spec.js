import{chromium, test}from'@playwright/test';
import { dir } from 'console';
import path from 'path';
test('Launch browser',async({browser})=>){
}    
const browser = await chromium.launch()    
const contex = await chromium.launch().newContext()
const page = await contex.newPage();
const page1 = await contex.newPage();
const page2 = await contex.newPage();
await page.goto('https://www.amazon.in/');
await page1.goto('https://www.flipkart.com/');
await page2.goto('https://www.myntra.com/');


