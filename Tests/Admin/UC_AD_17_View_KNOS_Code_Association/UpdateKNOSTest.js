var loginDetails = require(protractor.basePath + '/Pages/login');
var updateKnos = require(protractor.basePath + '/Pages/KNOS');

var testdata = require(protractor.basePath + '/Testdata/data.json');
var knosdata = require(protractor.basePath + '/Testdata/knos.json');
const EC = protractor.ExpectedConditions;

describe('Update KNOS Relationship', function () {

 //loginDetails.loginToWCWR();
	
 //UC_AD_18_TC1
 it('UpdateKNOS Association - It should Update KNOS Association!', function(){
	  
	 updateKnos.clickOnknos.click();
	 
	 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 15000);
	 //browser.sleep(2000);
	 updateKnos.clickAnyRow.click();
	 //browser.sleep(2000);
	 updateKnos.caseTypeToUpdate.click();
	 //browser.sleep(2000);
     updateKnos.update.click();
     browser.sleep(1000);
     expect(element(by.css('.alert-container')).isDisplayed());	  
	 //browser.sleep(2000)

 });

 
});
  