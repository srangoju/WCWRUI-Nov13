var loginDetails = require(protractor.basePath + '/PageObjects/login');
var deleteCourt = require(protractor.basePath + '/PageObjects/deleteCourt');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var EC = protractor.ExpectedConditions;


describe('Delete Court', function () {
	
	//loginDetails.loginToWCWR();
	
 it('DeleteCourt - It should Delete Court!', function(){
	  
	 deleteCourt.clickOnCourts.click();
	 browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]"))), 8000); 	 
  	 deleteCourt.name.click();
  	 //browser.sleep(4000);
  	 //deleteCourt.searchCourt.clear();
  	 //browser.sleep(3000);
  	 deleteCourt.searchCourt.sendKeys(testdata.courtName);
  	 browser.sleep(1000);
  	 deleteCourt.applyButton.click();
  	 browser.sleep(1000);
  	 deleteCourt.clickOnRow.click();
  	 browser.sleep(1000);
  	 deleteCourt.clickCancel.click();
  	 browser.sleep(1000);
  	 deleteCourt.deleteCourt.click();
  	 browser.sleep(1000);
  	 deleteCourt.clickOnDelete.click();
  	 browser.sleep(1000);
  	 expect(element(by.css('.alert-container')).getText()).toEqual('Court deleted successfully');
     browser.sleep(2000);

 });
 
});
  