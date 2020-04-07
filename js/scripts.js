function NewAccount(name, balance) {
   this.name = name;
   this.balance = balance;
}

NewAccount.prototype.addMoney = function(deposit) {
   account.balance = deposit;
}

NewAccount.prototype.takeMoney = function(withdrawal) {
   account.balance = withdrawal;
}
 
 
 $(document).ready(function(){
   $("form#new-contact").submit(function(event) {
      event.preventDefault();
      var inputtedName = $("input#name").val();
      var inputtedInitialDeposit = $("input#initialDeposit").val();
      var newAccount = new NewAccount(inputtedName,inputtedInitialDeposit);
      console.log(inputtedName, inputtedInitialDeposit)
       
   });
    $(".money").submit(function(event) {
      event.preventDefault();
      var inputtedDeposit = $("input#deposit").val();
      var inputtedWithdrawal = $("input#withdrawal").val();
       
    });
 });