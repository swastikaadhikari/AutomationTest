const { expect } = require("@playwright/test");
//Page object model class for product removal from cart
class ProductRemove{
    constructor(page){
        this.page = page;
        //locator for all buttons
        this.firstProduct = page.locator('(//a[@data-product-id="3"])').filter({ hasText: 'Add to cart' }).first();
        this.secondProduct = page.locator('(//a[@data-product-id="4"])').filter({ hasText: 'Add to cart' }).first();
        this.shoppingBtn = page.locator('//button[text()="Continue Shopping"]');
        this.removeProduct3 = page.locator('a[data-product-id="3"]'); 
        this.removeProduct4 = page.locator('a[data-product-id="4"]');
        this.rowProduct3 = page.locator('#product-3');
        this.rowProduct4 = page.locator('#product-4');
        this.remainingProduct = page.locator('#product-4');
        
    }
    //Visibility and click function of 1st product addition
    async Addproduct(){
        await expect(this.firstProduct).toBeVisible();
        await this.firstProduct.click();
    }
    //Click shopping button
     async ClickShoppingBtn(){
        await expect(this.shoppingBtn).toBeVisible();
        await this.shoppingBtn.click();
    }
    //Visibility and click function of 2nd product addition
    async AddSecondProduct(){
        await expect(this.secondProduct).toBeVisible();
        await this.secondProduct.click();
    }
//Click remove product button
    async ClickRemoveBtn(){
        await this.removeProduct3.click()
    }
//verification of product removal
     async verifyRemoved() {
        await expect(this.rowProduct3).toHaveCount(0);
        await expect(this.rowProduct4).toHaveCount(1);
    }

   
}


module.exports = {ProductRemove};