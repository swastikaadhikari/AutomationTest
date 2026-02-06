const { expect } = require("@playwright/test");

//Page object model class for product search action
class ProductSearch{
    constructor(page){
        this.page = page;
        //Locators for all button and text
        this.searchProduct = page.locator('#search_product');
        this.searchBtn = page.locator('#submit_search');
        this.viewSearchedProduct = page.locator('h2.title');
        
    }
    //fill Productname
      async getProduct(productname){
        await this.searchProduct.fill(productname);
    }
    //Click seacrh button
       async clickSearchBtn(){
        await this.searchBtn.click();
    }
    //View searched product
    async SearchedProduct(){
        await expect(this.viewSearchedProduct).toBeVisible();

    }
}
module.exports={ProductSearch};