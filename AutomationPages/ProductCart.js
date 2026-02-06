const { expect } = require("@playwright/test");
//Page object model class for search products and verify cart after login
class verifyCart{
    constructor(page){
        this.page = page;
        this.productBtn = page.locator('a[href="/products"]'); // "Products" button in the navigation menu
        this.firstPrd = page.locator('(//a[@data-product-id="7"])[2]');// Add-to-cart button for first product (product ID 7)
        this.SecondPrd = page.locator('(//a[@data-product-id="42"])[2]') // Add-to-cart button for second product (product ID 42)
        this.loginBtn = page.locator('a[href="/login"]', { hasText: 'Signup / Login' });   // Signup/Login button in navbar
        this.viewCart = page.locator('(//a[@href="/view_cart"])[1]');  // "View Cart" button (first instance in header)
    }
    // Clicks Products button from header
    async ClickProductBtn(){
        await expect(this.productBtn).toBeVisible();
        await this.productBtn.click();
    }
    // Adds the first product to the cart
    async ClickFirstPrd(){
        await this.firstPrd.click();
    }
    // Adds the second product to the cart
    async ClickSecondPrd(){
        await this.SecondPrd.click();
    }
     // Clicks the Login button
    async ClickLoginBtn(){
        await expect(this.loginBtn).toBeVisible();
        await this.loginBtn.click();
    }
     // Clicks View Cart button
    async clickCartBtn(){
        await expect(this.viewCart).toBeVisible();
        await this.viewCart.click();
    }
}
module.exports = {verifyCart};