import { test, expect,chromium } from '@playwright/test';
import { ProductPage } from '../../pages/productPage';
import { LoginPage } from '../../pages/loginPage';
import { log } from 'node:console';

test.describe('Product Test',()=>{

    let browser,context,page;
    let productPage;
    let loginPage;

    test.beforeEach('',async() =>{
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await page.goto('https://automationexercise.com/');

        await page.locator('a[href="/login"]').click();
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);

        loginPage.userLogin(email,password);
        //loginPage.userLogin(process.env.USERNAME,process.env.PASSWORD);
        // loginPage.enterEmail('swastikaa719@gmail.com');
        // loginPage.enterPassword('Hansel@32156');
        //loginPage.clickLogin();
    });

    test('Verify All Products and product detail page',async()=>{
        //await expect(page.locator('html[lang="en"]')).toBeVisible();
        await productPage.clickProduct();
        let allProduct = await productPage.productHeader();
        console.log(allProduct);
        //await expect(allProduct).toEqual("All Products");
        //await page.locator('div.features_items').isVisible();
        await productPage.clickFirstProduct();
        await expect(page.locator('html[lang="en"]')).toBeVisible();
        await expect(page.locator('[class="view-product"]')).toBeVisible();
        await expect (page.locator('[class="product-information"]')).toBeVisible();
        // await expect(page.locator('[class="product-details"]')).toBeVisible();
        // await expect(page.getByRole('heading',{name:'Blue Top'})).toBeVisible();
        // await expect(page.locator('p:has-text("Category: Women")')).toBeVisible();
        // await expect(page.locator('span:has-text("Rs.500")')).toBeVisible();
        // await expect(page.locator('p:has-text("Availability: In Stock")')).toBeVisible();
        // await expect(page.locator('p:has-text("Condition: New")')).toBeVisible();
    });

    test('Search Product',async()=>{
        await productPage.clickProduct();
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();
        await productPage.getProduct('women');
        await productPage.clickSearchBtn();

        const productsearch = await page.locator('[class="title text-center"]').textContent();
        console.log(productsearch);
        expect(productsearch).toEqual('Searched Products');

        await page.locator('[class="features_items"]').isVisible();
        
    });

    test('Add Products in Cart',async()=>{
        await productPage.clickProduct();//product button click
        await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();//product header visible
        await page.locator('(//div[@class="single-products"])[1]').hover();//First product hover
        await page.locator('(//a[@data-product-id="1"])[2]').click();//First product add to cart click
        expect (page.locator('//button[text()="Continue Shopping"]')).toBeVisible();//text visible
        await page.locator('//button[text()="Continue Shopping"]').click();//click continue shopping button

        await page.locator('(//div[@class="single-products"])[2]').hover();//Second product hover
        await page.locator('(//a[@data-product-id="2"])[2]').click();//second product add to cart click
        await productPage.ViewCartProduct();//click view cart

        await expect(page.locator('//a[text()="Blue Top"]')).toBeVisible();
        await expect(page.locator('//a[text()="Men Tshirt"]')).toBeVisible();
        expect(page.locator('//a[text()="Proceed To Checkout"]')).toBeVisible();//text visible
        await page.locator('//a[text()="Proceed To Checkout"]').click();
        expect(page.locator('[href="/payment"]')).toBeVisible();

        //await productPage.addtoCartBtn();

       // await productPage.addtoCartBtn();
        // await productPage.shoppingBtn();
        // await page.locator('[class="features_items"]').isVisible();
        //await productPage.addSecondProduct();
       
        //await expect(page.locator('#cart_info')).toBeVisible();
        //await productPage.viewcartPage.toBeVisible();

    });

    test('Verify Product quantity in Cart',async()=>{
        await expect(page.locator('html[lang="en"]')).toBeVisible();
        //await expect(page.getByRole('heading',{name:'All Products' })).toBeVisible();
        await productPage.clickPrdBtn();
        await page.locator('div.product-details').isVisible();
        await productPage.fillProductQuantity('4');
        await productPage.addToCartClick();
        await productPage.ViewCartProduct();
        await expect(page.locator('#cart_info')).toBeVisible();
    });

   


});