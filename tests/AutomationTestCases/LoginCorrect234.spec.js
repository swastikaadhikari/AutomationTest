//Test Case No{2,3,4}

import {test,expect,chromium} from '@playwright/test';
import {loginPage} from '../../AutomationPages/LoginCorrect';//Importing the Logincorrect page from Page object model
import dotenv from 'dotenv';

//Test suite for login functionality
test.describe('Login Details',()=>{
    let browser,context,page;
    let LoginCorrect;

    //Runs before each test
    test.beforeEach('',async() =>{

        browser = await chromium.launch();//Launch browser
        context = await browser.newContext();//Create a new browser context
        page = await context.newPage();//Create a new page inside this context
        LoginCorrect = new loginPage(page);//Initialize the Page Object Model(POM)

        await page.goto('/');//Navigate to homepage
        await page.locator('a[href="/login"]').click();//Click the login/sign-up button
    });
    //Login Test
    test('Login user with correct email and password',async()=>{
        //Read valid login credentials from environment variables
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);
        await LoginCorrect.userLogin(email,password);
        await expect(page.getByRole('heading',{name:'AutomationExercise'})).toBeVisible();//Verify homepage heading is visible
       
    });

    //Invalid Login Test
    test('Login user with incorrect email and password',async()=>{
       //Read invalid credentials form .env variable
        let email = process.env.invalidEmail;
        let password = process.env.invalidPassword;

        console.log(email);
        console.log(password);

        await LoginCorrect.invalidLogin(email,password);//Attempt login with invalid credentials
        //Read error message displayed on the webpage
        const errorMessage = await page.locator('[style="color: red;"]').textContent();
        console.log(errorMessage);
        //Validate error message appears
        expect(errorMessage).toEqual('Your email or password is incorrect!');
    });

    //Logout Test
    test('Logout User',async()=>{
        //Read valid credentials from .env
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;

        console.log(email);
        console.log(password);
        //Login with valid data
        await LoginCorrect.userLogin(email,password);
        //Read and verify "Logged in as <username>"text
        const loginTitle = await page.locator('a:has(i.fa-user)').textContent();
        console.log(loginTitle);
        //Validate login banner text
        expect(loginTitle).toBe(' Logged in as AutomationTest');
        //Click logout button
        await page.locator('a[href="/logout"]').click();

        //after logout, user should return to login/signup page
        await expect(page.locator('.login-form')).toBeVisible();
        await expect(page.locator('.signup-form')).toBeVisible();
    })


})