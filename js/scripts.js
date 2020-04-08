
 var account ;
function NewAccount(name, balance) {
   this.name = name;
   this.balance = balance;
}

NewAccount.prototype.addMoney = function(deposit) {
   console.log(deposit);
   this.balance += deposit;
   return this.balance;
}

NewAccount.prototype.takeMoney = function(withdrawal) {
  this.balance -= withdrawal;
  console.log("===" + this.balance);
  return this.balance;
}

function showTotalBalance(account) {
   var totalBalance = "<h4 class='showBalance'>Name: " + account.name + "<br>Total Balance: " + account.balance +"</h4";
   $("#result").html(totalBalance);
 }

 
 $(document).ready(function(){
   $("form#account").submit(function(event) {
      event.preventDefault();
      var name = $("input#name").val();
      var balance = parseInt($("input#initialDeposit").val());
      console.log(name, balance);
      $("input#name").val('');
      $("input#initialDeposit").val('');
      account = new NewAccount(name, balance);
      showTotalBalance(account);
   });
    $("#money").submit(function(event) {
      event.preventDefault();
  
      var inputtedDeposit = parseInt($("#deposit").val());
      var inputtedWithdrawal = parseInt($("#withdrawal").val());
      $("#deposit").val('');
      $("#withdrawal").val('');
      if((inputtedDeposit !== "" && !isNaN(inputtedDeposit)) &&
      (inputtedWithdrawal !== "" && !isNaN(inputtedWithdrawal))){
         alert("choose one option");
         return;
      }
      
      if(inputtedDeposit !== "" && !isNaN(inputtedDeposit)){
         account.addMoney(inputtedDeposit);
      }else{
       account.takeMoney(inputtedWithdrawal);
      }
      showTotalBalance(account);
       
    });
 });

 