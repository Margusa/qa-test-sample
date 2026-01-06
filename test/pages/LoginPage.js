const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.username = By.name('username');
    this.password = By.name('password');
    this.loginBtn = By.css("button[type='submit']");
  }

  async open() {
    await this.driver.get('https://opensource-demo.orangehrmlive.com/web');
  }

  async login(user, pass) {
    await this.driver.wait(until.elementLocated(this.username), 5000);
    await this.driver.findElement(this.username).sendKeys(user);
    await this.driver.findElement(this.password).sendKeys(pass);
    await this.driver.findElement(this.loginBtn).click();
  }
}

module.exports = LoginPage;