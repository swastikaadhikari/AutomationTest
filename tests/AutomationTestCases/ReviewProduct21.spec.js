import {test,expect,chromium} from '@playwright/test';
//Page object imports
import { productReview } from '../../AutomationPages/ReviewProduct';
import { ProductPage } from '../../AutomationPages/productPage';

//Test suite for product review
test.describe('Product Review',()=>{
     // Variables for browser/session/page
    let browser,context,page;
    // Variables for Page Object Models
    let productPage;
    let ReviewProduct;

    // Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//Launch a new browser instance
        context = await browser.newContext(); //Create a fresh browser context
        page = await context.newPage(); //Open a new page in this session
         // Initialize POM classes
        productPage = new ProductPage(page);
        ReviewProduct = new productReview(page);

        await page.goto('/');  //Navigate to the base URL
    
    });

    // Main test flow
    test(' Add review on product',async()=>{
        await productPage.clickProduct();//click product button
        await productPage.productHeader();//Product header
        await productPage.clickFirstProduct();//click first product
        await ReviewProduct.ViewReviewHeader();//View review text
        await ReviewProduct.Fillname('Test');//Fill name
        await ReviewProduct.Fillemail('Test@gmail.com');//fill email
        await ReviewProduct.Fillreview('Nice Product');//fill review
        await ReviewProduct.ClickReviewBtn();//click review button
        await expect(page.getByText('Thank you for your review.')).toBeVisible()//review message
        // const messageLocator = page.locator('div.status');
        // await expect(messageLocator).toHaveText('Thank you for your review.');
    })

});