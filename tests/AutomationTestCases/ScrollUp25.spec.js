import {test,expect,chromium} from '@playwright/test';
//Importing page object models
import { Scroll } from '../../AutomationPages/ScrollUp';
import { pageSubscription } from '../../AutomationPages/subscriptionPage';

//Test suite for scroll up
test.describe('Scroll Up',()=>{

    let browser,context,page;
    let ScrollUp;
    let subscriptionPage;

    test.beforeEach('',async() =>{
        browser = await chromium.launch();//Launch browser
        context = await browser.newContext();//Create context
        page = await context.newPage();
        ScrollUp = new Scroll(page);//Initialize page object classes
        subscriptionPage = new pageSubscription(page);
        await page.goto('/');//Navigate to base url
    
    });
// Test to verify the scroll up and scroll down functionalities
    test(' Verify Scroll Up using Arrow button and Scroll Down functionality',async()=>{
        await ScrollUp.scrollFeature(); // Scroll down the page using the scrollFeature method
        await subscriptionPage.ViewTextSubscription();// Verify that the subscription section is visible after scrolling down
        await ScrollUp.ScrollUpArrow();    // Click on the scroll up arrow button to move back to the top of the page
        await ScrollUp.ViewToptext();  // Verify that the top of the page is visible 
    })

});