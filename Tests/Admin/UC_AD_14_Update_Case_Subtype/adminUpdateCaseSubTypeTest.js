var loginDetails = require(protractor.basePath + '/PageObjects/login');
var updateCaseSubType = require(protractor.basePath + '/PageObjects/adminUpdateCaseSubType');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var subTypeTitle = require(protractor.basePath + '/Testdata/addCaseSubType.json');
const EC = protractor.ExpectedConditions;


describe('Admin Updates Case SubType', function () {
	
	//loginDetails.loginToWCWR();
	
	it('AdminUpdatesCaseSubType - It should update a Case sub type Name', function(){
		   
		  updateCaseSubType.casesubtypessIcon.click();
		  
		  browser.sleep(1000);
		
	      updateCaseSubType.lastofPage.click();
	      
	      browser.sleep(1000);
	    
		  updateCaseSubType.casesubtypeUpdate.click();
		  
		  browser.sleep(1000);
		
		  updateCaseSubType.casesubtypeEnter.sendKeys(testdata.caseupdates);
		  
		  browser.sleep(1000);
		
	      updateCaseSubType.saveUpdate.click();
	      
	      browser.sleep(1000);
	    
	      updateCaseSubType.confirmSaveupdate.click();
	      
	      browser.sleep(1000);
	    
		  expect(element(by.css('.alert-container')).getText()).toEqual('Type updated/added');
	  
	}); 
  
});
