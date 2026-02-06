import {test,expect,chromium} from '@playwright/test';
import dotenv from 'dotenv';

import {loginPage} from '../../AutomationPages/LoginCorrect';//Importing the Logincorrect page from Page object model
import { ProductPage } from '../../AutomationPages/productPage';//Importing the product page from Page object model
import { CartPage } from '../../AutomationPages/AddCartPage';//Importing the cart page from Page object model

//Test suite for Add to cart page
test.describe('Cart Test',()=>{

    let browser,context,page;
    let LoginCorrect;
    let productPage;
    let AddCartPage;
//Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context

        LoginCorrect = new loginPage(page);//Initialize the page object model(POM) of subscription page
        productPage = new ProductPage(page);//Initialize the page object model(POM) of subscription page
        AddCartPage = new CartPage(page);//Initialize the page object model(POM) of subscription page

        await page.goto('/');//Navigate to homepage

        await page.locator('a[href="/login"]').click();
        //Read valid login credentials from environment variables
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);
        await LoginCorrect.userLogin(email,password);//Perform login using reusbale POM function
    });

//Test for add products in cart
    test(' Add Products in Cart',async()=>{
        await productPage.clickProduct();//Click product button
        await productPage.productHeader();//Product Header
        await AddCartPage.HoverfirstProduct();//Hover first product
        await AddCartPage.clickFirstProduct();//Click first product
        await AddCartPage.clickShoppingBtn();//Click continue shopping
        await AddCartPage.HoverSecondProduct();//Hover second product
        await AddCartPage.clickSecondProduct();//Click second product
        await AddCartPage.ViewCartProduct();//Click View cart 
        await AddCartPage.ViewPrice();//View price of first product
        await AddCartPage.ViewQuantity();//View quantity of first product
        await AddCartPage.ViewTotal();//View total price of first product
        await AddCartPage.ViewSecondPrice();//View price of second product
        await AddCartPage.ViewSecondQuantity();//View Quantity of second product
        await AddCartPage.ViewSecondTotal();//View total price of second product

    });

});
