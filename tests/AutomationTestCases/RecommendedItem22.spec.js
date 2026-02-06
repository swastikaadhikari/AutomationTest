import {test,expect,chromium} from '@playwright/test';
//Page object imports
import { itemRecommend } from '../../AutomationPages/RecommendedItem';
import { CartPage } from '../../AutomationPages/AddCartPage';

//Test suite for recommended items
test.describe('Recommend Items',()=>{
// Variables for browser/session/page
    let browser,context,page;
    // Variables for Page Object Models
    let RecommendedItem;
    let AddCartPage;
//Runs before each test 
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//Launch a new browser instance
        context = await browser.newContext();//Create a fresh browser context
        page = await context.newPage();//Open a new page in this session
         // Initialize POM classes
        RecommendedItem = new itemRecommend(page);
        AddCartPage = new CartPage(page);
        await page.goto('/');//Navigate to the base URL
    
    });
//Main test
    test(' Add to cart from Recommended items',async()=>{
        await RecommendedItem.footerScroll();//scroll to footer
        await RecommendedItem.recommendHeader();//verifies recommended items text is visible
        await RecommendedItem.ClickAddCart();//click cart button
        await AddCartPage.ViewCartProduct();//view cart product
        await AddCartPage.ViewCartPage();//view cart page
    });

});
