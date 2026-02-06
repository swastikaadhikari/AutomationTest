import {test,expect,chromium} from '@playwright/test';
import { CartBrandProduct } from '../../AutomationPages/BrandCart';//Importing the brand cart page from Page object model

test.describe('CartBrand Product',()=>{
    let browser,context,page;
    let BrandCart;
    // Runs before each test case
     test.beforeEach('',async() =>{
        browser = await chromium.launch();// Launches a new browser instance
        context = await browser.newContext(); // Creates a new context
        page = await context.newPage();// Opens a new page in this context
        BrandCart = new CartBrandProduct(page);// Initializes the Page Object for brand cart

         await page.goto('/'); // Navigates to homepage

     });
   // Test case: View and cart brand products 
     test(' View & Cart Brand Products',async()=>{
        await BrandCart.ClickProductBtn();//click producy button
        await BrandCart.ViewBrandHeader();//verify brand text
        await BrandCart.ClickPoloBrand();//Click any brand
        await BrandCart.ViewPoloHeader();//view its product
        await BrandCart.ClickHMBrand();//click 2nd brand
        await BrandCart.ViewHMHeader();//view its product
     })

});