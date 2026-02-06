import {test,expect,chromium} from '@playwright/test';
import { userRegister } from '../../AutomationPages/RegisterUser';//Importing the Registeruser page from Page object model
import { ProductPage } from '../../AutomationPages/productPage';//Importing the product page from Page object model
import { CartPage } from '../../AutomationPages/AddCartPage';//Importing the Add to cart page from Page object model
import { checkout } from '../../AutomationPages/RegisterCheckout';//Importing the Registercheckout page from Page object model

//Test suite for registration before checkout
test.describe('Registration Before Checkout',()=>{
    let browser,context,page;
    let RegisterUser;
    let productPage;
    let AddCartPage;
    let RegisterCheckout;
//Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//launch browser
        context = await browser.newContext();//create a new browser context
        page = await context.newPage();//Create a new page inside this context

        //Initialize the page object model(POM)
        RegisterUser = new userRegister(page);
        productPage = new ProductPage(page);
        AddCartPage = new CartPage(page);
        RegisterCheckout = new checkout(page);

        await page.goto('/');//Navigate to homepage
        await page.locator('a[href="/login"]').click();//Click login button
    });
//Actual test for register before checkout
    test('Place Order: Register before Checkout',async()=>{
        await RegisterUser.ViewSignupText();//sign up text 
        //Fill the information required to register user
        await RegisterUser.Fillname('Test');
        await RegisterUser.Fillemail('Sunny@gmail.com');
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

        await productPage.clickProduct();//click product button
        await productPage.productHeader();//product header
        await AddCartPage.HoverfirstProduct();//Hover 1st product
        await AddCartPage.clickFirstProduct();//click 1st product
        await AddCartPage.clickShoppingBtn();//click shopping button
        await AddCartPage.HoverSecondProduct();//Hover 2nd product
        await AddCartPage.clickSecondProduct();//click 2nd product
        await AddCartPage.ViewCartProduct();//click view cart btn
        await AddCartPage.ViewCartPage();//visibility of cart page
        await RegisterCheckout.ClickCartBtn();//cart button click
        await RegisterCheckout.ProceedToPay();//Proceed to pay button click
        await RegisterCheckout.ViewAddress();//Visibility of address text
        await RegisterCheckout.ViewReview();//Visibility of review text
        await RegisterCheckout.Fillmessage('Your message here');//Fill message
        await RegisterCheckout.ClickPlaceOrder();//Click place order button
        await RegisterCheckout.fillNameCard('Swastikaa');//Fill name
        await RegisterCheckout.fillCardNo('90909090');//Fill card number
        await RegisterCheckout.fillCVC('3555');//Fill CVC
        await RegisterCheckout.fillmonth('5');//Fill month
        await RegisterCheckout.fillYear('2029');//fill year
        await RegisterCheckout.clickConfirmOrder();//Click confirm order button
        await expect(page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible();//success message visibility
        //await RegisterCheckout.deleteAccount();

        await RegisterUser.ClickDeleteBtn();//Click delete button
        await RegisterUser.ViewAccountDelete();
    
        await RegisterCheckout.clickContinue();




    })

});