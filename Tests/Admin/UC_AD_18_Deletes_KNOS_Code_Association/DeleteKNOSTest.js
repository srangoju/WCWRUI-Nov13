var loginDetails = require(protractor.basePath + '/Pages/login');
var deleteKnos = require(protractor.basePath + '/Pages/KNOS');
var createCourt = require(protractor.basePath + '/Pages/createCourt');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var knosdata = require(protractor.basePath + '/Testdata/knos.json');
const EC = protractor.ExpectedConditions;


describe('Delete KNOS Relationship', function () {
	
 //UC_AD_18_TC1
 it('DeleteKNOS Association - It should Delete KNOS Association!', function(){
	  
	 deleteKnos.clickOnknos.click();
	 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 15000);
	 //browser.sleep(2000); 
	 deleteKnos.clickOnCaseTypeForDelete.click();
	 //browser.sleep(2000);
	 deleteKnos.searchCaseTypeForDelete.sendKeys(knosdata.caseType)
     //browser.sleep(2000);
     deleteKnos.applyButton.click();
     //browser.sleep(2000);
     deleteKnos.deleteRelationship.click();
     //browser.sleep(2000);
     deleteKnos.clickOnDelete.click();
     browser.sleep(1000);
     /*expect((deleteKnos.validationMessage).getText()).toEqual("The KNOS code : 1156, has been deleted successfully.");
	 //browser.sleep(2000);*/
     expect((deleteKnos.validationMessage).isDisplayed());
	 //browser.sleep(2000);

 });
 
//UC_AD_18_TC2
 it('DeleteKNOS Association - Verifying relationship in Associate KNOS Codes drop down', function(){
	  
	 createCourt.clickOnCourts.click();
	  //browser.sleep(2000);  
	  createCourt.createCourt.click();
	  //browser.sleep(2000);
	  createCourt.selectCourtType.click();
	  //browser.sleep(2000);
	  var scrollDown = deleteKnos.relationships;
        browser.executeScript("arguments[0].scrollIntoView();", scrollDown);
        browser.sleep(2500);
        deleteKnos.relationships.click();
        //browser.sleep(2000);
        deleteKnos.clickOnCaseType.click();
        //browser.sleep(2000);
        deleteKnos.searchCaseType.sendKeys(knosdata.caseType)
        //browser.sleep(2000);
        deleteKnos.applyButton.click();
        browser.sleep(1000);
        //expect((deleteKnos.verifyCaseType).getText()).toEqual("CaseType123");
        expect((deleteKnos.verifyCaseType).getText()).not.toContain('CaseType123');
		//browser.sleep(3000);

 });

 
});
  