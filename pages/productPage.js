class ProductPage{
    constructor(page){
        this.page = page;
        this.productBtn = page.locator('a[href="/products"]');//Product Icon
        this.allProduct = page.getByText('All Products');//Product Text
        this.viewProduct = page.locator('[ href="/product_details/1"]');//ViewProduct icon
        this.searchProduct = page.locator('#search_product');//search product form
        this.searchBtn = page.locator('#submit_search');//search product button
        
        this.addtocart = page.getByText('Add to cart').first();//add to cart button
        this.shopping = page.locator('button.close-modal[data-dismiss="modal"]');//continue shopping button
        this.addtosecondCart = page.locator('a[data-product-id="2"]').first();//second product of page
        this.viewCart = page.locator('(//a[@href="/view_cart"])[2]');//view cart button
        this.viewProductBtn = page.locator('a[href="/product_details/1"]');
        this.increaseProduct = page.locator('#quantity');
        this.clickAddtocart = page.locator('button[type="button"]')
        //this.addtoSecondcart = page.getByText('Add to cart').first();


    }
    //Product
    async clickProduct(){
        await this.productBtn.click();
    }
     async productHeader(){
        return await this.allProduct.textContent();
    }

    async clickFirstProduct(){
        await this.viewProduct.click();
    }

    async getProduct(productname){
        await this.searchProduct.fill(productname);
    }

    async clickSearchBtn(){
        await this.searchBtn.click();
    }

    async addtoCartBtn(){
        await this.addtocart.click();
    }

    async shoppingBtn(){
        await this.shopping.click();
    }

    async addSecondProduct(){
        await this.addtosecondCart.click();
    }

    async ViewCartProduct(){
        await this.viewCart.click();
    }

    async clickPrdBtn(){
        await this.viewProductBtn.click();
    }
  
    async fillProductQuantity(quantity){
        await this.increaseProduct.fill(quantity);
    }

    async addToCartClick(){
        await this.clickAddtocart.click();
    }
}





module.exports={ProductPage};
