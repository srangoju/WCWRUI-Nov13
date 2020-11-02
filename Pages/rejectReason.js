class RejectReason {
    constructor() {

    	//Add Reject reason
        this.addRejectReason =element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[6]/a/i"));
        this.createReason = element(by.buttonText('Create Reason'));
		this.addReason = element(by.css(".width-250-px"));
        this.clickOnSave = element(by.buttonText('SAVE'));
        this.clickOnYes = element(by.buttonText('Yes'));
        
        //add Reject reason without reason name 
        this.addRejectReason =element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[6]/a"));
        this.createReason = element(by.buttonText('Create Reason'));
        this.clickOnSave = element(by.buttonText('SAVE'));
        
        // delete a random reject reason
        this.reasonIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[6]/a")); 
        this.reasonToDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-reject-reasons/div/div/div[1]/app-reject-reason-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
        this.deleteReasonSymbol = element(by.xpath("/html/body/app-root/div/div/div[2]/app-reject-reasons/div/div/div[1]/app-reject-reason-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]/div/i/span"));
        this.deleteReasonYes = element(by.buttonText('DELETE'));
        
    }
}
module.exports = new RejectReason();