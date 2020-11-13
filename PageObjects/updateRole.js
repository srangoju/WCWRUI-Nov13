class UpdateRole{
	
	constructor(){
		this.clickOnUserRole = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[2]/a"));
		this.clickOnRow = element(by.css("div.wj-row:nth-child(3) > div:nth-child(1)"));
		this.roleName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[1]/div/div/input"));
        this.description = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[2]/div/div/input"));
        this.acquireDocuments = element(by.xpath("/html/body/app-root/div/div/div[2]/app-roles/div/div/div[2]/div/div[1]/app-search-template[5]/div/div/label/input"));          
        this.clickOnUpdate = element(by.buttonText("UPDATE"));
        this.validationMessage = element(by.css('.alert-container'));
       
        
	}
}
module.exports = new UpdateRole();