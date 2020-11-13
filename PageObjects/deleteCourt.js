class DeleteCourt{
	
	constructor(){
		this.clickOnCourts = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"));
		this.name = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[1]/div"));
        this.searchCourt = element(by.css(".wj-form-control"));
        this.applyButton = element(by.linkText("APPLY"));
        this.clickOnRow = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
        this.deleteCourt = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[7]/div/i/span"));
        this.clickCancel = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[2]/app-search-template/div[1]/div/button/span"));
        this.clickOnDelete = element(by.buttonText("DELETE"));
        }
}
module.exports = new DeleteCourt();