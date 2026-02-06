//test case no 7

import {test,expect,chromium} from '@playwright/test';
import { testCasePage } from '../../AutomationPages/Testcase';//Importing the testcase page from Page object model
//Test suit for testcase page
test.describe('TestCase Page',() =>{
    let browser,context,page;
    let Testcase;
    //Runs before each test
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//browser launch
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context
        Testcase = new testCasePage(page);//Initialize the page object model(POM)
        await page.goto('/');//Navigate to homepage
    });

    //Actual test case for test case page
test('Verify Test case Page',async()=>{
    await Testcase.clickTestCase();//Click testcase button
    await Testcase.ViewTestCase();//Verify test case page

})
});
