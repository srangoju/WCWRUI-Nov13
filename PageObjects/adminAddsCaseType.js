class AddNewCaseType {
    constructor() {

    	//Add New Case Type
        this.clickOnCaseTypes = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[7]/a/i"));
        this.clickOnCreateCaseType= element(by.buttonText('Create Case Type'));
        this.addCaseTypeTitle = element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[2]/div/div/app-type-add-edit/app-search-template[2]/div/div/input"));
        this.clickOnSave = element(by.buttonText('SAVE'));
        this.clickOnYes = element(by.buttonText('Yes'));
        
        // delete a random subtype 
        this.clickOnCaseTypes = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[7]/a/i")); 
        this.casetypeToDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[1]/app-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[3]/div[1]"));
        this.deleteSymbol = element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[1]/app-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[3]/div[2]/div/i/span"));
        this.deleteYes = element(by.buttonText('DELETE'));
       
    }
}
module.exports = new AddNewCaseType();

