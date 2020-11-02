var deleteUser = require(protractor.basePath + '/Pages/deleteUser');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var loginDetails = require(protractor.basePath + '/Pages/login');
const EC = protractor.ExpectedConditions;

describe('Update Court', function () {
	
loginDetails.loginToWCWR();

it('DeleteUserTest - It should make a user active/inactive', function(){
	
  deleteUser.usersTab.click();
  browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[7]/div[1]/div/span"))), 8000);
  //browser.sleep(3000);
  deleteUser.findUser.click();
  //browser.sleep(3000);
  deleteUser.clickUser.click();
  //browser.sleep(3000);
  //deleteUser.checkBox.click();
  //browser.sleep(3000);
  deleteUser.updateUser.click();
  //browser.sleep(3000);
  deleteUser.mailConfirm.click();
  //browser.sleep(3000);
  browser.sleep(1000);
  expect(element(by.css('.alert-container')).isDisplayed());
  
});

});