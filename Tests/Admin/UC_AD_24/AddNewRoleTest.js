var loginDetails = require(protractor.basePath + '/Pages/login');
var addNewRole = require(protractor.basePath + '/Pages/addNewRole');
var testdata = require(protractor.basePath + '/Testdata/data.json');
const EC = protractor.ExpectedConditions;
var role = testdata.roleName;

describe('User Roles', function () {
	

  loginDetails.loginToWCWR();
	
  it('AddNewRoleTest - It should Add New Role!', function(){
	  
	  //browser.ignoreSynchronization = false;
	  
	  addNewRole.clickOnUserRole.click();
	  //browser.sleep(2000);
	  addNewRole.createAssociation.click();
	  //browser.sleep(2000);
	  addNewRole.roleName.sendKeys(testdata.roleName);
	  //browser.sleep(2000);
	  addNewRole.description.sendKeys(testdata.description);
	  //browser.sleep(2000);
	  addNewRole.acquireDocuments.click();
	  //browser.sleep(2000);
	  addNewRole.add.click();
	  //browser.sleep(1000);
	  
	  var messageElement = element(by.css('.alert-container', role));
	  var messageText = messageElement.getText();
	  expect(messageText).toEqual('The following ROLE : New Role has been successfully Created');

	  
	  
  });
  
 
});
