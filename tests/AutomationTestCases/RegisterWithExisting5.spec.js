//Test Case No 5

import {test,expect,chromium} from '@playwright/test';
import { RegisterWithSame } from '../../AutomationPages/ExistingEmail';// Importing the Existing email Page object model

//Test suite for register user with existing email
test.describe('Existing Email',()=>{
    let browser,context,page;
    let ExistingEmail;
    //Runs before each test
    test.beforeEach('',async() =>{
        //Launch browser
        browser = await chromium.launch();
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context
        ExistingEmail = new RegisterWithSame(page);//Initialize the page object model(POM)

        await page.goto('/');//Navigate to homepage
        await page.locator('a[href="/login"]').click();//click the login/sign-up page link
    });

    //Register user with existing email
    test('Register User with existing email',async()=>{
        //Verify "New User Signup" text is visible
        await ExistingEmail.ViewNewUser();
        //Fill name and email
        await ExistingEmail.FillName('Test');
        await ExistingEmail.FillEmail('usersignup@gmail.com');
        //Click signup button
        await ExistingEmail.ClickSignupBtn();

        //Get error message
        const existingEmail = await page.locator('p[style="color: red;"]').textContent();
        console.log(existingEmail);
        expect(existingEmail).toEqual('Email Address already exist!');//Visibility of error message

    })
})