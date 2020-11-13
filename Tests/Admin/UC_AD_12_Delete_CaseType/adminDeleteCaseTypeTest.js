var loginDetails = require(protractor.basePath + '/PageObjects/login');
var deleteCaseType = require(protractor.basePath + '/PageObjects/deleteCaseType');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;


describe('Delete CaseType', function () {
	
//loginDetails.loginToWCWR();

it('AdminDeletesCaseTypeTest - It should delete a random  Type Name', function(){
	   
	  deleteCaseType.casetypeIcon.click();
	  browser.sleep(1000);
	  deleteCaseType.lastPage.click();
	  browser.sleep(1000);
	  //deleteCaseType.subtypeToDelete.click();
	  browser.sleep(1000);
	  deleteCaseType.deleteCaseType.click();
	  browser.sleep(1000);
	  deleteCaseType.deleteCasetypeYes.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Type deleted');

	  
     });

  
});
