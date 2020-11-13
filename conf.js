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
    	specs : [
    	    Spec.addUser, 
    	    Spec.updateExistingUser,
    	    Spec.deleteUser,
    	    Spec.createStateCourt,
    	    Spec.createFederalCourt,
    		Spec.updateCourt,
    		Spec.deleteCourt,
    		Spec.addNewRole,
    		Spec.validations,
    		Spec.updateRole,
    		Spec.rejectReason,
 			Spec.addKnos,
    		Spec.updateKnos,
    		Spec.deleteKnos,	
    		Spec.addCaseType,
    		Spec.updateCaseType,
			Spec.deleteCaseType,
    		Spec.addCaseSubType,
    		Spec.updateCaseSubType,
    		Spec.deleteCaseSubType

    		],
        	
    		//specs : [Spec.deleteCourt],
    		        	         	 
    allScriptsTimeout : 400000,
    jasmineNodeOpts: {
    	onComplete: null,
        showColors: true,
        defaultTimeoutInterval: 400000,
        includeStackTrace : true,
        isVerbose : true
        //silent:true,
        
        //print: function () {}
    },
       
      onPrepare : function() {
    	  
    /*	jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Reports/screenshots',
            takeScreenShotsOnlyForFailedSpecs: false,
            preserveDirectory: false,
            docTitle: 'WCWRUI Test Results',
            //cssOverrideFile: 'css/style.css'
            showTotalDurationIn: "header",                  
            totalDurationFormat: "hms"
         }).getJasmine2Reporter());*/
    	  
   /*var AllureReporter = require('jasmine-allure-reporter');
  		jasmine.getEnv().addReporter(
  				new Jasmine2HtmlReporter({
  				savePath: 'target/screenshots'
  		}));*/
    	
		protractor.basePath = __dirname;
		browser.ignoreSynchronization = true;	
		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport:{
				resultsDir: 'allure-results'
			}
		}));
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});
	}
};