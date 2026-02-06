import {test,expect,chromium} from '@playwright/test';
//Page object imports
import { verifyCart } from '../../AutomationPages/ProductCart';
import {ProductSearch} from '../../AutomationPages/searchProduct';
import { ProductPage } from '../../AutomationPages/productPage';
import { CartPage } from '../../AutomationPages/AddCartPage';
import { loginPage } from '../../AutomationPages/LoginCorrect';

test.describe(' Product Cart',()=>{
    // Variables for browser/session/page
    let browser,context,page;
    // Variables for Page Object Models
    let ProductCart;
    let searchProduct;
    let productPage;
    let AddCartPage;
    let LoginCorrect;
    // Runs before each test
     test.beforeEach('',async() =>{
        browser = await chromium.launch(); // Launch a new browser instance
        context = await browser.newContext();//Create a fresh browser context
        page = await context.newPage(); // Open a new page in this session
        // Initialize POM classes
        ProductCart = new verifyCart(page);
        searchProduct = new ProductSearch(page);
        productPage = new ProductPage(page);
        AddCartPage = new CartPage(page);
        LoginCorrect = new loginPage(page);
  
        await page.goto('/');  // Navigate to the base URL

     });
     //Main test flow
    test(' Search Products and Verify Cart After Login',async()=>{
        await ProductCart.ClickProductBtn();//Go to the products page
        await productPage.productHeader();// Verify the product page header
        await searchProduct.getProduct('women');//Search for products 
        await searchProduct.clickSearchBtn();//click search button
        await searchProduct.SearchedProduct();//Verify search results are visible
        await AddCartPage.HoverfirstProduct();//Hover over first product & add to cart
        await ProductCart.ClickFirstPrd();
        await AddCartPage.clickShoppingBtn();//Click shopping button
        await AddCartPage.HoverSecondProduct();//Hover over second product & add to cart
        await ProductCart.ClickSecondPrd();
        await AddCartPage.ViewCartProduct();//Click "View Cart" when popup shows
        await AddCartPage.ViewCartPage();//Verify that cart page shows correct items
        await ProductCart.ClickLoginBtn();//Redirect to login page
        //Read login credentials from environment variables
        let email = process.env.EMAIL;
        let password = process.env.PASSWORD;
        console.log(email);
        console.log(password);
        await LoginCorrect.userLogin(email,password);//Login with correct credentials
        await ProductCart.clickCartBtn();// Go back to cart after login
        await AddCartPage.ViewCartPage();//Verify cart items still exist after login

    })

    });