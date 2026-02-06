const { expect } = require("@playwright/test");

//Page object model class for Test Case page
class testCasePage{
    constructor(page){
        this.page = page;
        //Locator for text visibility
        this.testcase = page.locator('a[href="/test_cases"]').filter({ hasText: 'Test Cases' }).nth(1);
        this.TestCaseText = page.locator('h2.title');

    }
    //Validate testcase button visibility and click function
    async clickTestCase(){
        await expect(this.testcase).toBeVisible();
        await this.testcase.click();
    }
    //validate test case page
    async ViewTestCase(){
        await expect(this.TestCaseText).toBeVisible();
    }
}

module.exports= {testCasePage};