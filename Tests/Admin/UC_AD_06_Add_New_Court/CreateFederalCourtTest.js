var loginDetails = require(protractor.basePath + '/PageObjects/login');
var createFederalCourt = require(protractor.basePath + '/PageObjects/createCourt');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('Add Court', function () {
	
	//loginDetails.loginToWCWR();
		 
	 it('createFederalCourtTest - IT should create new Federal court', function() {
		
		  createFederalCourt.clickOnCourts.click();
		  browser.sleep(1000);
		  createFederalCourt.createCourt.click();
		  browser.sleep(1000);
		  //browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[2]/div[1]/div/div[1]/div[2]/select"))), 8000);
		  createFederalCourt.newCourtRadioButon.click();
		  browser.sleep(1000);
		  createFederalCourt.selectFederalCourt.click();
		  browser.sleep(1000);
		  createFederalCourt.selectFederalState.click();
		  browser.sleep(1000);
		  createFederalCourt.federalCourtName.sendKeys(testdata.federalCourtName);
		  browser.sleep(1000);
		  createFederalCourt.federalCourtDisplayName.sendKeys(testdata.federalCourtDisplayName);
		  browser.sleep(1000);
		  createFederalCourt.courtLink.sendKeys(testdata.courtLink);
		  browser.sleep(1000);
		  createFederalCourt.nextCaseNumber.sendKeys(testdata.nextCaseNumberFederal);
		  browser.sleep(1000);
		  createFederalCourt.docketFormat.sendKeys(testdata.docketFormatFederal);
		  browser.sleep(1000);
		  var sampleTextBox2 = createFederalCourt.sample;
		         browser.executeScript("arguments[0].scrollIntoView();", sampleTextBox2);	
		         sampleTextBox2.sendKeys(testdata.sampleFederal);
		         createFederalCourt.priority.sendKeys(testdata.priorityFederal);
		         browser.sleep(1000);
		         createFederalCourt.courtSchedule.click();
		         browser.sleep(1000);
		         createFederalCourt.clickOnSetHours.click();
		         browser.sleep(1000);
		         createFederalCourt.setHours.sendKeys(testdata.setHoursFederal);
		         browser.sleep(1000);
		         createFederalCourt.Days.click();
		         browser.sleep(1000);
		         createFederalCourt.setReviewHours.click();
		         browser.sleep(1000);
		         createFederalCourt.clickOnSumit.click();
		         browser.sleep(1000);
		         createFederalCourt.turnAroundTime.sendKeys(testdata.turnAroundTimeFederal);
		         browser.sleep(1000);
		         createFederalCourt.clickOnCreate.click();
		         browser.sleep(1000);
		         createFederalCourt.confirmAddUpdate.click();
		         browser.sleep(1000);
		         expect(element(by.css('.alert-container')).getText()).toEqual('Court details updated successfully');
		         //browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"))), 15000);
		        
		      });

  });