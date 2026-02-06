import { test, expect,chromium } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import path from 'node:path';

test.describe('Test Suite',() =>{
    let browser,context,page;
    let loginPage;
    test.beforeEach('',async() =>{
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);

        //await page.goto('https://automationexercise.com/');
        await page.goto('/');
    });

    test('Login user with correct email and password',async() =>{
        //initiate browser
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        //const loginPage = new LoginPage(page);
        //await page.goto('https://automationexercise.com/');
        await page.locator('a[href="/login"]').click();
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);

       await loginPage.userLogin(email,password);
         //loginPage.userLogin(process.env.USERNAME,process.env.PASSWORD);
        
        // await page.locator('a[href="/login"]').click();
        // await loginPage.enterEmail('swastikaa719@gmail.com');
        // await loginPage.enterPassword('Hansel@32156');
        // await loginPage.clickLogin();
        await expect(page.locator('html[lang="en"]')).toBeVisible();


        // await expect(page.locator('html[lang="en"]')).toBeVisible();
        // await page.locator('html[lang="en"]').toBeVisible();
        // await page.locator('input[data-qa="login-email"]').fill('swastikaa719@gmail.com');
        // await page.locator('input[data-qa="login-password"]').fill('Hansel@32156');
        // await page.locator('button[data-qa="login-button"]').click();
        // await expect(page.locator('html[lang="en"]')).toBeVisible();
        //await page.locator('html[lang="en"]').isVisible();
    });

    test('Login user with incorrect email and password',async()=>{
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        // await page.goto('https://automationexercise.com/');

        await page.locator('a[href="/login"]').click();
        await loginPage.enterEmail('swastikaa719@gmail.com');
        await loginPage.enterPassword('Hans@32156');
        await loginPage.clickLogin();

        // await page.locator('input[data-qa="login-email"]').fill('swastika719@gmail.com');
        // await page.locator('input[data-qa="login-password"]').fill('Hanse@32156');
        // await page.locator('button[data-qa="login-button"]').click();

        const errorMessage = await page.locator('[style="color: red;"]').textContent();
        console.log(errorMessage);
        expect(errorMessage).toEqual('Your email or password is incorrect!');

        //await expect(page.locator('p[style="color: red;"]')).toBeVisible();
    });

    test('Logout User',async() => {
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();

        await page.locator('a[href="/login"]').click();
        await loginPage.enterEmail('swastikaa719@gmail.com');
        await loginPage.enterPassword('Hansel@32156');
        await loginPage.clickLogin();

        // await page.locator('input[data-qa="login-email"]').fill('swastikaa719@gmail.com');
        // await page.locator('input[data-qa="login-password"]').fill('Hansel@32156');
        // await page.locator('button[data-qa="login-button"]').click();

        //await expect(page.locator('a:has(i.fa-user)')).toContainText('Logged in as Swastika');
        const loginTitle = await page.locator('a:has(i.fa-user)').textContent();
        console.log(loginTitle);
        expect(loginTitle).toBe(' Logged in as Swastika');

        //await expect(page.locator('a i.fa-user')).toBeVisible();//wait for the element to become visible
        //await page.locator('a i.fa-user').isVisible();checks for the visibility of an element immediately
        await page.locator('a[href="/logout"]').click();
        await expect(page.getByRole('heading',{name:'Login to your account'})).toBeVisible();
        await expect(page.getByRole('heading',{name:'New User Signup!'})).toBeVisible();
    });

    test('Register user with existing email',async() => {
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        //await page.goto('https://automationexercise.com');

        await page.locator('a[href="/login"]').click();
        await expect(page.locator('//h2[contains(text(),"New User Signup!")]')).toBeVisible();
        // loginPage.enterEmail('swastikaa719@gmail.com');
        // loginPage.enterPassword('Hansel@32156');
        // loginPage.clickLogin();

        await page.locator('input[data-qa="signup-name"]').fill('Swastika');
        await page.locator('input[data-qa ="signup-email"]').fill('swastikaa719@gmail.com');
        await page.locator('button[data-qa ="signup-button"]').click()
        //await expect(page.locator('p[style="color: red;"]')).toBeVisible();
        //await page.locator('p[style="color: red;"]').isVisible();
        const existingEmail = await page.locator('p[style="color: red;"]').textContent();
        console.log(existingEmail);
        expect(existingEmail).toEqual('Email Address already exist!');
    });

    test('Contact Us Form',async()=>{
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://automationexercise.com');
        await expect(page.locator('html[lang="en"]')).toBeVisible();
        await page.locator('a[href="/contact_us"]').click();
        await expect(page.getByRole('heading',{name:'Get In Touch'})).toBeVisible();
        await page.locator('input[data-qa="name"]').fill('Test');
        await page.locator('input[data-qa="email"]').fill('test@gmail.com');
        await page.locator('input[data-qa="subject"]').fill('Test');
        await page.locator('#message').fill('Message');
        const filePath = path.resolve(__dirname,'../../Data/contact.jpg');
        await page.locator('#input[name="upload_file"]').setInputFiles(filePath);
        await page.locator('input[data-qa="submit-button"]').click();
        
    });
});