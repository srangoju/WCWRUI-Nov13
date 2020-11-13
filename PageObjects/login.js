var loginDetails = require(protractor.basePath + '/PageObjects/login');
var validations = require(protractor.basePath + '/PageObjects/validations');
var testdata = require(protractor.basePath + '/TestData/data.json');
var EC = protractor.ExpectedConditions;

class LoginDetails {
    constructor() {
    	
            //LoginDetails:
        	this.userName = element(by.id('username'));
        	this.password = element(by.id('password'));
        	this.signonLink = element(by.linkText('Sign On'));
            
            this.loginToWCWR = function() {	
            	
            	browser.ignoreSynchronization = true;	
            	browser.get(testdata.environment);
            	browser.wait(EC.visibilityOf(element(by.id("signOnButton"))), 6000);
            	browser.sleep(6000);
                browser.driver.manage().window().maximize();
                browser.sleep(2000);
                element(by.id('username')).sendKeys(testdata.Username);
                browser.sleep(2000);
                element(by.id('password')).sendKeys(testdata.Password);
            	browser.sleep(2000);
                //browser.wait(EC.visibilityOf(element(by.linkText('Sign On'))), 6000);
            	element(by.linkText('Sign On')).click();
            	//browser.sleep(30000);
            	browser.wait(EC.visibilityOf(element(by.css(".center-content > div:nth-child(1) > img:nth-child(1)"))), 30000);
            	
            	}

    }
    
    
}

module.exports = new LoginDetails();

