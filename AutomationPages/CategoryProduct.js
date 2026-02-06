const { expect } = require("@playwright/test");
//Page object model class for product category
class ProductCategory{
    constructor(page){
        this.page = page;
        this.Category = page.getByText('Category');// "Category" header text on sidebar
        this.HaveWomen = page.locator('a[href="#Women"]');//Women category main link
        this.ClickBadge = page.locator('a[href="#Women"] > span.badge.pull-right'); // Badge (toggle icon) next to Women category
        this.Dress = page.locator('a[href="/category_products/1"]');// Link for "Dress" products under Women category
        this.WomenProduct = page.getByText('Women - Dress Products');  // Header displayed after clicking Women > Dress
        this.MenBadge = page.locator('a[href="#Men"] > span.badge.pull-right');// Badge (toggle icon) next to Men category
        this.tshirt = page.locator('a[href="/category_products/3"]');// Link for "Tshirts" under Men category
        this.MenProduct = page.getByText('Men - Tshirts Products'); // Header displayed after clicking Men > Tshirts
    }

       // Validates the Category header text
     async categoryHeader(){
            await expect(this.Category).toHaveText('Category');
        }
           // Ensures the Women category link is visible
    async ViewWomen(){
        await expect(this.HaveWomen).toBeVisible();
    }
    // Expands Women category by clicking the badge
    async BadgeClick(){
        await this.ClickBadge.click();
    }
    // Clicks on Women > Dress and ensures it is visible
    async ClickDress (){
        await expect(this.Dress).toBeVisible();
        await this.Dress.click();
    }
     // Validates the Women Dress category header
    async WomenHeader(){
        await expect(this.WomenProduct).toHaveText('Women - Dress Products');
    }
    // Expands Men category by clicking the badge
    async ClickMenBadge(){
        await expect(this.MenBadge).toBeVisible();
        await this.MenBadge.click();
    }
    
    // Clicks Men > Tshirts category
    async ClickTshirt(){
        await expect(this.tshirt).toBeVisible();
        await this.tshirt.click();
    }
        // Validates the Men Tshirt category header
    async MenHeader(){
        await expect(this.MenProduct).toHaveText('Men - Tshirts Products')
    }
}
module.exports = {ProductCategory};
