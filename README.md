Project Overview

This project involves end-to-end automation testing of the Automation Exercise website using Playwright. All test cases listed on the Test case page have been automated successfully. The main objective was to automate all available test cases to validate the functionality, stability and user experience of the website. The test cases cover features like user registration, login, product search, cart operations, contact forms, checkout and many more.

Technologies Used:

Language: Javascript

Testing Framework: Playwright

Test Runner: Playwright test

Assertion library: Playwright built-in expect


Project Structure


automation-exercise-playwright/
│

├─ AutomationPages/         # Page Object Model files for pages

│   ├─ LoginPage.js

│   ├─ ProductPage.js

│   ├─ CartPage.js

│   └─ ...  

│

├─ tests/                   # Test scripts

│   ├─ login.spec.js

│   ├─ product.spec.js

│   ├─ cart.spec.js

│   └─ ...  

│

├─ package.json

├─ playwright.config.js

├─ .env


│   Data
│   ├─ contact.jpg

└─ README.md

AutomationPages/ – Contains page objects following the Page Object Model (POM) for cleaner code.
 
tests/ – Contains all test scripts organized by features.


Setup Instructions
1.	Clone the repository
Git clone <your-repo-url>

2.	Install Dependencies
npm install

4.	Install playwright browser
npx playwright install


Running test
Run all tests: npx playwright test –ui


Test Cases Covered
•	Home page:
-	Verify home page is visible
  
•	Login/Registration:
-	User login with valid credentials
-	User registration
-	User logout
-	User cannot login with invalid credentials
  
•	Products:
-	Search products
-	Add products to cart
-	View product details
-	Product quantity
-	Review on product
  
•	Cart:
-	Update cart quantity
-	Remove items from cart
-	Add to cart from recommended items
  
•	Subscription:
-	Subscription in home page
-	Subscription in cart page
  
•	Contact Us
-	Verify contact form submission
  
•	Checkout
-	Register while checkout
-	Register before checkout
-	Login before checkout
  
-	Address details
  
•	Scroll up and down functionality

•	Download invoice after purchase order


Future Improvements
-	Integrate CI/CD using github actions
  
-	Screenshots or video recording for failed tests


Test Results:
User Registration:
<img width="940" height="709" alt="image" src="https://github.com/user-attachments/assets/fdb5ca77-8bf5-46d5-b513-d8263b20cb5c" />

 


Login with valid credentials:
<img width="940" height="544" alt="image" src="https://github.com/user-attachments/assets/79c7e240-5f56-4f4c-be57-d7f2ec0be3b8" />

Login with invalid credentials:
<img width="940" height="534" alt="image" src="https://github.com/user-attachments/assets/7b92e785-d869-4cc3-b5fb-3090112b152f" />

Logout:
<img width="940" height="662" alt="image" src="https://github.com/user-attachments/assets/876e7a5c-bd0d-4fb9-9b13-13f6a4868afe" />

Contact Us:
<img width="940" height="706" alt="image" src="https://github.com/user-attachments/assets/d9a726a2-a22c-49c1-9095-1dde17f3ee73" />

 
Test Case page visibility:
 <img width="940" height="631" alt="image" src="https://github.com/user-attachments/assets/0838e8db-d886-42be-8c4c-f1bfb820a4aa" />

Products and its details:
 <img width="940" height="667" alt="image" src="https://github.com/user-attachments/assets/ed4b2feb-497b-4ea5-9a25-324687cea56a" />

Search Product:
<img width="2018" height="1012" alt="image" src="https://github.com/user-attachments/assets/052ec90d-5a0e-4e45-a537-5d994a0b5347" />


Subscription in Home page:
 <img width="940" height="679" alt="image" src="https://github.com/user-attachments/assets/ee2ebf15-710e-451a-a6f9-90c810ddd647" />

Subscription in Cart page:
 <img width="940" height="657" alt="image" src="https://github.com/user-attachments/assets/302ce9e7-4616-4b98-b395-a314ec018139" />

Add Products in cart:
 <img width="940" height="680" alt="image" src="https://github.com/user-attachments/assets/a6ae0541-8579-4998-a53b-8a99ee00c12d" />

Register while checkout:

<img width="940" height="611" alt="image" src="https://github.com/user-attachments/assets/c7affad9-6926-43aa-ac5a-86725ab178ec" />

Register Before checkout:
 <img width="940" height="575" alt="image" src="https://github.com/user-attachments/assets/67f6944b-dc1b-4c4b-8f34-74dbd68e09f4" />

Login Before Checkout:
 
<img width="940" height="628" alt="image" src="https://github.com/user-attachments/assets/dbd1add1-e389-4338-9b2a-4e00e79f4a83" />

Remove Product from cart:
 <img width="940" height="553" alt="image" src="https://github.com/user-attachments/assets/bb98ec7a-26e1-4832-b868-c204fcc62d73" />

View category products:
 <img width="940" height="591" alt="image" src="https://github.com/user-attachments/assets/f9b0067b-1831-49e0-8e39-0f72b8fe2556" />


View and cart Brand products:
 <img width="940" height="536" alt="image" src="https://github.com/user-attachments/assets/c9292ad8-5d98-4e1d-9a57-0056fbb88be1" />

Search products and verify cart after login
 <img width="940" height="509" alt="image" src="https://github.com/user-attachments/assets/a64f018d-d237-4381-a57f-0ef6918f15be" />

Add review on products:
 <img width="940" height="518" alt="image" src="https://github.com/user-attachments/assets/6115fd69-e3ff-4e86-88b6-60477717e3e6" />

Add to cart from recommended items:
 <img width="940" height="519" alt="image" src="https://github.com/user-attachments/assets/1583d60d-6f34-48f4-9799-d425cc93ad02" />




 
