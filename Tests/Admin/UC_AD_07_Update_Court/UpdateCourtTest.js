var loginDetails = require(protractor.basePath + '/PageObjects/login');
var updateCourt = require(protractor.basePath + '/PageObjects/updateCourt');
var knos = require(protractor.basePath + '/PageObjects/KNOS');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;


describe('Update Court', function () {
	
	//loginDetails.loginToWCWR();
	
 it('updateCourt - It should Update the Court Information!', function(){
	  
	 updateCourt.clickOnCourts.click();
	 //browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 8000);
  	 browser.sleep(4000);
  	 updateCourt.name.click();
  	 browser.sleep(1000);
  	 updateCourt.searchCourt.sendKeys(testdata.courtName);
  	 browser.sleep(1000);
  	 updateCourt.applyButton.click();
  	 browser.sleep(1000);
  	 updateCourt.clickOnRow.click();
  	 browser.sleep(1000);	 
  	 var ruleName = updateCourt.rule;
     browser.executeScript("arguments[0].scrollIntoView();", ruleName);
     	ruleName.sendKeys(testdata.ruleNameDescription);
     	browser.sleep(1000);
     	updateCourt.highPriority.click();
     	browser.sleep(1000);
     	updateCourt.precedingZero.click();
     	browser.sleep(1000);
     	updateCourt.locationToolTip.sendKeys(testdata.locationToolTip);
     	browser.sleep(1000);
     	updateCourt.buttonLebel.sendKeys(testdata.buttonLabel);
     	browser.sleep(1000);
     	updateCourt.allowMarking.click();
     	browser.sleep(1000);
     	updateCourt.turnAroundTime.sendKeys(testdata.turnAroundTime);
     	browser.sleep(1000);
     	updateCourt.clickOnUpdate.click();
     	browser.sleep(1000);
     	updateCourt.clickOnADDUpdate.click();
     	browser.sleep(1000);
     	expect(element(by.css('.alert-container')).getText()).toEqual('Court details updated successfully');
     	browser.sleep(2000);
	  
 });
 
 
});
  