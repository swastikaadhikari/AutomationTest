const { expect } = require("@playwright/test");

//Page object model class for registration with existing email 
class RegisterWithSame{
    constructor(page){
        this.page = page;
        //locators for all the input and button fields
        this.Newuser = page.locator('//h2[contains(text(),"New User Signup!")]');
        this.name = page.locator('input[data-qa="signup-name"]');
        this.email = page.locator('input[data-qa ="signup-email"]');
        this.signupBtn = page.locator('button[data-qa ="signup-button"]');

    }

    //Validates New user signup text is visible
    async ViewNewUser(){
        await expect(this.Newuser).toBeVisible();
    }
    //Fill name field
    async FillName(name){
        await this.name.fill(name);
    }
    //Fill email field
    async FillEmail(email){
        await this.email.fill(email);
    }
    //Click signup button
    async ClickSignupBtn(){
        await this.signupBtn.click();
    }
}
module.exports = {RegisterWithSame};