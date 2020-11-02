var loginDetails = require(protractor.basePath + '/Pages/login');
var addCaseSubType = require(protractor.basePath + '/Pages/adminAddsCaseSubType');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var subTypeTitle = require(protractor.basePath + '/Testdata/addCaseSubType.json');
const EC = protractor.ExpectedConditions;


describe('Add Case SubType', function () {
	
it('AdminAddsCaseSubTypeTest - It should Add New Case SubType without Entering value', function(){
	   
	  addCaseSubType.addSubType.click();
	  //browser.sleep(2000);
	  addCaseSubType.createSubType.click();
	  //browser.sleep(2000);
	  addCaseSubType.saveButton.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('SubTitle Type cannot be empty');	  
	  browser.sleep(3000);
 });  
 
it('AdminAddsCaseSubTypeTest - It should Add New Case SubType', function(){
 
	addCaseSubType.newCaseSubtype.click();
	//browser.sleep(2000);
	addCaseSubType.writeSubtype.click();
	//browser.sleep(2000);	
	addCaseSubType.subtypeName.sendKeys(subTypeTitle.caseTypeTitle);	  
	//browser.sleep(2000);
	addCaseSubType.clickSave.click();
	//browser.sleep(2000);
	addCaseSubType.clickConfirm.click();
	browser.sleep(1000);
	expect(element(by.css('.alert-container')).getText()).toEqual('Type updated/added');	  
	//browser.sleep(2000);
 
}); 

it('AdminAddsCaseSubTypeTest - It should delete a random  Subtype Name', function(){
	   
	  addCaseSubType.subIcon.click();
	  //browser.sleep(2000);
	  addCaseSubType.subtypeToDelete.click();
	  //browser.sleep(2000);
	  addCaseSubType.deleteSymbol.click();
	  //browser.sleep(2000);
	  addCaseSubType.deleteYes.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Case Sub Type deleted');	  
	  //browser.sleep(2000);

	  
     });
 
  
});
