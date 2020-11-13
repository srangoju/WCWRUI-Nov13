class DeleteUser{
	 constructor(){
		 
	 // delete user (active /inactive)
		 
		this.usersTab = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[1]/a/i"));
		this.findUser = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[3]/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[2]/div[1]/div[7]/div[1]/div/span")); 
		this.clickUser = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[1]/div/div/label/input"));
		//this.checkBox = element(by.linkText('Active User'));
		this.updateUser = element(by.buttonText('UPDATE'));
		this.mailConfirm = element(by.buttonText('Send Mail'));
	 
	  }

}
module.exports = new DeleteUser();

