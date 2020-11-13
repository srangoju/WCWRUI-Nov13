class UpdateCaseType {
    constructor() {

    	//Add New Case Type
        this.clickOnCaseTypes = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[7]/a/i"));
        this.clickOnSearchPanel= element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[1]/app-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[1]/div/span"));
        this.enterSearchItem = element(by.css(".wj-form-control"));
        this.clickOnApply = element(by.linkText("APPLY"));
        this.clickOnAccounts= element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[1]/app-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div"));
        this.addCaseTypeTitle = element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[2]/div/div/app-type-add-edit/app-search-template[2]/div/div/input"));
        this.clickOnSave = element(by.buttonText('SAVE'));
        this.clickOnYes = element(by.buttonText('Yes'));

    }
}
module.exports = new UpdateCaseType();

