class Knos {
    constructor() {

    	this.clickOnknos = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[9]/a/i"));
        this.createRelationship = element(by.buttonText('Create Relationship'));
        this.caseType = element(by.cssContainingText('option', 'CaseType123'));
        this.caseSubType = element(by.cssContainingText('option', 'subtype'));
        this.cancel = element(by.buttonText("Cancel"));
        this.update = element(by.buttonText("UPDATE"));
        this.add= element(by.buttonText("ADD")); 
        this.validationMessage = element(by.css('.alert-container'));
        //this.relationships=element(by.buttonText('Case Type/Subtype Relationships'));
        this.relationships=element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template/div/div/div/button"));
        this.clickOnCaseType = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[2]/div/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[2]/div"));
        this.clickOnCaseTypeForDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[2]/div"));
        this.searchCaseType = element(by.xpath("/html/body/ngb-modal-window/div[2]/div/div[3]/div/div[1]/div/div/div/input"));
        this.searchCaseTypeForDelete = element(by.xpath("/html/body/div/div/div[3]/div/div[1]/div/div/div/input"));
        this.applyButton = element(by.linkText("APPLY"));
        this.verifyCaseType = element(by.css(".wj-state-focused > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)"));
        this.div = element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]"));
        this.deleteRelationship = element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[5]/div/i/span"));
        this.clickOnDelete = element(by.buttonText("DELETE"));
        this.validationMessage = element(by.xpath("/html/body/app-root/div/div/div[1]/bento-alert/div"));
        this.cancelAlert = element(by.xpath("/html/body/ngb-modal-window/div[1]/div/app-modal-window/div[3]/div/button[2]"));
        this.clickAnyRow = element(by.xpath("/html/body/app-root/div/div/div[2]/app-knos/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
        this.caseTypeToUpdate = element(by.cssContainingText('option', 'Motor Vehicle Tort'));
              
    }
}
module.exports = new Knos();
