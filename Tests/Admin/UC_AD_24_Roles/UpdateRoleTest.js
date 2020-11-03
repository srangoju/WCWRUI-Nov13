var loginDetails = require(protractor.basePath + '/Pages/login');
var helperMethods = require(protractor.basePath + '/Utilities/helper.js');
var updateRole = require(protractor.basePath + '/Pages/updateRole');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('User Roles', function () {

loginDetails.loginToWCWR();
	
it('UpdateRole - It should Update the User Role!', function(){
	 
	 updateRole.clickOnUserRole.click();
	 //browser.sleep(2000);
	 updateRole.clickOnRow.click();
	 //browser.sleep(2000);
  	 updateRole.roleName.sendKeys(testdata.roleName);
  	 //browser.sleep(2000);
	 updateRole.description.sendKeys(testdata.description);
	 //browser.sleep(2000);
	 updateRole.acquireDocuments.click();
	 //browser.sleep(2000);
	 expect((updateRole.acquireDocuments).isSelected()).toBeFalsy();
	 //browser.sleep(2000);
 	 updateRole.acquireDocuments.click();
 	 //browser.sleep(2000);
	 expect((updateRole.acquireDocuments).isSelected()).toBe(true);
	 //browser.sleep(2000);
	 updateRole.clickOnUpdate.click();
	 //browser.sleep(2000);
	 expect((updateRole.validationMessage).isDisplayed());
	 //browser.sleep(2000);
 });

});
  