var loginDetails = require(protractor.basePath + '/Pages/login');
var updateCourt = require(protractor.basePath + '/Pages/updateCourt');
var knos = require(protractor.basePath + '/Pages/KNOS');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;


describe('Update Court', function () {
	
	//loginDetails.loginToWCWR();
	
 it('UpdateCourt - It should Update the Court Information!', function(){
	  
	 updateCourt.clickOnCourts.click();
	 //browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 8000);
  	 browser.sleep(4000);
  	 updateCourt.name.click();
  	 //browser.sleep(2000);
  	 updateCourt.searchCourt.sendKeys(testdata.courtName);
  	 //browser.sleep(2000);
  	 updateCourt.applyButton.click();
  	 //browser.sleep(2000);
  	 updateCourt.clickOnRow.click();
  	 //browser.sleep(2000);
  	 
  	 var ruleName = updateCourt.rule;
     browser.executeScript("arguments[0].scrollIntoView();", ruleName);
     ruleName.sendKeys(testdata.ruleNameDescription);
     updateCourt.highPriority.click();   
     updateCourt.precedingZero.click();
     updateCourt.locationToolTip.sendKeys(testdata.locationToolTip);
     updateCourt.buttonLebel.sendKeys(testdata.buttonLabel);
     updateCourt.allowMarking.click();
     updateCourt.turnAroundTime.sendKeys(testdata.turnAroundTime);
     /*var knos = updateCourt.relationships;
     browser.executeScript("arguments[0].scrollIntoView();", knos);
     knos.click();*/
     //updateCourt.checkbox.click();
     //updateCourt.clickOnDone.click();
     updateCourt.clickOnUpdate.click();
     updateCourt.clickOnADDUpdate.click();
     browser.sleep(1000);
     expect(element(by.css('.alert-container')).getText()).toEqual('Court details updated successfully');
     //browser.sleep(4000);
	  
 });
 
 
});
  