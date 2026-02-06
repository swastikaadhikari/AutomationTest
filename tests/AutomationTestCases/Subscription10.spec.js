import {test,expect,chromium} from '@playwright/test';
import { pageSubscription } from '../../AutomationPages/subscriptionPage';//Importing the subscription page from Page object model

//Test suite for subscription page
test.describe('Subscription Page',()=>{
    let browser,context,page;
    let subscriptionPage
    //Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context
        subscriptionPage = new pageSubscription(page);//Initialize the page object model(POM) of subscription page

        await page.goto('/');//Navigate to homepage

    })

// Actual test for subscription in home page
test('Verify Subscription in home page',async()=>{
    await subscriptionPage.footerScroll();//Scroll to footer
    await subscriptionPage.ViewTextSubscription();//Subscription text visible
    await subscriptionPage.fillSubscriptionEmail('swastikaa719@gmail.com');//Fill email
    await subscriptionPage.ClickSubscriptionBtn();//Click subscription button
    await subscriptionPage.ViewSubscriptionMessage();//Verify success message
    });
});