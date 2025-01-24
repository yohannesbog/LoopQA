class LoginPage {
    constructor(page) {
      this.page = page;
    }
  // login method
    async login(email, password) {
      await this.page.goto('/');
      await this.page.fill('[id="username"]', email);
      await this.page.fill('[id="password"]', password);
      await this.page.click('button[type="submit"]');
      await this.page.waitForURL('/');
    }
  // navigate to specific app
    async navigateTo(app) {
      await this.page.click(`text=${app}`);
    }
  }
  
  module.exports = { LoginPage };