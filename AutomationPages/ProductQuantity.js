const { expect } = require("@playwright/test");

//Page object model class for product quantity
class productQuantity{
    constructor(page){
        this.page = page;
        //locator for button,input fields
        this.viewProduct = page.locator('a[href="/product_details/1"]');
        this.quantity = page.locator('input[name="quantity"]');
        this.cartBtn = page.locator('button.cart');
        this.viewBtn = page.locator('(//a[@href="/view_cart"])[2]');
        this.numQuantity = page.locator('td.cart_quantity');
    }
    //Visibility and click function of View product button
    async clickViewProduct(){
        await expect(this.viewProduct).toBeVisible();
        await this.viewProduct.click();
    }
//Fill Quantity
    async fillQuantity(value){
        await this.quantity.fill(value.toString());
    }
//Click Cart button
    async ClickCartBtn(){
        await this.cartBtn.click();
    }
//Click View cart button
    async ClickViewBtn(){
        await this.viewBtn.click();
    }
//Verify visibility of added quantity
    async viewNumQuantity(){
        await expect(this.numQuantity).toBeVisible();
        return this.numQuantity;
    }
}
module.exports = {productQuantity}