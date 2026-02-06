class LoginPage{
    constructor(page){
        this.page = page;
        this.emailAdr = page.locator('input[data-qa="login-email"]');
        this.password = page.locator('input[data-qa="login-password"]');
        this.loginBtn = page.locator('button[data-qa="login-button"]');

    }


    async userLogin(email,password){
    await this.emailAdr.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();

    }
}

module.exports = {LoginPage}