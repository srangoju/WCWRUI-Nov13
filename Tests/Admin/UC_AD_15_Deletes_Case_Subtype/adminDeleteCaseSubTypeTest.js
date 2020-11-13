var loginDetails = require(protractor.basePath + '/PageObjects/login');
var deleteCaseSubType = require(protractor.basePath + '/PageObjects/adminDeleteCaseSubType');
var testdata = require(protractor.basePath + '/Testdata/data.json');

const EC = protractor.ExpectedConditions;


describe('Delete Case SubType', function () {
	
	//loginDetails.loginToWCWR();
	
it('AdminDeletesCaseSubTypeTest - It should delete a Case Subtype', function(){
	   
	  deleteCaseSubType.subIcon.click();
	  browser.sleep(1000);
	  deleteCaseSubType.subtypeToDelete.click();
	  browser.sleep(1000);
	  deleteCaseSubType.deleteSymbol.click();
	  browser.sleep(1000);
	  deleteCaseSubType.deleteYes.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Case Sub Type deleted');	  
	  browser.sleep(1000);

	  
     });
 
  
});
