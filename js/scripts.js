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

function showTotalBalance(account) {
   var totalBalance = "<h2 class='showBalance'>Name: " + account.name + "<br>Total Balance: " + account.balance +"</h2";
   $("#result").html(totalBalance);
 }
 var account ;
 
 $(document).ready(function(){
   $("form#account").submit(function(event) {
      event.preventDefault();
      var name = $("input#name").val();
      var balance = $("input#initialDeposit").val();
      console.log(name, balance);
      $("input#name").val('');
      $("input#initialDeposit").val('');
      account = new NewAccount(name, balance);

      //var newAccount() = new NewAccount(inputtedName,inputtedInitialDeposit);
      
      // newAccount.addMoney(inputtedDeposit)
      //return account = new NewAccount(name, balance);
   });
    $(".money").submit(function(event) {
      event.preventDefault();
      var inputtedDeposit = $("input#deposit").val();
      var inputtedWithdrawal = $("input#withdrawal").val();
      if(inputtedDeposit !== '' && inputtedWithdrawal!=='' ){
         alert("You are not allow to do both transaction togater.")
      }
      $("input#deposit").val('');
      $("input#withdrawal").val('');
      account.addMoney(inputtedDeposit);
      account.takeMoney(inputtedWithdrawal);
      showTotalBalance(account);
       
    });
 });