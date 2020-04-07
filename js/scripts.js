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
   $("form#account").submit(function(event) {
      event.preventDefault();
      var name = $("input#name").val();
      var balance = $("input#initialDeposit").val();
      console.log(name, balance);
      $("input#name").val("");
      $("input#initialDeposit").val("");

      //var newAccount = new NewAccount(inputtedName,inputtedInitialDeposit);
      
      // newAccount.addMoney(inputtedDeposit)
      return account = new NewAccount(name, balance);
   });
   //  $(".money").submit(function(event) {
   //    event.preventDefault();
   //    var inputtedDeposit = $("input#deposit").val();
   //    var inputtedWithdrawal = $("input#withdrawal").val();
       
   //  });
 });