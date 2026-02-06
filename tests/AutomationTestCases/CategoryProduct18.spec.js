
import {test,expect,chromium} from '@playwright/test';
import { ProductCategory } from '../../AutomationPages/CategoryProduct';//Importing the category product page from Page object model

//Test suite for view category products
test.describe('Product Category',()=>{
    let browser,context,page;
    let CategoryProduct;
    //Runs before each test case
     test.beforeEach('',async() =>{
        browser = await chromium.launch(); // Launches a new browser instance
        context = await browser.newContext(); // Creates a new context
        page = await context.newPage(); // Opens a new page in this context
        CategoryProduct = new ProductCategory(page);// Initializes the Page Object for Category Products

         await page.goto('/'); // Navigates to homepage

     })
 // Test case: View different category products (Women/Men)
    test(' View Category Products',async()=>{
        await CategoryProduct.categoryHeader(); // Verify category header is visible
        await CategoryProduct.ViewWomen();//view Women category
        await CategoryProduct.BadgeClick();// Click the Women category badge
        await CategoryProduct.ClickDress(); //Select "Dress" category
        await CategoryProduct.WomenHeader(); //Validate Women > Dress page header appears
        await CategoryProduct.ClickMenBadge();//Switch to Men category section
        await CategoryProduct.ClickTshirt();//Select "Tshirt" under Men
        await CategoryProduct.MenHeader();//Validate Men > Tshirt page header appears
       

    });
})