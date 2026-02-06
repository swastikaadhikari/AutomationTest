import {test,expect,chromium} from '@playwright/test';
// Importing Page Object Models
import { Scroll } from '../../AutomationPages/ScrollUp';
import { pageSubscription } from '../../AutomationPages/subscriptionPage';

test.describe('Scroll Up',()=>{

    let browser,context,page;
    let ScrollUp;
    let subscriptionPage;

    test.beforeEach('',async() =>{
        browser = await chromium.launch(); //Launch browser
        context = await browser.newContext();//Create context and page
        page = await context.newPage();
        ScrollUp = new Scroll(page);//Initialize page object classes
        subscriptionPage = new pageSubscription(page);
        await page.goto('/');//Navigate to home page
    
    });

    test(' Verify Scroll Up using Arrow button and Scroll Down functionality',async()=>{
        await ScrollUp.scrollFeature();//Scroll down and verify scroll feature appears
        await subscriptionPage.ViewTextSubscription();//Verify subscription text becomes visible after scrolling
        await page.evaluate(() => window.scrollTo(0, 0));// Scroll back to top manually using JS
        await ScrollUp.ViewToptext();//Validate that top text/header is visible after scrolling up

        
    })

});