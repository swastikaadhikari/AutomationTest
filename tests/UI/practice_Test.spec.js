import { test, expect,chromium } from '@playwright/test';
import path from 'node:path';

test.describe('Automation Practice',()=>{

    test('Student Registration Form',async()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://demoqa.com/automation-practice-form');

        await page.locator('#firstName').fill('Swastika');
        await page.locator('#lastName').fill('Adhikari');
        await page.locator('#userEmail').fill('swastika7@gmail.com');
        await page.locator('[for="gender-radio-2"]').click();
        await page.locator('#userNumber').fill('9866115858');
        await page.locator('#dateOfBirthInput').fill('16 August 2000');

        const filePath = path.resolve(__dirname,'../Data/image.jpg');
        await page.locator('#uploadPicture').setInputFiles(filePath);
        
        await page.locator('[for="hobbies-checkbox-3"]').click();
        await page.locator('#currentAddress').fill('Kathmandu');
        
        await page.locator('#state').scrollIntoViewIfNeeded();//select state from dropdown
        await page.locator('#state').click();//click to open state dropdown
        await page.getByText('Uttar Pradesh',{exact:true}).click();//select uttar pradesh option

        await page.locator('#city').scrollIntoViewIfNeeded();
        await page.locator('#city').click();
        await page.getByText('Agra',{exact:true}).click();
        await page.locator('#submit').click();

        

        //await page.locator('.css-1uccc91-singleValue').selectOption('Haryana');
        //await page.locator('.css-1uccc91-singleValue').selectOption('Panipat');

        const successTitle = await page.locator('#example-modal-sizes-title-lg').textContent();
        console.log(successTitle);
        expect(successTitle).toEqual('Thanks for submitting the form');
    });
});