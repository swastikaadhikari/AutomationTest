import {test,expect,chromium} from '@playwright/test';
//Page object imports
import { checkout } from '../../AutomationPages/RegisterCheckout';
import { ProductPage } from '../../AutomationPages/productPage';
import { CartPage } from '../../AutomationPages/AddCartPage';
import { userRegister } from '../../AutomationPages/RegisterUser';
//Test suite for download invoice
test.describe('Download Invoice',()=>{
    let browser,context,page;// Variables for browser/session/page
       // Variables for Page Object Models
    let RegisterCheckout;
    let productPage;
    let AddCartPage;
    let RegisterUser;
//Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//Launch a new browser instance
        context = await browser.newContext();//Create a fresh browser context
        page = await context.newPage();//Open a new page in this session
         // Initialize POM classes
        RegisterCheckout = new checkout(page);
        productPage = new ProductPage(page);
        AddCartPage = new CartPage(page);
        RegisterUser = new userRegister(page);

        await page.goto('/');//Navigate to the base URL

    });
//Main test
    test('Place Order: Register while Checkout',async()=>{
        //Click product button and product header
        await productPage.clickProduct();
        await productPage.productHeader();
        //Add product,clikc shopping btn and cart page
        await AddCartPage.HoverfirstProduct();
        await AddCartPage.clickFirstProduct();
        await AddCartPage.clickShoppingBtn();
        await AddCartPage.HoverSecondProduct();
        await AddCartPage.clickSecondProduct();
        await AddCartPage.ViewCartProduct();
        await AddCartPage.ViewCartPage();
        await RegisterCheckout.ProceedToPay();//click proceed to pay
        await RegisterCheckout.ClickRegisterBtn();//click register button
        await RegisterUser.ViewSignupText();//view signup/login text
        //Fill information required to register the user
        await RegisterUser.Fillname('Test');
        await RegisterUser.Fillemail('Teaxis@gmail.com');
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

        await RegisterCheckout.ClickCartBtn();
        await RegisterCheckout.ProceedToPay();
        await RegisterCheckout.ViewAddress();
        await RegisterCheckout.ViewReview();
        await RegisterCheckout.Fillmessage('Your message here');
        await RegisterCheckout.ClickPlaceOrder();
        //Fill card details
        await RegisterCheckout.fillNameCard('Swastika');
        await RegisterCheckout.fillCardNo('9090909');
        await RegisterCheckout.fillCVC('355');
        await RegisterCheckout.fillmonth('5');
        await RegisterCheckout.fillYear('2029');
        await RegisterCheckout.clickConfirmOrder();
        await expect(page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible();
        await expect(page.locator('a[href^="/download_invoice/"]')).toBeVisible();
        await page.locator('a[href^="/download_invoice/"]').click();//invoice download button
        await RegisterCheckout.clickContinue();
        await RegisterUser.ClickDeleteBtn();
        await RegisterUser.ViewAccountDelete();
        await RegisterCheckout.clickContinue();


    });
});