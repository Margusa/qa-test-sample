const { expect } = require('chai');
const { getDriver } = require('../utils/driverFactory');
const LoginPage = require('../pages/LoginPage');

describe('Login Tests', function () {
  let driver;
  let loginPage;

  before(async () => {
    driver = await getDriver();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  it('Login exitoso con credenciales válidas', async () => {
    await loginPage.open();
    await loginPage.login('Admin', 'admin123');

    const url = await driver.getCurrentUrl();
    expect(url).to.include('dashboard');
  });
});