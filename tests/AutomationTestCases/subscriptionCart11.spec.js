import {test,expect,chromium} from '@playwright/test';
import { SubscriptionCart } from '../../AutomationPages/cartSubscription';//Importing the cart subscription page from Page object model
import { pageSubscription } from '../../AutomationPages/subscriptionPage';//Importing the subscription page from Page object model

//Test suite for subscription in cart page
test.describe('Subscription in Cart Page',()=>{
    let browser,context,page;
    let cartSubscription
    let subscriptionPage
    
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context

        cartSubscription = new SubscriptionCart(page);//Initialize the page object model(POM) of subscription cart page
        subscriptionPage = new pageSubscription(page);//Initialize the page object model(POM) of subscription page

        await page.goto('/');//Navigate to homepage

    });
// Actual test for subscription in cart page
    test('Verify Subscription in Cart page',async()=>{
        await cartSubscription.ClickCartBtn();//Click cart button
        await subscriptionPage.footerScroll();//Scroll to footer
        await subscriptionPage.ViewTextSubscription();//Verification of subscription text
        await subscriptionPage.fillSubscriptionEmail('swastikaa719@gmail.com');//Fill email
        await subscriptionPage.ClickSubscriptionBtn();//Click subscription button
        await subscriptionPage.ViewSubscriptionMessage();//Verification of success message
    })

});