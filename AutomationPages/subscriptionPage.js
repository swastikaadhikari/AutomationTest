const { expect } = require("@playwright/test");
//Page object model class for subscription in home page section
class pageSubscription{
    constructor(page){
        this.page = page;
        //Locators for all text,button and success message
        this.footer = page.locator('#footer');
        this.textSubscription = page.getByRole('heading',{name:'Subscription'});
        this.subscriptionEmail = page.locator('#susbscribe_email');
        this.subscriptionBtn = page.locator('#subscribe');
        this.subscriptionMessage = page.getByText('You have been successfully subscribed!'); 
    }
    //Scroll to the bottom of the page and ensure footer is visible
    async footerScroll(){
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.footer.scrollIntoViewIfNeeded();
    }
    //Verify the "subscription" text is visible
    async ViewTextSubscription(){
        await expect(this.textSubscription).toBeVisible();
    }
    //Fill the subscription email input
    async fillSubscriptionEmail(email){
        await this.subscriptionEmail.fill(email);
    }
    //Click subscribe button
    async ClickSubscriptionBtn(){
        await this.subscriptionBtn.click();
    }
    //Verify success message is displayed
    async ViewSubscriptionMessage(){
        await expect(this.subscriptionMessage).toHaveText('You have been successfully subscribed!');
    }
}
module.exports = {pageSubscription};
