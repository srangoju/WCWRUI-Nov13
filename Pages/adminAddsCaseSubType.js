class AddCaseSubType {
    constructor() {

    	//Add New Case SubType
        this.newCaseSubtype =element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[8]/a"));
        this.writeSubtype = element(by.buttonText('Create Case Subtype'));
        this.subtypeName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[2]/div/div/app-sub-type-add-edit/app-search-template[2]/div/div/input"));
        this.clickSave = element(by.buttonText('SAVE'));
        this.clickConfirm = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[3]/div/button[1]"))
        this.confirmOnSave = element(by.buttonText('YES'));
        
       //add Subtype without entering subtype name 
        this.addSubType =element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[8]/a"));
        this.createSubType = element(by.buttonText('Create Case Subtype'));
        this.saveButton = element(by.buttonText('SAVE'));
        
        // delete a random subtype 
        this.subIcon= element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[8]/a")); 
        this.subtypeToDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
        this.deleteSymbol = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]/div/i/span"));
        this.deleteYes = element(by.buttonText('DELETE'));

       
    }
}
module.exports = new AddCaseSubType();

