import {test,expect,chromium} from '@playwright/test';
import { checkout } from '../../AutomationPages/RegisterCheckout';//Importing the Registercheckout page from Page object model
import { ProductPage } from '../../AutomationPages/productPage';//Importing the product page from Page object model
import { CartPage } from '../../AutomationPages/AddCartPage';//Importing the Add to cart page from Page object model
import { userRegister } from '../../AutomationPages/RegisterUser';//Importing the regsiter user page from Page object model

//Test suite for Register while checkout action
test.describe('Register while checkout action',()=>{
    let browser,context,page;
    let RegisterCheckout;
    let productPage;
    let AddCartPage;
    let RegisterUser;
//Run before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//launch browser
        context = await browser.newContext();//create a new browser context
        page = await context.newPage();//Create a new page inside this context

        RegisterCheckout = new checkout(page);//Initialize the page object model(POM)
        productPage = new ProductPage(page);
        AddCartPage = new CartPage(page);
        RegisterUser = new userRegister(page);

        await page.goto('/');//Navigate to homepage

    });

    //Actual test for registration while checkout
    test('Place Order: Register while Checkout',async()=>{
        await productPage.clickProduct();//click product button
        await productPage.productHeader();//Product Header
        await AddCartPage.HoverfirstProduct();//Hover first product
        await AddCartPage.clickFirstProduct();//Click first product
        await AddCartPage.clickShoppingBtn();//click shopping btn
        await AddCartPage.HoverSecondProduct();//Hover second product
        await AddCartPage.clickSecondProduct();//click second product
        await AddCartPage.ViewCartProduct();//click view cart btn
        await AddCartPage.ViewCartPage();//visibility of cart page
        await RegisterCheckout.ProceedToPay();//Proceed to pay button click
        await RegisterCheckout.ClickRegisterBtn();//click register btn
        await RegisterUser.ViewSignupText();//sign up text 
        //Fill the details to register the account
        await RegisterUser.Fillname('Test');
        await RegisterUser.Fillemail('Laptop@gmail.com');
        await RegisterUser.clickBtn();
        await RegisterUser.AccountInfo();
        await RegisterUser.RadioGender();
        await RegisterUser.fillPassword('123456');
        await page.selectOption('select#days','3');
        await page.selectOption('select#months','5');
        await page.selectOption('select#years','2001'); 
        await RegisterUser.checkNewletter();
        await RegisterUser.checkOption();
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
        await RegisterUser.clickSubmit();
        await RegisterUser.AccountCreation();
        await RegisterUser.ClickContinue();

        const loginTitle = await page.locator('a:has(i.fa-user)').textContent();
        console.log(loginTitle);
        expect(loginTitle).toBe(' Logged in as Test');

        await RegisterCheckout.ClickCartBtn();//cart button click
        await RegisterCheckout.ProceedToPay();//proceed to pay button
        await RegisterCheckout.ViewAddress();//Visibility of address text
        await RegisterCheckout.ViewReview();//Visibility of review text
        await RegisterCheckout.Fillmessage('Your message here');//Fill message
        await RegisterCheckout.ClickPlaceOrder();//Click place order button
        await RegisterCheckout.fillNameCard('Swastika');//Fill name
        await RegisterCheckout.fillCardNo('9090909');//Fill card number
        await RegisterCheckout.fillCVC('355');//Fill CVC
        await RegisterCheckout.fillmonth('5');//Fill month
        await RegisterCheckout.fillYear('2029');//Fill year
        await RegisterCheckout.clickConfirmOrder();//click confirm order button
        await expect(page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible();//text visibility
        //await RegisterCheckout.deleteAccount();

        await RegisterUser.ClickDeleteBtn();//delete btn click
        await RegisterUser.ViewAccountDelete();
        await RegisterCheckout.clickContinue();//click continue
        
    })

});