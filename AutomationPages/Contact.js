const { expect } = require("@playwright/test");

//Page object model class for contact us form
class contactPage{
    constructor(page){
        this.page = page;
        //locator for all input,text and button field
        this.contactBtn= page.locator('a[href="/contact_us"]');
        this.messageVisible = page.getByRole('heading',{name:'Get In Touch'});
        this.nameField = page.locator('input[data-qa="name"]');
        this.emailField = page.locator('input[data-qa="email"]');
        this.subjectField = page.locator('input[data-qa="subject"]');
        this.messageField = page.locator('#message');
        this.submitBtn = page.locator('input[data-qa="submit-button"]');
    }
    //Validate and click contact us button
    async clickContact(){
        await expect(this.contactBtn).toBeVisible();
        await this.contactBtn.click();
    }
    //Validate message to be visible
    async contactMessageVisible(){
        await expect (this.messageVisible).toBeVisible();
    }
    //Fill name field
    async FillName(name){
        await this.nameField.fill(name);
    }
    //Fill email field
    async FillEmail(email){
        await this.emailField.fill(email);
    }
    //fill subject field
      async fillSubject(subject) {
        await this.subjectField.fill(subject);
    }
    //Fill message field
    async FillMessage(message){
        await this.messageField.fill(message);
    }
    //Click submit button
    async clickSubmit(){
        await this.submitBtn.click();
    }
}
module.exports={contactPage};
