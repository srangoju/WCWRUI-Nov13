class UpdateCourt{
	
	constructor(){
		this.clickOnCourts = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[3]/a/i"));
		this.name = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[6]/div/div/div[1]/div"));
        this.searchCourt = element(by.css(".wj-form-control"));
        this.applyButton = element(by.linkText("APPLY"));
        this.clickOnRow = element(by.css("div.wj-cells:nth-child(1)"));
        this.allowMarking = element(by.cssContainingText('option', '7 days'));
        this.rule = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[10]/div/div/input"));
        this.clickOnUpdate = element(by.buttonText('UPDATE'));
        this.clickOnADDUpdate = element(by.buttonText('ADD/UPDATE'));
        this.highPriority = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[11]/div/div/label/input"));
        this.precedingZero = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[12]/div/div/label/input"));
        this.locationToolTip = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[14]/div/div/input"));
        this.buttonLebel = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[15]/div/div/input"));
        this.turnAroundTime = element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/app-search-template[18]/div/div/input"));
        this.relationships=element(by.xpath("/html/body/app-root/div/div/div[2]/app-courts/div/div/div[2]/div/app-create-court/div/div/div[1]/div[2]/app-search-template/div/div/div/button"));
        this.checkbox = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[2]/div/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[4]/div/div[1]/div/div/div/bento-checkbox/input"));
        this.clickOnDone = element(by.buttonText('Done'));

        
        
	}
}
module.exports = new UpdateCourt();