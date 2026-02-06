import {test,expect,chromium} from '@playwright/test';
import { userRegister } from '../../AutomationPages/RegisterUser';//Importing the Registeruser page from Page object model
import {loginPage} from '../../AutomationPages/LoginCorrect';//Importing the Logincorrect page from Page object model
import { ProductPage } from '../../AutomationPages/productPage';//Importing the product page from Page object model
import { CartPage } from '../../AutomationPages/AddCartPage';//Importing the Add to cart page from Page object model
import { checkout } from '../../AutomationPages/RegisterCheckout';//Importing the Registeruser page from Page object model
//import dotenv from {dotenv};

//Test suite for login before checkout
test.describe('Login Before Checkout',()=>{
    let browser,context,page;
    let LoginCorrect;
    let productPage;
    let AddCartPage;
    let RegisterCheckout;
    let RegisterUser;
//Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//launch browser
        context = await browser.newContext();//create a new browser context
        page = await context.newPage();//Create a new page inside this context
        //Initialize the page object model(POM)
        LoginCorrect = new loginPage(page);
        productPage = new ProductPage(page);
        AddCartPage = new CartPage(page);
        RegisterCheckout = new checkout(page);
        RegisterUser = new userRegister(page);

        await page.goto('/');//Navigate to home page
        await page.locator('a[href="/login"]').click();//click login home
    });

    //Actual test for login before checkout
    test('Place Order: Login before Checkout',async()=>{
        //Read valid login credentials from environment variables
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);
        await LoginCorrect.userLogin(email,password);//Perform login using reusbale POM function
        //Read and verify "Logged in as <username>"text
        const loginTitle = await page.locator('a:has(i.fa-user)').textContent();
        console.log(loginTitle);
        expect(loginTitle).toBe(' Logged in as AutomationTest');

        await productPage.clickProduct();//Click product button
        await productPage.productHeader();//Product header
        await AddCartPage.HoverfirstProduct();//hover 1st product
        await AddCartPage.clickFirstProduct();//click 1st product
        await AddCartPage.clickShoppingBtn();//click shopping btn
        await AddCartPage.HoverSecondProduct();//hover 2nd product
        await AddCartPage.clickSecondProduct();//click 2nd product
        await AddCartPage.ViewCartProduct();//view cart product
        await AddCartPage.ViewCartPage();//visibility of cart page
        await RegisterCheckout.ClickCartBtn();//click cart button
        await RegisterCheckout.ProceedToPay();//click proceed to pay button
        await RegisterCheckout.ViewAddress();//Verify address details
        await RegisterCheckout.ViewReview();//verify review text
        await RegisterCheckout.Fillmessage('Your message here');//fill message
        await RegisterCheckout.ClickPlaceOrder();//click place order button
        await RegisterCheckout.fillNameCard('Swastikaa');//fill card name
        await RegisterCheckout.fillCardNo('90909090');//fill card number
        await RegisterCheckout.fillCVC('3555');//fill CVC
        await RegisterCheckout.fillmonth('5');//fill month
        await RegisterCheckout.fillYear('2029');//fill year
        await RegisterCheckout.clickConfirmOrder();//click confirm order
        await expect(page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible();//success message
        await RegisterUser.ClickDeleteBtn();//click delete button
        await RegisterUser.ViewAccountDelete();//verify account deletion
    
        await RegisterCheckout.clickContinue();//click continue button



    })
});
