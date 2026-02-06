const { expect } = require("@playwright/test");
//Page object model class for Add To Cart section
class CartPage{
    constructor(page){
        this.page = page;
        //Locator for button,text visibility
        this.firstProduct = page.locator('(//div[@class="single-products"])[1]');
        this.clickFirst = page.locator('(//a[@data-product-id="1"])[2]');
        this.shoppingBtn = page.locator('//button[text()="Continue Shopping"]');
        this.secondProduct = page.locator('(//div[@class="single-products"])[2]');
        this.clickSecond = page.locator('(//a[@data-product-id="2"])[2]');
        this.viewCart = page.locator('(//a[@href="/view_cart"])[2]');
        this.firstProductName = page.locator('//a[text()="Blue Top"]');
        this.secondProductName = page.locator('//a[text()="Men Tshirt"]');
        this.cartPage = page.locator('#cart_info');
        this.Price = page.locator('td.cart_price').first();
        this.Quantity = page.locator('td.cart_quantity').first();
        this.Total = page.locator('p.cart_total_price').first();
        this.SecondPrice = page.locator('td.cart_price').nth(1);
        this.SecondQuantity = page.locator('td.cart_quantity').nth(1);
        this.SecondTotal = page.locator('p.cart_total_price').nth(1);

    }
//Hover over the first product on the page
    async HoverfirstProduct(){
        await this.firstProduct.hover();
    }
    //Click the first product
    async clickFirstProduct(){
        await this.clickFirst.click();

    }
    //Click Click continue shopping link
    async clickShoppingBtn(){
        await expect(this.shoppingBtn).toBeVisible();
        await this.shoppingBtn.click();
    }
    //Hover over second product
    async HoverSecondProduct(){
        await this.secondProduct.hover();
    }
    //Click the second product
    async clickSecondProduct(){
        await this.clickSecond.click();
    }
    //Click the "View Cart" link
     async ViewCartProduct(){
        await this.viewCart.click();
    }
    //Verify first product name is visible in the cart
    async ViewFirstProductName(){
        await expect(this.firstProductName).toBeVisible();
    }
    //Verify second product name is visible in the cart
    async ViewSecondProductName(){
        await expect(this.secondProductName).toBeVisible();
    }
    //Verify the cart page is displayed
    async ViewCartPage(){
        await expect(this.cartPage).toBeVisible();
    }
    //Verify the price of the first product is visible
    async ViewPrice(){
        await expect(this.Price).toBeVisible();
    }
    //Verify the quanity of the first product is visible
    async ViewQuantity(){
        await expect(this.Quantity).toBeVisible();
    }
    //Verify the total price of the first product is visible
    async ViewTotal(){
        await expect(this.Total).toBeVisible();
    }
    //Verify the price of the second product is visible
    async ViewSecondPrice(){
        await expect(this.SecondPrice).toBeVisible();
    }
    //Verify the quantity of the second product is visible
     async ViewSecondQuantity(){
        await expect(this.SecondQuantity).toBeVisible();
    }
    //Verify the price of the second product is visible
    async ViewSecondTotal(){
        await expect(this.SecondTotal).toBeVisible();
    }
}
module.exports = {CartPage}