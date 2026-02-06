const { expect } = require("@playwright/test");

//Page object model class for subscription in cart page section
class SubscriptionCart{
    constructor(page){
        this.page = page;
        this.cartBtn = page.locator('a[href="/view_cart"]').first();//locator to click cart button
    }
    //Checks the visibility and click function of cart button
    async ClickCartBtn(){
        await expect (this.cartBtn).toBeVisible();
        await this.cartBtn.click();
    }
}
module.exports = {SubscriptionCart}
