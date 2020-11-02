var loginDetails = require(protractor.basePath + '/Pages/login');
var addCaseType = require(protractor.basePath + '/Pages/adminAddsCaseType');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var caseTypeTitle = require(protractor.basePath + '/Testdata/addCaseType.json');
const EC = protractor.ExpectedConditions;


describe('Add CaseType', function () {
	

it('AdminAddsCaseTypeTest - It should Add New Case Type without Entering value', function(){
	   
	  addCaseType.clickOnCaseTypes.click();
	  //browser.sleep(2000);
	  addCaseType.clickOnCreateCaseType.click();
	  //browser.sleep(2000);
	  addCaseType.clickOnSave.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Title Type cannot be empty');	  
	  browser.sleep(3000);
 });  
 
it('AdminAddsCaseTypeTest - It should Add New Case SubType', function(){
 
	addCaseType.clickOnCaseTypes.click();
	//browser.sleep(2000);
	addCaseType.clickOnCreateCaseType.click();
	//browser.sleep(2000);	
	addCaseType.addCaseTypeTitle.sendKeys(caseTypeTitle.caseTypeTitle);	  
	//browser.sleep(2000);
	addCaseType.clickOnSave.click();
	//browser.sleep(2000);
	addCaseType.clickOnYes.click();
	browser.sleep(1000);
	expect(element(by.css('.alert-container')).getText()).toEqual('Type updated/added');	  
	//browser.sleep(2000);
 
}); 

it('AdminDeletesCaseTypeTest - It should delete a random  Type Name', function(){
	   
	  addCaseType.clickOnCaseTypes.click();
	  //browser.sleep(2000);
	  addCaseType.casetypeToDelete.click();
	  //browser.sleep(2000);
	  addCaseType.deleteSymbol.click();
	  //browser.sleep(2000);
	  addCaseType.deleteYes.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Type deleted');	  
	  //browser.sleep(2000);

	  
     });
 
  
});
