class Validations {
    constructor() {

    	//Add New Role
        this.clickOnUserRole = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[2]/a"));
        this.createAssociation = element(by.buttonText('Create Association'));
        this.roleName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[1]/div/div/input"));
        this.description = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[2]/div/div/input"));
        this.acquireDocuments = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[5]/div/div/label/input"));
        this.canFillCasesInfo =element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[6]/div/div/label/input")); 
        this.canRejectCases = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[9]/div/div/label/input"));
        this.add = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[2]/app-search-template/div[2]/div/button/span"));
        this.cancel = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[2]/app-search-template/div[1]/div/button"));
    }
}
module.exports = new Validations();