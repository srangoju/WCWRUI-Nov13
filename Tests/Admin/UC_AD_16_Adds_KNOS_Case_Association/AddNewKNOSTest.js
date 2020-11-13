var loginDetails = require(protractor.basePath + '/PageObjects/login');
var addKnos = require(protractor.basePath + '/PageObjects/KNOS');
var createCourt = require(protractor.basePath + '/PageObjects/createCourt');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var knosdata = require(protractor.basePath + '/Testdata/knos.json');
var EC = protractor.ExpectedConditions;


describe('Add KNOS Relationship', function () {
	
	//loginDetails.loginToWCWR();
	

	//UC_AD_16_TC1
	it('AddNewKNOS- It should add new casetype and subtype releationship to system!', function(){
		 
		 addKnos.clickOnknos.click();
		 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 25000);
		 browser.sleep(1000);
		 addKnos.createRelationship.click();
		 browser.sleep(1000);
	  	 addKnos.caseType.click();
		 browser.sleep(1000);
		 addKnos.caseSubType.click();
		 browser.sleep(1000);
		 addKnos.add.click();
		 browser.sleep(1000);
		 expect((addKnos.validationMessage).isDisplayed());
         browser.sleep(2000);
		 		 
	});
	
	//UC_AD_16_TC2
	it('Verify KNOS- Verifying relationship in Associate KNOS Codes drop down', function(){
		 
		  createCourt.clickOnCourts.click();
		  browser.sleep(1000);  
		  createCourt.createCourt.click();
		  browser.sleep(1000);
		  createCourt.newCourtRadioButon.click();
		  browser.sleep(1000);
		  createCourt.selectCourtType.click();
		  browser.sleep(1000);
		  var scrollDown = addKnos.relationships;
	         browser.executeScript("arguments[0].scrollIntoView();", scrollDown);
	         browser.sleep(2500);
	         addKnos.relationships.click();
	         browser.sleep(1000);
	         addKnos.clickOnCaseType.click();
	         browser.wait(EC.visibilityOf(element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[2]/div/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 5000);
	         addKnos.searchCaseType.sendKeys(knosdata.caseType)
	         browser.sleep(1000);
	         //browser.wait(EC.visibilityOf(element(by.linkText("APPLY"))), 5000);
	         addKnos.applyButton.click();
	         browser.sleep(1000);
	         expect((addKnos.verifyCaseType).getText()).toEqual("Case Type123");
			 browser.sleep(1000);
			 addKnos.cancelAlert.click();
			 browser.sleep(2000);
	});
		 
	
	it('CancelKNOS- It should cancel adding new casetype and subtype releationship to system!', function(){
		 
		 addKnos.clickOnknos.click();
		 
		 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 15000);
		 
		 //browser.sleep(1000);
		 addKnos.createRelationship.click();
		 browser.sleep(1000);
	  	 addKnos.caseType.click();
		 browser.sleep(1000);
		 addKnos.caseSubType.click();
		 browser.sleep(1000);
		 addKnos.cancel.click();
		 browser.sleep(2000);
		 
		 
	});
	
});
