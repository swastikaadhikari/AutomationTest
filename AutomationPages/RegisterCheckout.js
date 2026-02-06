const { expect } = require("@playwright/test");
//Checkout page object model
class checkout{
    constructor(page){
        this.page = page;
        //locators
        this.pay = page.locator('//a[text()="Proceed To Checkout"]');//"Proceed to Checkout" button
        this.registerBtn = page.locator('a[href="/login"]').nth(1);//Register/login button on checkout
        this.cartBtn = page.locator('a[href="/view_cart"]').first();//Cart button
        this.address = page.getByRole('heading',{name:'Address Details'});//Address details section heading
        this.review = page.getByRole('heading',{name:'Review Your Order'});//Review order section heading
        this.message = page.locator('textarea[name="message"]');//Message textarea
        this.placeOrder = page.locator('a[href="/payment"]');//Place order button
        this.nameCard = page.locator('input[data-qa="name-on-card"]');//cardholder name input
        this.cardNumber = page.locator('input[data-qa="card-number"]');//card number input
        this.CVC = page.locator('input[data-qa="cvc"]');//CVC input field
        this.month = page.locator('input[data-qa="expiry-month"]');//card expiry month input
        this.year = page.locator('input[data-qa="expiry-year"]');//card expiry year input
        this.confirmOrder = page.locator('#submit');//Confirm order button
        this.delete = page.locator('a[href="/delete_account"]');// Delete account button
        this.continue = page.locator('a[data-qa=continue-button]');//Continue button after order
    }
    // Clicks on "Proceed To Checkout"
    async ProceedToPay(){
        await expect(this.pay).toBeVisible();
        await this.pay.click();
    }
      // Clicks the register/login button
    async ClickRegisterBtn(){
        await this.registerBtn.click();
    }
    
    // Opens the cart
    async ClickCartBtn(){
        await this.cartBtn.click();
    }
     // Validates the address section is visible
    async ViewAddress(){
        await expect(this.address).toBeVisible();
    }
     // Validates the review order section is visible
    async ViewReview(){
        await expect(this.review).toBeVisible();
    }
     // Enters message in order message box
    async Fillmessage(message){
        await this.message.fill(message);
    }
    //Clicks place order
    async ClickPlaceOrder(){
        await this.placeOrder.click();
    }
    // Fills the cardholder name
    async fillNameCard(name){
        await this.nameCard.fill(name);
    }
      // Fills the card number
    async fillCardNo(number){
        await this.cardNumber.fill(number);
    }
    // Fills the CVC code
    async fillCVC(cvc){
        await this.CVC.fill(cvc);
    }
     // Fills expiry month
    async fillmonth(month){
        await this.month.fill(month);
    }
     // Fills expiry year
    async fillYear(year){
        await this.year.fill(year);
    }
     // Clicks "Confirm Order"
    async clickConfirmOrder(){
        await this.confirmOrder.click();
    }
     // Deletes account
    async deleteAccount(){
        await this.delete.click();

    }
    // Clicks continue button after deleting or completing order
    async clickContinue(){
        await this.continue.click();
    }
}
module.exports = {checkout}