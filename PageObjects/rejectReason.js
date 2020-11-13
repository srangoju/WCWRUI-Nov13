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
        
        //upate Reject Reason
         this.rejectReasonIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[6]/a")); 
         this.lastofPage = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/ngb-pagination/ul/li[13]/a"));
         this.rejectUpdate = element(by.xpath("/html/body/app-root/div/div/div[2]/app-reject-reasons/div/div/div[1]/app-reject-reason-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
         this.reasonEnter = element(by.xpath("/html/body/app-root/div/div/div[2]/app-reject-reasons/div/div/div[2]/div/div/app-reject-reason-add-edit/app-search-template[2]/div/div/input"));
         this.savereasonUpdate = element(by.buttonText('SAVE'));
         this.confirmreasonupdate = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[3]/div/button[1]"));
        
        // delete a random reject reason
        this.reasonIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[6]/a")); 
        this.reasonToDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-reject-reasons/div/div/div[1]/app-reject-reason-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
        this.deleteReasonSymbol = element(by.xpath("/html/body/app-root/div/div/div[2]/app-reject-reasons/div/div/div[1]/app-reject-reason-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]/div/i/span"));
        this.deleteReasonYes = element(by.buttonText('DELETE'));
        
    }
}
module.exports = new RejectReason();