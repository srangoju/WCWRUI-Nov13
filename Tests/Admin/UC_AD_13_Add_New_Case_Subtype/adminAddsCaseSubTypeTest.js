var loginDetails = require(protractor.basePath + '/PageObjects/login');
var addCaseSubType = require(protractor.basePath + '/PageObjects/adminAddsCaseSubType');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var subTypeTitle = require(protractor.basePath + '/Testdata/addCaseSubType.json');
const EC = protractor.ExpectedConditions;


describe('Add Case SubType', function () {
	
it('AdminAddsCaseSubTypeTest - It should Add New Case SubType without Entering value', function(){
	   
	  addCaseSubType.addSubType.click();
	  browser.sleep(1000);
	  addCaseSubType.createSubType.click();
	  browser.sleep(1000);
	  addCaseSubType.saveButton.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('SubTitle Type cannot be empty');	  
	  browser.sleep(3000);
 });  
 
it('AdminAddsCaseSubTypeTest - It should Add New Case SubType', function(){
 
	addCaseSubType.newCaseSubtype.click();
	browser.sleep(1000);
	addCaseSubType.writeSubtype.click();
	browser.sleep(1000);	
	addCaseSubType.subtypeName.sendKeys(subTypeTitle.caseTypeTitle);	  
	browser.sleep(1000);
	addCaseSubType.clickSave.click();
	browser.sleep(1000);
	addCaseSubType.clickConfirm.click();
	browser.sleep(1000);
	expect(element(by.css('.alert-container')).getText()).toEqual('Type updated/added');	  
	browser.sleep(1000);
 
}); 

  
});
