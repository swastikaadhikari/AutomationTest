//test case No:8

//import 
import {test,expect,chromium} from  '@playwright/test';
import {loginPage} from '../../AutomationPages/LoginCorrect';// Importing the Login Page object model
import { ProductPage } from '../../AutomationPages/productPage';// Importing the product Page object model
import dotenv from 'dotenv';

//Test suite for product test
test.describe('Product Test',()=>{

    let browser,context,page;
    let productPage;
    let LoginCorrect;

    //Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context
        LoginCorrect = new loginPage(page);//Initialize the page object model(POM) of login page
        productPage = new ProductPage(page);//Initialize the page object model(POM) of product page

        await page.goto('/');//Navigate to homepage

        await page.locator('a[href="/login"]').click();//Click the login/sign-up button
         //Read valid login credentials from environment variables
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);

        LoginCorrect.userLogin(email,password);//Perform login using reusbale POM function
    
    });
    //Actual test for product detail page
    test('Verify All Products and product detail page',async()=>{

        await productPage.clickProduct();//Click product button
        await productPage.productHeader();//Verify All product text visibility
        await productPage.clickFirstProduct();//Click first product
        //View product information
        await productPage.ViewProductDetail();
        await productPage.ViewProductName();
        await productPage.ViewCategory();
        await productPage.ViewPrice();
        await productPage.ViewAvailability();
        await productPage.ViewProductCondition();
        await productPage.ViewBrand();
    })

});