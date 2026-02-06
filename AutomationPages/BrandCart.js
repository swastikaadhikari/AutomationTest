const { expect } = require("@playwright/test");
//Page object model class for cartbrand product
class CartBrandProduct{
    constructor(page){
        this.page =page
        //locator for button,text header
        this.productBtn = page.locator('a[href="/products"]');
        this.brandHeader = page.getByText('Brands');
        this.poloBrand = page.locator('a[href="/brand_products/Polo"]');
        this.PoloHeader = page.locator('h2.title');
        this.HMbrand = page.locator('a[href="/brand_products/H&M"]');
        this.HMHeader = page.locator('h2.title');
    }
    //Click product button
    async ClickProductBtn(){
        await expect(this.productBtn).toBeVisible();
        await this.productBtn.click();
    }
    //Verify text header
    async ViewBrandHeader(){
        await expect(this.brandHeader).toContainText('Brands');
    }
    //Click polo brand and visibility function
    async ClickPoloBrand(){
        await expect(this.poloBrand).toBeVisible();
        await this.poloBrand.click();
    }
    //Verify polo header
    async ViewPoloHeader(){
        await expect(this.PoloHeader).toBeVisible();
       
    }
    //Click HM brand and visibility function
    async ClickHMBrand(){
        await expect(this.HMbrand).toBeVisible();
        await this.HMbrand.click();
    }
    //Verify HM header
    async ViewHMHeader(){
        await expect(this.HMHeader).toBeVisible();
    }

}
module.exports ={CartBrandProduct};