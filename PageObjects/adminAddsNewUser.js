class AdminAddsNewUser {
    constructor() {
    	//Admin User
    	this.userIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[1]/a/i"));
        this.createButton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[1]/div[1]/button"));
        this.createAdmin = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[1]/div[2]/button[1]"));
        this.firstName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[2]/div[1]/div/input"));
        this.lastName = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[2]/div[2]/div/input"));
        this.enterEmail = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[3]/div/div/input"));
        this.loginId = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[4]/div/div/input"));
        this.selectCalendar = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[5]/div/div/form/div/div/button/i"));
      //this.prevMonth = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[5]/div/div/form/div/div/ngb-datepicker/div[1]/ngb-datepicker-navigation/button[1]/span"));
        this.datePicker = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[5]/div/div/form/div/div/ngb-datepicker/div[2]/div/ngb-datepicker-month-view/div[2]/div[5]/div"));
        this.createButtontwo = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[2]/app-search-template/div[2]/div/button/span"));
        this.confirmEmailButton = element(by.buttonText('Send Mail'));
        
        
        //Case Manager
        //this.usersIcon = element(by.xpath("/html/body/app-root/div/div/div[1]/ul[1]/li[1]/a/i"));
        this.createnewButton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[1]/div[1]/button"));
        this.createCasemanager =element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[1]/div[1]/div[2]/button[2]"));
        this.firstNamebutton =element (by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[2]/div[1]/div/input"));
        this.lastNamebutton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[2]/div[2]/div/input"));
        this.emailButton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[3]/div/div/input"));
        this.loginIdButton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[4]/div/div/input"));
        this.selectCalendarButton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[5]/div/div/form/div/div/button/i"));
        this.datePickersafebday = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[5]/div/div/form/div/div/ngb-datepicker/div[2]/div/ngb-datepicker-month-view/div[2]/div[5]/div"));
        this.selectrolesButton = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[6]/div[1]/div/div[1]/bento-multiselect-overlay/div/div/button"));
        this.searchrole = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[6]/div[1]/div/div[1]/bento-multiselect-overlay/div/div/div/div[1]/bento-multiselect-list/div/input"));
        this.selectAll = element (by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[6]/div[1]/div/div[1]/bento-multiselect-overlay/div/div/div/div[1]/bento-multiselect-list/bento-list-core/div[1]/div/div[2]/i"));
        this.doneButton = element (by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[6]/div[1]/div/div[1]/bento-multiselect-overlay/div/div/div/div[1]/div/button"));
        this.courtsTab = element(by.xpath ("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[6]/div[2]/div/div/button"));
        this.checkBox = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[2]/div/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[8]/div/div/div/div/div/bento-checkbox/input"));
        this.courtDonebutton = element (by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[3]/div/button[1]"));
        this.superCasetype = element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[1]/app-search-template[7]/div[2]/div/div/button"));
        this.selectCheckbox = element (by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[2]/div/app-flexgrid-template/div/div/wj-flex-grid/div[1]/div[8]/div/div/div/div/div/bento-checkbox/input"));
        this.selectionDone = element(by.xpath("/html/body/ngb-modal-window/div/div/app-modal-window/div[3]/div/button[1]"));
        this.createcasemanagerButton =element(by.xpath("/html/body/app-root/div/div/div[2]/app-users/div/div/div[2]/div/app-create-user/div[2]/app-search-template/div[2]/div/button"));
        this.confirmpopButton = element(by.buttonText('Send Mail'));
        
    }
}
module.exports = new AdminAddsNewUser();