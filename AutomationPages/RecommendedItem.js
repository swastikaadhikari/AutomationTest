const { expect } = require("@playwright/test");

class itemRecommend{
    constructor(page){
        this.page = page;
        this.scroll = page.locator('div.recommended_items');//Locator for the entire "Recommended Items" section at the bottom of the page
        this.header = page.locator('div.recommended_items')
        this.AddCart = page.locator('a[data-product-id="4"]').nth(2);//"Add to Cart" butto

    }
// Scrolls to the recommended items near footer area
    async footerScroll(){
        //await this.scroll.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await this.scroll.scrollIntoViewIfNeeded();
       
    }
// Verifies that the recommended items section is visible on screen
    async recommendHeader(){
        await expect(this.header).toBeVisible();
    }
 // Clicks on the "Add to Cart" button for the recommended product
    async ClickAddCart(){
        await expect(this.AddCart).toBeVisible();
        await this.AddCart.click();
    }
}
module.exports ={itemRecommend};