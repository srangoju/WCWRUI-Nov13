var loginDetails = require(protractor.basePath + '/Pages/login');
var createCourt = require(protractor.basePath + '/Pages/createCourt');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('Add Court', function () {
	
	//loginDetails.loginToWCWR();
	
	it('CreateCourtTest - IT should create new State court', function() {	  
		  createCourt.clickOnCourts.click(); 
		  createCourt.createCourt.click();
		  createCourt.selectCourtType.click();
		  createCourt.selectState.click();
		  createCourt.courtName.sendKeys(testdata.courtName);
		  createCourt.courtDisplayName.sendKeys(testdata.courtDisplayName);
		  createCourt.courtLink.sendKeys(testdata.courtLink);
		  createCourt.nextCaseNumber.sendKeys(testdata.nextCaseNumber);
		  createCourt.docketFormat.sendKeys(testdata.docketFormat);		  
		  var sampleTextBox = createCourt.sample;
		         browser.executeScript("arguments[0].scrollIntoView();", sampleTextBox);	
		         sampleTextBox.sendKeys(testdata.sample);
		         createCourt.priority.sendKeys(testdata.priority);
		         createCourt.courtSchedule.click();
		         createCourt.clickOnSetHours.click();
		         createCourt.setHours.sendKeys(testdata.setHours);
		         createCourt.Days.click();
		         createCourt.setReviewHours.click();
		         createCourt.clickOnSumit.click();
		         createCourt.turnAroundTime.sendKeys(testdata.turnAroundTime);
		         createCourt.caseTypeSubtype.click();
		         createCourt.ctsRelationships.click();
		         createCourt.caseTypeSubtypeDone.click();
		         createCourt.clickOnCreate.click();
		         createCourt.confirmAddUpdate.click();
		         browser.sleep(1000);
		         expect(element(by.css('.alert-container')).getText()).toEqual('Court details updated successfully');
		         browser.sleep(4000);
		        
		      });
	 
	 it('CreateCourtTest - IT should create new Federal court', function() {	  
		  createCourt.clickOnCourts.click();
		  createCourt.createCourt.click();
		  browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[2]/div[1]/div/div[1]/div[2]/select"))), 8000);
		  createCourt.selectFederalCourt.click();
		  createCourt.selectFederalState.click();
		  createCourt.federalCourtName.sendKeys(testdata.federalCourtName);
		  createCourt.federalCourtDisplayName.sendKeys(testdata.federalCourtDisplayName);
		  createCourt.courtLink.sendKeys(testdata.courtLink);
		  createCourt.nextCaseNumber.sendKeys(testdata.nextCaseNumberFederal);
		  createCourt.docketFormat.sendKeys(testdata.docketFormatFederal);		  
		  var sampleTextBox2 = createCourt.sample;
		         browser.executeScript("arguments[0].scrollIntoView();", sampleTextBox2);	
		         sampleTextBox2.sendKeys(testdata.sampleFederal);
		         createCourt.priority.sendKeys(testdata.priorityFederal);
		         createCourt.courtSchedule.click();
		         createCourt.clickOnSetHours.click();
		         createCourt.setHours.sendKeys(testdata.setHoursFederal);
		         createCourt.Days.click();
		         createCourt.setReviewHours.click();
		         createCourt.clickOnSumit.click();
		         createCourt.turnAroundTime.sendKeys(testdata.turnAroundTimeFederal);
		         createCourt.clickOnCreate.click();
		         //createCourt.confirmAddUpdate.click();
		         browser.sleep(1000);
		         expect(element(by.css('.alert-container')).getText()).toEqual('Court details updated successfully');
		         //browser.sleep(4000);
		        
		      });

  });