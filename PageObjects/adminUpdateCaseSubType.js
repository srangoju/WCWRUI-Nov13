class UpdateCaseSubType {
    constructor() {

    	this.casesubtypessIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[8]/a")); 
        this.lastofPage = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/ngb-pagination/ul/li[13]/a"));
        this.casesubtypeUpdate = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
        this.casesubtypeEnter = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[2]/div/div/app-sub-type-add-edit/app-search-template[2]/div/div/input"));
        this.saveUpdate = element(by.buttonText('SAVE'));
        this.confirmSaveupdate = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[3]/div/button[1]")); 

    }
}
module.exports = new UpdateCaseSubType();

