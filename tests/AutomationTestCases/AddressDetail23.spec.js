import {test,expect,chromium} from '@playwright/test';
import { checkout } from '../../AutomationPages/RegisterCheckout';
import { userRegister } from '../../AutomationPages/RegisterUser';
import { ProductPage } from '../../AutomationPages/productPage';

test.describe('Registration form',()=>{
    let browser,context,page;
    let RegisterUser;
    let RegisterCheckout;
    let productPage;
    test.beforeEach('',async() =>{
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        RegisterCheckout = new checkout(page);
        RegisterUser = new userRegister(page);
        productPage = new ProductPage(page);
        await page.goto('/');
        await page.locator('a[href="/login"]').click();
    });

    test('Register User',async()=>{
        await RegisterUser.ViewSignupText();
        await RegisterUser.Fillname('Test');
        await RegisterUser.Fillemail('Phone@gmail.com');
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
        await productPage.clickProduct();
        await productPage.productHeader();
        await AddCartPage.HoverfirstProduct();
        await AddCartPage.clickFirstProduct();
        await AddCartPage.clickShoppingBtn();
        await AddCartPage.HoverSecondProduct();
        await AddCartPage.clickSecondProduct();
        await AddCartPage.ViewCartProduct();
        await AddCartPage.ViewCartPage();
        await RegisterCheckout.ProceedToPay();
        await RegisterCheckout.ViewAddress();
        await expect(page.locator('#address_delivery')).toContainText('Hello test');
        await expect(page.locator('#address_delivery')).toContainText('Sydney');
        await expect(page.locator('#address_invoice')).toContainText('Hello test');
        await expect(page.locator('#address_invoice')).toContainText('Sydney');

        


    });
});