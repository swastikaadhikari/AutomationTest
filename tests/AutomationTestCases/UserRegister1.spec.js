//Test Case No{1}

import {test,expect,chromium} from '@playwright/test';
import { userRegister } from '../../AutomationPages/RegisterUser';//Importing the regsiter user page from Page object model

//Test Suite for registration functionality
test.describe('Registration form',()=>{
    let browser,context,page;
    let RegisterUser;

    //Runs before each test
    test.beforeEach('',async() =>{
        //Launch browser
        browser = await chromium.launch();
        context = await browser.newContext();//create a new browser context
        page = await context.newPage();//Create a new page inside this context

        RegisterUser = new userRegister(page);//Initialize the page object model(POM)

        await page.goto('/');//Navigate to homepage
        await page.locator('a[href="/login"]').click();//click the login/sign-up page link
    });

    //Registration Test
    test('Register User',async()=>{
        //Verify "New User Signup" text is visible
        await RegisterUser.ViewSignupText();

        //Fill name and email
        await RegisterUser.Fillname('Test');
        await RegisterUser.Fillemail('ssam@gmail.com');

        //Click signup button
        await RegisterUser.clickBtn();

        //validate "Enter Account Information" appears
        await RegisterUser.AccountInfo();
        await RegisterUser.RadioGender();//Select gender
        await RegisterUser.fillPassword('123456');//enter password

        //Select date of birh
        await page.selectOption('select#days','3');
        await page.selectOption('select#months','5');
        await page.selectOption('select#years','2001'); 

        //Tick newsletter and special offers checkboxes
        await RegisterUser.checkNewletter();
        await RegisterUser.checkOption();

        //Fill personal information fields
        await RegisterUser.fillFirstname('Hello');
        await RegisterUser.fillLastname('test');
        await RegisterUser.fillCompany('Company Name');
        await RegisterUser.FillAddress('State');
        await RegisterUser.FillAddress2('State2');
        await RegisterUser.selectCountry('Australia');
        await RegisterUser.fillState('State1');
        await RegisterUser.fillCity('City1');
        await RegisterUser.fillZipcode('2345');
        await RegisterUser.fillNumber('987978908');

        //Submit Form
        await RegisterUser.clickSubmit();

        //Verify account creation success message
        await RegisterUser.AccountCreation();
        //click continue
        await RegisterUser.ClickContinue();

        //Get logged-in username text
        const loginTitle = await page.locator('a:has(i.fa-user)').textContent();
        console.log(loginTitle);
        expect(loginTitle).toBe(' Logged in as Test');//confirm user is logged in

        await RegisterUser.ClickDeleteBtn();
        //await RegisterUser.ViewAccountDelete();
        //await RegisterUser.clickContinue();//Click continue after login confirmation


    })
});