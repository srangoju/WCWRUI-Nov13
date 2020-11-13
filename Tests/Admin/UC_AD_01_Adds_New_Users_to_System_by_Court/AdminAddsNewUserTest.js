var loginDetails = require(protractor.basePath + '/PageObjects/login');
var addNewUser = require(protractor.basePath + '/PageObjects/adminAddsNewUser');
var testdata = require(protractor.basePath + '/Testdata/data.json');
var EC = protractor.ExpectedConditions;


describe('Users', function () {

	loginDetails.loginToWCWR();
	
	it('Admin - It should add adminUser', function(){
		   
		  addNewUser.userIcon.click();
		  browser.sleep(1000);
		  addNewUser.createButton.click();
		  browser.sleep(1000);
		  addNewUser.createAdmin.click();
		  browser.sleep(1000);
	      addNewUser.firstName.sendKeys(testdata.name);
	      browser.sleep(1000);
	      addNewUser.lastName.sendKeys(testdata.lasttname);
	      browser.sleep(1000);
		  addNewUser.enterEmail.sendKeys(testdata.mailid);
		  browser.sleep(1000);
	      addNewUser.loginId.sendKeys(testdata.lognid);
	      browser.sleep(1000);
	      addNewUser.selectCalendar.click();
	      browser.sleep(1000);
	      addNewUser.datePicker.click();
	      browser.sleep(1000);
	     // addNewUser.prevMonth.click();
	     // browser.sleep(3000);
	      addNewUser.createButtontwo.click();
	      browser.sleep(1000);
	      addNewUser.confirmEmailButton.click();
	      browser.sleep(1000);
	      expect(element(by.css('.alert-container')).isDisplayed());
	      browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"))), 8000);
	      
	      
	});
 
	it('Case Manager - It should add casemanager', function(){
		   
		  addNewUser.userIcon.click();
		  browser.sleep(1000);
		  addNewUser.createnewButton.click();
		  browser.sleep(1000);
	      addNewUser.createCasemanager.click();
	      browser.sleep(1000);
	      addNewUser.firstNamebutton.sendKeys(testdata.firstNamebutton);
	      browser.sleep(1000);
	      addNewUser.lastNamebutton.sendKeys(testdata.lastNamebutton);
	      browser.sleep(1000);
		  addNewUser.emailButton.sendKeys(testdata.mailid);
		  browser.sleep(1000);
	      addNewUser.loginIdButton.sendKeys(testdata.loginIdButton);
	      browser.sleep(1000);
	      addNewUser.selectCalendarButton.click();
	      browser.sleep(1000);
	      addNewUser.datePickersafebday.click();
	      browser.sleep(1000);
	      addNewUser.selectrolesButton.click();
	      browser.sleep(1000);
	      addNewUser.searchrole.sendKeys(testdata.searchRole);
	      browser.sleep(1000);
	      addNewUser.selectAll.click();
	      browser.sleep(1000);
	     // addNewUser.selectAll.click();
	      //browser.sleep(3000);
	      addNewUser.doneButton.click();
	      browser.sleep(1000);
	      addNewUser.courtsTab.click();
	      browser.sleep(1000);
	      addNewUser.checkBox.click();
	      browser.sleep(1000);
	      addNewUser.courtDonebutton.click();
	      browser.sleep(1000);
	      addNewUser.superCasetype.click();
	      browser.sleep(1000);
	      addNewUser.selectCheckbox.click();
	      browser.sleep(1000);
	      addNewUser.selectionDone.click();
	      browser.sleep(1000);
	      addNewUser.createcasemanagerButton.click();
	      browser.sleep(1000);
	      addNewUser.confirmpopButton.click();
	      browser.sleep(1000);
	      expect(element(by.css('.alert-container')).isDisplayed());
	      browser.wait(EC.visibilityOf(element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"))), 8000);

	});

 
});
