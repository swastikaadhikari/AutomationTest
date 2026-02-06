//Test Case No 6

import {test,expect,chromium} from '@playwright/test';
import { contactPage } from '../../AutomationPages/Contact';//Importing the contact page from Page object model
import path from 'node:path';

//Test suite for contact us form
test.describe('Contact Us Form',() =>{
    let browser,context,page;
    let Contact;
    //Runs before each test 
    test.beforeEach('',async() =>{
        browser = await chromium.launch();//Launch browser
        context = await browser.newContext();//Create new browser context
        page = await context.newPage();//Create a new page inside this context
        Contact = new contactPage(page);//Initialize the page object model(POM)

        await page.goto('/');//Navigate to homepage
    });

//Contact Us form test
    test('Contact Us',async()=>{
        await Contact.clickContact();//Click contact us button
        await Contact.contactMessageVisible();//Verify message visibility
        //Fill name,email,subject and message
        await Contact.FillName('Test');
        await Contact.FillEmail('Test@gmail.com');
        await Contact.fillSubject('Text message');
        await Contact.FillMessage('Type your message here');
        //
        const filePath = path.resolve(__dirname,'../../Data/contact.jpg');
        await page.locator('input[name="upload_file"]').setInputFiles(filePath);

        // page.on('dialog', async dialog => {
        // console.log('Alert text:', dialog.message());
        // await dialog.accept();   // clicks OK
        // });
        //Click Submit button
        await Contact.clickSubmit();

        //Verify success message
        const messageLocator = page.locator('div.status');
        await expect(messageLocator).toHaveText('Success! Your details have been submitted successfully.');//success message

        

    })
})