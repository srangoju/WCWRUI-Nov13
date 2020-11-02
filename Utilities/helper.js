var Helper = function (){
	
	//Wait for the element to present
	this.waitForElementPresent = function (Webelement){
		return browser.wait(() => (Webelement.isPresent()), 60000)
	}
	//Wait for the element to displayed
	this.wairForElementDisplayed = function (element){
		return browser.wait(() => (element.isDisplayed()), 60000)
	}
	
	//hardcoded wait
	this.sleep = function(time){
	return browser.sleep(time)
	}
	
	this.waitForElementVisibility = function(element){
		let EC = ExpectedConditions;
		let condition = EC.visibilityOf(element);
		browser.wait(condition, 30000)
	}
}
module.export = new Helper();