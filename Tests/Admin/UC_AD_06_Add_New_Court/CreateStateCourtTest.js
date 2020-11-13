var loginDetails = require(protractor.basePath + '/PageObjects/login');
var createStateCourt = require(protractor.basePath + '/PageObjects/createCourt');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('Create New State Court', function () {
	
	//loginDetails.loginToWCWR();
	
	it('createStateCourtTest - IT should create new State court', function() {	  
		  createStateCourt.clickOnCourts.click();
		  browser.sleep(1000);
		  createStateCourt.createCourt.click();
		  browser.sleep(1000);
		  createStateCourt.newCourtRadioButon.click();
		  browser.sleep(1000);
		  createStateCourt.selectCourtType.click();
		  browser.sleep(1000);
		  createStateCourt.selectState.click();
		  browser.sleep(1000);
		  createStateCourt.courtName.sendKeys(testdata.courtName);
		  browser.sleep(1000);
		  createStateCourt.courtDisplayName.sendKeys(testdata.courtDisplayName);
		  browser.sleep(1000);
		  createStateCourt.courtLink.sendKeys(testdata.courtLink);
		  browser.sleep(1000);
		  createStateCourt.nextCaseNumber.sendKeys(testdata.nextCaseNumber);
		  browser.sleep(1000);
		  createStateCourt.docketFormat.sendKeys(testdata.docketFormat);
		  browser.sleep(1000);
		  var sampleTextBox = createStateCourt.sample;
		         browser.executeScript("arguments[0].scrollIntoView();", sampleTextBox);	
		         sampleTextBox.sendKeys(testdata.sample);
		         browser.sleep(1000);
		         createStateCourt.priority.sendKeys(testdata.priority);
		         browser.sleep(1000);
		         createStateCourt.courtSchedule.click();
		         browser.sleep(1000);
		         createStateCourt.clickOnSetHours.click();
		         browser.sleep(1000);
		         createStateCourt.setHours.sendKeys(testdata.setHours);
		         browser.sleep(1000);
		         createStateCourt.Days.click();
		         browser.sleep(1000);
		         createStateCourt.setReviewHours.click();
		         browser.sleep(1000);
		         createStateCourt.clickOnSumit.click();
		         browser.sleep(1000);
		         createStateCourt.turnAroundTime.sendKeys(testdata.turnAroundTime);
		         browser.sleep(1000);
		         createStateCourt.caseTypeSubtype.click();
		         browser.sleep(1000);
		         createStateCourt.ctsRelationships.click();
		         browser.sleep(1000);
		         createStateCourt.caseTypeSubtypeDone.click();
		         browser.sleep(1000);
		         createStateCourt.clickOnCreate.click();
		         browser.sleep(1000);
		         createStateCourt.confirmAddUpdate.click();
		         browser.sleep(1000);
		         expect(element(by.css('.alert-container')).getText()).toEqual('Court details updated successfully');
		         //browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"))), 15000);
		         //browser.sleep(5000);
		        
		      });
	 
  });