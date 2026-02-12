Project Overview

This project involves end-to-end automation testing of the Automation Exercise website using Playwright. All test cases listed on the Test case page have been automated successfully. The main objective was to automate all available test cases to validate the functionality, stability and user experience of the website.
The test cases cover features like user registration, login, product search, cart operations, contact forms, checkout and many more.

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
3.	Install playwright browser
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
 

Login with invalid credentials:
 
Logout:
 
Register using same email address:

Contact Us:
 
Test Case page visibility:
 
Products and its details:
 
Search Product:
 


Subscription in Home page:
 
Subscription in Cart page:
 
Add Products in cart:
 
Register while checkout:
 

Register Before checkout:
 
Login Before Checkout:
 


Remove Product from cart:
 
View category products:
 




View and cart Brand products:
 
Search products and verify cart after login
 






Add review on products:
 
Add to cart from recommended items:
 



 
