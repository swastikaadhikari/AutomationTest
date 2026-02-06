import {test,expect,chromium} from '@playwright/test';
import {loginPage} from '../../AutomationPages/LoginCorrect';// Importing the Login Page object model
import { ProductPage } from '../../AutomationPages/productPage';// Importing the product Page object model
import {ProductSearch} from '../../AutomationPages/searchProduct';// Importing the Search Product object model

//Test suite for product search
test.describe('Product Search',() =>{
    let browser,context,page;
    let LoginCorrect;
    let productPage;
    let searchProduct;

    //Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context

        LoginCorrect = new loginPage(page);//Initialize the page object model(POM) of login page
        productPage = new ProductPage(page);//Initialize the page object model(POM) of product page
        searchProduct = new ProductSearch(page);//Initialize the page object model(POM) of product search page

        await page.goto('/');//Navigate to homepage

        await page.locator('a[href="/login"]').click();//Click the login/sign-up button
        //Read valid login credentials from environment variables
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);

        LoginCorrect.userLogin(email,password);//Perform login using reusbale POM function
    });

       //Actual test for product search page
    test('Search Product',async()=>{
        await productPage.clickProduct();//Click product button
        await productPage.productHeader();//Verify All product text visibility
        await searchProduct.getProduct('women');//Fill the search bar with product nname
        await searchProduct.clickSearchBtn();//Click search button
        await searchProduct.SearchedProduct();//searched product displayed

    })

})