const { expect } = require("@playwright/test");

//Page object model class for Product page
class ProductPage{
    constructor(page){
        this.page = page;
        //Locator for button and text on product page
        this.productBtn = page.locator('a[href="/products"]');//Product Icon
        this.allProduct = page.getByText('All Products');//Product Text
        this.viewProduct = page.locator('[ href="/product_details/1"]');//ViewProduct icon
        this.productDetail = page.locator('div.product-details');
        this.productName = page.getByRole('heading',{name:'Blue Top'});
        this.productCategory = page.locator('p:has-text("Category: Women")');
        this.productPrice = page.getByText('Rs. 500');
        this.productAvailability = page.locator('p:has-text("Availability: In Stock")');
        this.productCondition = page.locator('p:has-text("Condition: New")');
        this.productBrand = page.locator('p:has-text("Brand")');
    }
    //Click Product button
    async clickProduct(){
        await this.productBtn.click();
    }
    //Verify visibility of product 
     async productHeader(){
        await expect(this.allProduct).toHaveText('All Products');
    }
    //click first prodduct
    async clickFirstProduct(){
        await this.viewProduct.click();
    }
    //Product details visibility
    async ViewProductDetail(){
        await expect(this.productDetail).toBeVisible();
    }

    async ViewProductName(){
        await expect(this.productName).toBeVisible();
    }

    async ViewCategory(){
        await expect(this.productCategory).toBeVisible();
    }

    async ViewPrice(){
        await expect(this.productPrice).toHaveText('Rs. 500');
    }
    
    async ViewAvailability(){
        await expect(this.productAvailability).toBeVisible();

    }

      async ViewProductCondition(){
        await expect(this.productCondition).toBeVisible();

    }

      async ViewBrand(){
        await expect(this.productBrand).toBeVisible();

    }

}
module.exports={ProductPage};