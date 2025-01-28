const{test , expect} = require('@playwright/test')

test('Launch amazon',  async({page})=>{


    await page.goto('https://www.amazon.in/');

})