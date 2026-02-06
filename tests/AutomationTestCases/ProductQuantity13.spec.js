import {test,expect,chromium} from '@playwright/test';
import { productQuantity } from '../../AutomationPages/ProductQuantity';//Importing the product quantity page from Page object model
import { CartPage } from '../../AutomationPages/AddCartPage';//Importing the Add to cart page from Page object model

//Test suite for product quantity
test.describe('Product Quantity',()=>{
     let browser,context,page;
     let ProductQuantity;
     let AddCartPage;

   //Runs before each test
     test.beforeEach('',async()=>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context

        ProductQuantity = new productQuantity(page);//Initialize the page object model(POM) of product quantity page
        AddCartPage = new CartPage(page);//Initialize the page object model(POM) of Add to cart page

        await page.goto('/');//Navigate to homepage

     });
//Test Case to verify product quantity in cart
     test('Verify Product quantity in Cart',async()=>{
        await ProductQuantity.clickViewProduct();//Click Product button
        await AddCartPage.ViewCartProduct();//View cart product
        await ProductQuantity.fillQuantity('4');//Fill quantity
        await ProductQuantity.ClickCartBtn();//Click add to cart button
        await ProductQuantity.ClickViewBtn();//Click view cart link
        await ProductQuantity.viewNumQuantity();//verify total number of quantity added
     })
});