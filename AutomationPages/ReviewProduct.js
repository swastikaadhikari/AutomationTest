const { expect } = require("@playwright/test");
//Page object model class for product review
class productReview{
    constructor(page){
        this.page = page;
        //locators for header,input details,buttons
        this.reviewHeader = page.locator('a[href="#reviews"]');
        this.name = page.locator('#name');
        this.email = page.locator('#email');
        this.review = page.locator('#review');
        this.reviewBtn = page.locator('#button-review');
    }
    //View review header
    async ViewReviewHeader(){
        await expect(this.reviewHeader).toBeVisible();
    }
    //fillname
    async Fillname(name){
        await this.name.fill(name);
    }
    //Fill email
    async Fillemail(email){
        await this.email.fill(email);
    }
    //Fill review
    async Fillreview(review){
        await this.review.fill(review);
    }
    //Click review button
    async ClickReviewBtn(){
        await this.reviewBtn.click();
    }

}
module.exports = {productReview};