const { expect } = require("@playwright/test");
//Page object model class for scroll functionality
class Scroll{
    constructor(page){
        this.page = page;
        //locator for text
        this.scrollUp = page.locator('a[href="#top"]');
        this.topText = page.getByText("Full-Fledged practice website for Automation Engineers").first();

    }
    // Scrolls the page to the bottom
    async scrollFeature(){
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    }
    // Clicks on the scroll-up arrow button to move to the top of the page
    async ScrollUpArrow(){
        await this.scrollUp.click();
    }
    // Verifies that the top text is visible after scrolling up
    async ViewToptext(){
        await expect(this.topText).toBeVisible();// Assertion
    }

}
module.exports={Scroll}