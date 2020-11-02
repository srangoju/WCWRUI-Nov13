var AllureReporter = require('jasmine-allure-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
//var Spec = require('./Spec.json');
var Spec = require(__dirname + '/Spec.json');
var reporter;

exports.config = {
	
	framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
 /*	multiCapabilities : [
		{
		'browserName' : 'safari',
		'shardTestFiles': false,
		'maxInstances' :1,
		
	 }
		],*/
	 capabilities: {
    	  'browserName': 'firefox',
    	  'shardTestFiles': false,
    	  'maxInstances': 1,
    	},
    	/*specs : [
    		Spec.addNewRole,
    		Spec.validations,
    		Spec.updateRole,
    		Spec.createCourt,
    		Spec.updateCourt,
    		Spec.deleteCourt,
    		Spec.rejectReason,
    		Spec.updateExistingUser,
    		Spec.addCaseType,
    		Spec.updateCaseType,
    		Spec.addCaseSubType,
    		Spec.addKnos,
    		Spec.updateKnos,
    		Spec.deleteKnos,
    		Spec.deleteUser
    		],*/
        	specs : [
        		
        		Spec.updateRole
        			       			
        		],
    allScriptsTimeout : 1000000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace : true,
        isVerbose : true,
        
       // print: function () {}
    },
       
      onPrepare : function() {
    	  
    	jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots',
            takeScreenShotsOnlyForFailedSpecs: false,
            preserveDirectory: false,
            docTitle: 'WCWRUI Test Results',
            //cssOverrideFile: 'css/style.css'
            showTotalDurationIn: "header",                  
            totalDurationFormat: "hms"
         }).getJasmine2Reporter());
    	
		protractor.basePath = __dirname;
		browser.ignoreSynchronization = true;	

		browser.driver.manage().window().maximize();
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(
				new Jasmine2HtmlReporter({
				savePath: 'target/screenshots'
		}));
	/*	jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});*/
	}
}