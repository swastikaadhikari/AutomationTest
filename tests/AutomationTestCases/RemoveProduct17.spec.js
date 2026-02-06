import {test,expect,chromium} from '@playwright/test';
import { ProductRemove } from '../../AutomationPages/RemoveProduct';//Importing the product remove page from Page object model
import { CartPage } from '../../AutomationPages/AddCartPage';//Importing the add to cart page from Page object model

//Test suite for product removal
test.describe('Cart Test',()=>{

    let browser,context,page;
    let AddCartPage;
    let RemoveProduct;
//Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//launch browser
        context = await browser.newContext();//create a new browser context
        page = await context.newPage();;//Create a new page inside this context
         //Initialize the page object model(POM)
        AddCartPage = new CartPage(page);
        RemoveProduct = new ProductRemove(page);

        await page.goto('/');//Navigate to home page
    })
    //Actual test to remove products from cart
    test('Remove Products From Cart',async()=>{
        await RemoveProduct.Addproduct();//Add 1st product
        await RemoveProduct.ClickShoppingBtn();//Click shopping button
        await RemoveProduct.AddSecondProduct();//Add 2nd product
        await AddCartPage.ViewCartProduct();//View cart product
        //await RemoveProduct.RemoveHoverBtn();
        await RemoveProduct.ClickRemoveBtn();//Click remove button
        await RemoveProduct.verifyRemoved();//Verify product remove function


    })
})