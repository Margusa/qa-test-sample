const { expect } = require('chai');
const { getDriver } = require('../utils/driverFactory');
const LoginPage = require('../pages/LoginPage');

describe('Login Tests', function () {
  this.timeout(30000);
  
  let driver;
  let loginPage;

   beforeEach(async () => {
    driver = await getDriver();
    loginPage = new LoginPage(driver);
  });

  afterEach(async () => {
    if (driver){
      await driver.quit();
    }
  });

  it('Successful login with valid credentials', async () => {
    await loginPage.open();
    await loginPage.login('Admin', 'admin123');

    const url = await driver.getCurrentUrl();
    expect(url).to.include('dashboard');
  });
});