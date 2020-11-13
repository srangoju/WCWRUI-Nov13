class CreateCourt {
    constructor() {

    	//Add New Court
        this.clickOnCourts = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"));
        this.createCourt = element(by.buttonText('Create Court'));
        this.newCourtRadioButon= element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div/app-search-template/div/div/div[1]/label/div[1]/label"));
        this.selectCourtType = element(by.cssContainingText('option', 'STATE'));
        this.selectFederalCourt = element(by.cssContainingText('option', 'FEDERAL'));
        this.selectState = element(by.cssContainingText('option', 'Alaska'));
        this.selectFederalState = element(by.cssContainingText('option', 'California'));
        this.courtName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[2]/div/div/input"));
        this.federalCourtName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[2]/div/div/input"));
        this.federalCourtDisplayName= element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[3]/div/div/input"));
        this.courtDisplayName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[3]/div/div/input"));
        this.courtLink = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[4]/div/div/input"));
        this.nextCaseNumber = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[5]/div/div/input"));
        this.docketFormat = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[6]/div/div/input"));
        this.sample = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[7]/div/div/input"));
        this.priority = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[8]/div/div/input"));
        this.courtSchedule = element(by.buttonText('Court Schedule'));
        this.clickOnSetHours = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div[2]/app-hours-schedule/div[1]/button[2]/i"));
        this.setHours = element(by.xpath("//*[@id='hours0']"));
        this.Days = element(by.buttonText('Days'));
        this.setReviewHours = element(by.xpath("//*[@id='113:00']"));
        this.clickOnSumit = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div[2]/app-days-schedule/div[2]/button"));
        this.turnAroundTime = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template[17]/div/div/input"));
        this.caseTypeSubtype = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/div[2]/app-search-template/div/div/div/button"));
        this.ctsRelationships = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[2]/div/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[4]/div/div[1]/div/div/div/bento-checkbox/input"));
        this.caseTypeSubtypeDone = element(by.buttonText('Done'));
        this.confirmAddUpdate = element(by.buttonText('ADD/UPDATE'));
        this.clickOnCreate = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[2]/app-search-template/div[2]/div/button/span"));
        this.name = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[1]/div"));
        this.searchCourt = element(by.css(".wj-form-control"));
        this.applyButton = element(by.linkText("APPLY"));
                       
    }
}
module.exports = new CreateCourt();