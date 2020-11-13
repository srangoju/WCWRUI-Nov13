class DeleteCaseSubType{
	 constructor(){
		 
		    this.subIcon= element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[8]/a")); 
	        this.subtypeToDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
	        this.deleteSymbol = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]/div/i/span"));
	        this.deleteYes = element(by.buttonText('DELETE'));
	        
	 
	  }

}
module.exports = new DeleteCaseSubType();