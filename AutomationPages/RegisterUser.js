const { expect } = require("@playwright/test");

//Page object model class for registration actions
class userRegister{
    constructor(page){
        this.page = page;

        //Locators for all input fields and buttons on the registration page
        this.SignupText = page.getByText('New User Signup!');
        this.name = page.locator('input[data-qa="signup-name"]');
        this.email = page.locator('input[data-qa="signup-email"]');
        this.button = page.locator('button[data-qa="signup-button"]');
        this.info = page.locator('h2.title').getByText('Enter Account Information');
        this.gender = page.locator('#id_gender2');
        this.password = page.locator('#password');
        //this.day = page.locator('#days');
        this.newletter = page.locator('#newsletter')
        this.offers = page.locator('#optin');
        this.firstName = page.locator('#first_name');
        this.lastName =page.locator('#last_name');
        this.company = page.locator('#company');
        this.address = page.locator('#address1');
        this.address2 = page.locator('#address2');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode')
        this.number = page.locator('#mobile_number')
        this.submit = page.locator('button[data-qa="create-account"]');
        this.account = page.locator('h2.title').getByText('Account Created!');
        this.continue = page.locator('a[data-qa="continue-button"]');
        this.deleteBtn = page.locator('a[href="/delete_account"]');
        this.AccountDelete = page.locator('h2.title').getByText('Account Deleted!');
        this.continue = page.locator('a[data-qa=continue-button]');
    }

    //Validates the signup text is visible
    async ViewSignupText(){
        await expect(this.SignupText).toBeVisible();
    }
    //Fill name field
    async Fillname(name){
        await this.name.fill(name);
    }
    //Fill email field
    async Fillemail(email){
        await this.email.fill(email)
    }
    //Click signup button
    async clickBtn(){
        await this.button.click();
    }
    //Checks "Enter Account Information" is visible
    async AccountInfo(){
        await expect(this.info).toBeVisible();
    }
    //Click gender radio button
    async RadioGender(){
        await this.gender.click();
    }
    //Fill password field
    async fillPassword(password){
        await this.password.fill(password);
    }
    //Tick Checkbox for newsletter
    async checkNewletter(){
        await this.newletter.click();
    }
    //Tick Checkbox for special offers
    async checkOption(){
        await this.offers.click();
    }
    //Fill firstname
    async fillFirstname(firstname){
        await this.firstName.fill(firstname);
    }
    //Fill lastname
    async fillLastname(lastname){
        await this.lastName.fill(lastname);
    }
    //Fill company name
    async fillCompany(company){
        await this.company.fill(company);
    }
    //Fill Address line1
    async FillAddress(address){
        await this.address.fill(address);
    }
    //Fill Address line2
    async FillAddress2(Address){
        await this.address2.fill(Address);
    }
    //select country
    async selectCountry(country){
        await this.country.selectOption(country);
    }
    //Fill state
    async fillState(state){
        await this.state.fill(state);
    }
    //Fill city
    async fillCity(city){
        await this.city.fill(city);
    }
    //Fill zip code
    async fillZipcode(zipcode){
        await this.zipcode.fill(zipcode);
    }
    //Fill phone number
    async fillNumber(number){
        await this.number.fill(number);
    }
    //Click create account button
    async clickSubmit(){
        await this.submit.click();
    }
    //Verify "Account created" message is visible
    async AccountCreation(){
        await expect(this.account).toBeVisible();
    }
    //Click continue button
    async ClickContinue(){
        await this.continue.click();
    }
    //Click delete account
    async ClickDeleteBtn(){
        await this.deleteBtn.click();
    }
    //Validate account deletion
    async ViewAccountDelete(){
        await expect(this.AccountDelete).toBeVisible();
    }

    async clickContinue(){
        await this.continue.click();
    }
}
module.exports = {userRegister};