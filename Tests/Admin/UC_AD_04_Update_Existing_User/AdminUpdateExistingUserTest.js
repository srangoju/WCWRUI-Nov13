var loginDetails = require(protractor.basePath + '/PageObjects/login');
var updateExistingUser = require(protractor.basePath + '/PageObjects/adminUpdateExistingUser');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var EC = protractor.ExpectedConditions;


describe('Users', function () {

//loginDetails.loginToWCWR();
	
it('AdminUpdateExistingUserTest - It should Update existing Admin User', function(){
 
 updateExistingUser.clickOnUsers.click();
 
 browser.sleep(8000);
 
 updateExistingUser.roleName.click();
 browser.sleep(1000);
 
 updateExistingUser.searchRole.sendKeys(testdata.adminName);
 browser.sleep(1000);
 
 updateExistingUser.applyButton.click();
 browser.sleep(1000);
 
 updateExistingUser.clickOnAdminRow.click();
 browser.sleep(1000);
 
 updateExistingUser.firstName.sendKeys('Updating');
 browser.sleep(1000);
 
 updateExistingUser.clickOnUpdate.click();
 browser.sleep(1000);
 
 updateExistingUser.clickOnSendMail.click();
 browser.sleep(1000);
/* expect(element(by.css('.alert-container')).getText()).toEqual('The following User with Login ID 77888 has been successfully Updated');	  
 browser.sleep(3000);
*/
 
 expect(element(by.css('.alert-container')).isDisplayed());	  
 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"))), 8000);

}); 

 
 
it('AdminUpdateExistingUserTest - It should Update existing Case Manager', function(){
 
 updateExistingUser.clickOnUsers.click();
 browser.sleep(8000);
 
 updateExistingUser.roleName.click();
 browser.sleep(1000);
 
 updateExistingUser.searchRole.sendKeys(testdata.superUserName);
 browser.sleep(1000);
 
 updateExistingUser.applyButton.click();
 browser.sleep(1000);
 
 updateExistingUser.clickOnSuperUserRow.click();
 browser.sleep(1000);	
 
 updateExistingUser.firstName.sendKeys('JJ');	  
 browser.sleep(1000);
 
 updateExistingUser.editRole.click();
 browser.sleep(1000);
 
 updateExistingUser.selectAll.click();
 browser.sleep(1000);
 
 updateExistingUser.clickOnDone.click();
 browser.sleep(1000);
 
 updateExistingUser.clickOnUpdate.click();
 browser.sleep(1000);
 
 updateExistingUser.clickOnSendMail.click();
 
 expect(element(by.css('.alert-container')).isDisplayed());	  
 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"))), 8000);
 
}); 
 
});
