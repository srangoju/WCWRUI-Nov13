class AdminUpdateExistingUser {
    constructor() {

    	//AdminUpdateExistingUser
        this.clickOnUsers = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[1]/a/i"));
        this.clickOnAdminRow = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[5]/div[1]/div/img"));
        this.clickOnSuperUserRow = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[6]/div[1]/div/span"));
        this.firstName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[2]/div[1]/div/input"));
        this.clickOnActiveUser = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[1]/div/div/label/input"));
        this.clickOnUpdate = element(by.buttonText("UPDATE"));
        this.clickOnSendMail = element(by.buttonText("Send Mail"));
        this.enterMailID = element(by.xpath("/html/body/ngb-modal-window/div/div/app-users-model-window/div[2]/app-search-template/div/div"));
        this.alertMessage = element(by.xpath("/html/body/app-root/div/div/div[1]/bento-alert/div"));
        this.activeUser = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[1]/div/div/label/input"));
        this.clickOnCancel = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[2]/app-search-template/div[1]/div/button/span"));
        this.editRole = element(by.buttonText("Edit"));
        this.clickOnDone = element(by.buttonText("Done"));
        this.selectAll = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[7]/div[1]/div/div[1]/bento-multiselect-overlay/div/div/div/div[1]/bento-multiselect-list/bento-list-core/div[1]/div/div[1]/i"));
        this.roleName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[2]/div"));
        this.searchRole = element(by.css(".wj-form-control"));
        this.applyButton = element(by.linkText("APPLY"));
    }
}
module.exports = new AdminUpdateExistingUser();