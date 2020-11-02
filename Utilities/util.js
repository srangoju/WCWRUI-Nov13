var testdata = require('../Testdata/data.json');





	this.getElement_TextXpath = function(webElement)
	{	
		return element(by.xpath(webElement)).getText().then(function(text){
			return text;
		});		
	}
	

	// To check whether web element is present or not 
	this.is_element_present = function(webElement)
	{
		return element(by.xpath(webElement)).isPresent();
	}
	
	this.textbox_clearXPath = function(webElement)
	{
		return element(by.xpath(webElement)).clear();
	}
	
	
	this.is_element_present_Css = function(webElement)
	{
		return element(by.css(webElement)).isPresent();
	}

	// To click a web element using xpath
	this.element_ClickXpath = function(webElement)
	{
		element(by.xpath(webElement)).click();
	}

	// To click a web element using css
	this.element_ClickCss = function(webElement)
	{
		element(by.css(webElement)).click();
	}

	

	// To get Text of a web element using css
	this.getElement_TextCss = function(webElement)
	{
		return element(by.css(webElement)).getText();
	}

	// To send Text to a web element using xpath
	this.sendKey_usingXpath = function(webElement,string)
	{
		element(by.xpath(webElement)).sendKeys(string);
	}

	// To send Text to a web element using css
	this.sendKey_usingCss = function(webElement,string)
	{
		element(by.css(webElement)).sendKeys(string);
	}

	// To select by text from a dropdown using xpath
	this.select_usingXpath = function(webElement,string)
	{
		//var SelectWrapper  = require('select-wrapper');
		var myselect=new SelectWrapper(by.xpath(webElement));
		myselect.selectByText(string);
	}

	// To select by text from a dropdown using css
	this.select_usingCss = function(webElement,string)
	{
		//var SelectWrapper  = require('select-wrapper');
		var myselect=new SelectWrapper(by.css(webElement));
		myselect.selectByText(string);
	}
	
	//To get list of elements
	this.getCountByTagName = function(webElement,tag){
		var count = element(by.xpath(webElement)).all(by.tagName(tag));
		return count;
	}
	
	//Check Visibility of Page Object Elements using Jasmine Expect returns true/false
	this.checkVisibility =  function(webElement)
	{
		try
		{
			expect(this.is_element_present(webElement)).toBe(true);		
		}
		catch(err)
		{
			console.log('Failed while validating visibility of webelement: ',webElement);
			console.log(err.message);
		}
	}
	
	this.waitForElementusingXPath = function(webElement)
	{
		return browser.wait(function(){		
			return element(by.xpath(webElement)).isPresent();
		},4000);
	}
	

	this.waitForElementusingCss = function(webElement)
	{
		return browser.wait(function(){		
			return element(by.css(webElement)).isPresent();
		},4000);
	}
	
		
	// NOT IN USE
	this.sampleFunction = function(webElement,caseNumber)
	{
		return browser.wait(function(){
			element(by.xpath(webElement)).getText().then(function(firstRowValue){
				return expect(firstRowValue).toEqual(caseNumber);
			});	
		},5000);
	
};
module.exports = new util();