var loginDetails = require(protractor.basePath + '/PageObjects/login');
var updateCaseType = require(protractor.basePath + '/PageObjects/adminUpdateCaseType');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var update = require(protractor.basePath + '/Testdata/updateCaseType.json');
const EC = protractor.ExpectedConditions;


describe('Update Case Type', function () {
	
it('AdminUpdateCaseTypeTest1 - It should Update Case Type', function(){
 
	updateCaseType.clickOnCaseTypes.click();
	browser.sleep(1000);
 
	updateCaseType.clickOnSearchPanel.click();
	browser.sleep(1000);
	
	updateCaseType.enterSearchItem.sendKeys(update.caseTypeTitle);
	browser.sleep(1000);	
	
	updateCaseType.clickOnApply.click();
	browser.sleep(1000);
	
	updateCaseType.clickOnAccounts.click();
	browser.sleep(1000);
	
	updateCaseType.addCaseTypeTitle.sendKeys(update.caseTypeTitle1);
	browser.sleep(1000);
 
	updateCaseType.clickOnSave.click();
	browser.sleep(1000);
	
	updateCaseType.clickOnYes.click();
	browser.sleep(1000);

	expect(element(by.css('.alert-container')).getText()).toEqual('Type updated/added');	  
	//browser.sleep(3000);
 
}); 
 
});
