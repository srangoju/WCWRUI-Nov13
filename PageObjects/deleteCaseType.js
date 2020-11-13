class DeleteCaseType{
	 constructor(){
		 
		    this.casetypeIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[7]/a")); 
	        this.lastPage = element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[1]/app-type-list/div[2]/app-flexgrid-template/div/div/ngb-pagination/ul/li[13]/a"));
	        //this.reasonToDelete = element(by.xpath("/html/body/app-root/div/div/div[2]/app-sub-type/div/div/div[1]/app-sub-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[1]"));
	        this.deleteCaseType = element(by.xpath("/html/body/app-root/div/div/div[2]/app-type/div/div/div[1]/app-type-list/div[2]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[2]/div[2]/div/i/span"));
	        this.deleteCasetypeYes = element(by.buttonText('DELETE'));
	 
	  }

}
module.exports = new DeleteCaseType();