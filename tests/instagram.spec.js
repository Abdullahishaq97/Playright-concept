const{test, expect} = require('@playwright/test')

test('Instagram login'  ,async({page})=>{

    await page.goto('https://www.instagram.com/');

    await page.locator('//input[@aria-label="Phone number, username, or email"]').fill('Abdullah97');

     await page.waitForTimeout(5000);

     await page.screenshot({path:'screenshots/abc.png'});

     await page.pause();













})