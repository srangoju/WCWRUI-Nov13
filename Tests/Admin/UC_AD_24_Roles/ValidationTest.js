var XLSX = require('xlsx');
var workbook=XLSX.readFile('TestData.xlsx');

var sheet1 = workbook.SheetNames[0];
var roleName1 = 'A2';
var roleName2 = 'A3';
var roleName3 = 'A4';
var roleName4 = 'A5';

var description1 = 'B2';
var description2 = 'B3';
var description3 = 'B4';
var description4 = 'B5';
 
/* Get worksheet */
var worksheet = workbook.Sheets[sheet1];
 
/* Find desired cell */
var roleNameCell2 = worksheet[roleName1];
var roleNameCell3 = worksheet[roleName2];
var roleNameCell4 = worksheet[roleName3];
var roleNameCell5 = worksheet[roleName4];

var descriptionCell2 = worksheet[description1];
var descriptionCell3 = worksheet[description2];
var descriptionCell4 = worksheet[description3];
var descriptionCell5 = worksheet[description4];
 
/* Get the value */
var roleName_value2 = roleNameCell2.v;
var roleName_value3 = roleNameCell3.v;
var roleName_value4 = roleNameCell4.v;
var roleName_value5 = roleNameCell5.v;

var description_value2 = descriptionCell2.v;
var description_value3 = descriptionCell3.v;
var description_value4 = descriptionCell4.v;
var description_value5 = descriptionCell5.v;


var loginDetails = require(protractor.basePath + '/PageObjects/login');
var validations = require(protractor.basePath + '/PageObjects/validations');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;

describe('Validations for Add New Role', function () {
	

	 beforeEach(()=> { 
		    validations.clickOnUserRole.click();
		    browser.sleep(1000);
		    validations.createAssociation.click();
		    browser.sleep(1000);
	 });
  
it('ValidationsTest - It should create new Role', function(){
	  
	  //browser.ignoreSynchronization = false;	  
	  validations.roleName.sendKeys(roleName_value2);
	  browser.sleep(1000);
	  validations.description.sendKeys(description_value2);
	  browser.sleep(1000);
	  validations.canFillCasesInfo.click();
	  browser.sleep(1000);
	  validations.canRejectCases.click();
	  browser.sleep(1000);
	  validations.add.click();
	  browser.sleep(1000);
      expect(element(by.css('.alert-container')).getText()).toEqual('Role name or description cannot start or end with special characters');
      browser.sleep(2000);
      
  	
  });
  
  it('ValidationsTest - It should not create new role as role name is more thatn 20 characters', function(){
	  
	  //browser.ignoreSynchronization = false;	  
	  validations.roleName.sendKeys(roleName_value3);
	  browser.sleep(1000);
	  validations.description.sendKeys(description_value3);
	  browser.sleep(1000);	
	  validations.canFillCasesInfo.click();
	  browser.sleep(1000);
	  validations.canRejectCases.click();
	  browser.sleep(1000);
	  validations.add.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Role name or description cannot start or end with special characters');
	  browser.sleep(2000);	
  });
  
 it('ValidationsTest - It should not create new role as the description is more thatn 1000 characters', function(){
	  
	  //browser.ignoreSynchronization = false;	  
	  validations.roleName.sendKeys(roleName_value4);
	  browser.sleep(1000);
	  validations.description.sendKeys(description_value4);
	  browser.sleep(1000);	
	  validations.canFillCasesInfo.click();
	  browser.sleep(1000);
	  validations.canRejectCases.click();
	  browser.sleep(1000);
	  validations.add.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Some Error occurred while creating/updating the Role');
	  browser.sleep(2000);

  }); 
 
 it('ValidationsTest - It should not create new role as the role name contains special characters', function(){
	  
	  //browser.ignoreSynchronization = false;	  
	  validations.roleName.sendKeys(roleName_value5);
	  browser.sleep(1000);
	  validations.description.sendKeys(description_value5);
	  browser.sleep(1000);
	  validations.canFillCasesInfo.click();
	  browser.sleep(1000);
	  validations.canRejectCases.click();
	  browser.sleep(1000);
	  validations.add.click();
	  browser.sleep(1000);
	  expect(element(by.css('.alert-container')).getText()).toEqual('Role name or description cannot start or end with special characters');
      //browser.sleep(3000);
	
  });
 
 afterEach(() =>{ 
     //validations.acquireDocuments.click();
     //browser.sleep(3000);
     

	 });
 
 });
