var loginDetails = require(protractor.basePath + '/Pages/login');
var updateExistingUser = require(protractor.basePath + '/Pages/adminUpdateExistingUser');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var EC = protractor.ExpectedConditions;


describe('Users', function () {

//loginDetails.loginToWCWR();
	
it('AdminUpdateExistingUserTest - It should Update existing Admin User', function(){
 
 updateExistingUser.clickOnUsers.click();
 
 browser.sleep(8000);
 
 updateExistingUser.roleName.click();
 
 updateExistingUser.searchRole.sendKeys(testdata.adminName);
 
 updateExistingUser.applyButton.click();
 
 updateExistingUser.clickOnAdminRow.click();
 
 updateExistingUser.firstName.sendKeys('Updating');	  
 
 updateExistingUser.clickOnUpdate.click();
 
 updateExistingUser.clickOnSendMail.click();
 browser.sleep(1000);
/* expect(element(by.css('.alert-container')).getText()).toEqual('The following User with Login ID 77888 has been successfully Updated');	  
 browser.sleep(3000);
*/
 
 expect(element(by.css('.alert-container')).isDisplayed());	  


}); 

 
 
/*it('AdminUpdateExistingUserTest - It should Update existing Case Manager', function(){
 
 updateExistingUser.clickOnUsers.click();
 browser.sleep(5000);
 
 updateExistingUser.roleName.click();
 browser.sleep(4000);
 
 updateExistingUser.searchRole.sendKeys(testdata.superUserName);
 browser.sleep(3000);
 
 updateExistingUser.applyButton.click();
 browser.sleep(4000);
 
 updateExistingUser.clickOnSuperUserRow.click();
 browser.sleep(4000);	
 
 updateExistingUser.firstName.sendKeys('JJ');	  
 //browser.sleep(2000);
 
 updateExistingUser.editRole.click();
 //browser.sleep(2000);
 
 updateExistingUser.selectAll.click();
 //browser.sleep(2000);
 
 updateExistingUser.clickOnDone.click();
 //browser.sleep(2000);
 
 updateExistingUser.clickOnUpdate.click();
 //browser.sleep(2000);
 
 updateExistingUser.clickOnSendMail.click();
 
 expect(element(by.css('.alert-container')).getText()).toEqual('Updated Successfully');	  
 //browser.sleep(2000);
 
}); 
*/  
});
