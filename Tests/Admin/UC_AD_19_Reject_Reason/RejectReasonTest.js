var loginDetails = require(protractor.basePath + '/PageObjects/login');
var rejectReason = require(protractor.basePath + '/PageObjects/rejectReason');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;


describe('Reject Reason', function () {

//loginDetails.loginToWCWR();
	
it('rejectReasonTest - Add Reject Reason without reason name', function(){
		   
	rejectReason.addRejectReason.click();
	browser.sleep(1000);
	rejectReason.createReason.click();
	browser.sleep(1000);
	rejectReason.clickOnSave.click();
	browser.sleep(1000);
	expect(element(by.css('.alert-container')).getText()).toEqual('REASON NAME cannot be empty');	  
	browser.sleep(1000);

});

it('RejectReasonTest - It should Add Reject Reason!', function(){
	  
	  //browser.ignoreSynchronization = false;
	  
	  rejectReason.addRejectReason.click();
	  browser.sleep(1000);
	  rejectReason.createReason.click();
	  browser.sleep(1000);
	  rejectReason.addReason.sendKeys(testdata.rejectReason);
	  browser.sleep(1000);
	  rejectReason.clickOnSave.click();
	  browser.sleep(1000);  
	  rejectReason.clickOnYes.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Reject reason updated/added');	  
	  browser.sleep(1000);

  });

it('RejectReasonTest - It should update a Reject reason  Name', function(){
	   
	rejectReason.rejectReasonIcon.click();
	  browser.sleep(1000);
	  rejectReason.rejectUpdate.click();
	  browser.sleep(1000);
	  rejectReason.reasonEnter.sendKeys(testdata.caseupdates);
	  browser.sleep(1000);
	  rejectReason.savereasonUpdate.click();
	  browser.sleep(1000);
	  rejectReason.confirmreasonupdate.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Reject reason updated/added');
     }); 

it('RejectReasonTest - It should delete a random  Reason Name', function(){
	   
	  rejectReason.reasonIcon.click();
	  browser.sleep(1000);
	  rejectReason.reasonToDelete.click();
	  browser.sleep(1000);
	  rejectReason.deleteReasonSymbol.click();
	  browser.sleep(1000);
	  rejectReason.deleteReasonYes.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Reject reason deleted');	  
	  browser.sleep(1000);

     });
  
});
