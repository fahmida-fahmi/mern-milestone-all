document.getElementById("btn-deposit").addEventListener("click", function () {
    const deposit = document.getElementById("deposit");
    const depositAmt = parseInt(deposit.value);
    if (deposit.value == "") {
        alert("please enter a valid amount");
    } else {
        let pre_deposit = document.getElementById("pre-deposit");
        let preDepositText = parseInt(pre_deposit.innerText);

        const totalDeposit = depositAmt + preDepositText;
        pre_deposit.innerText = totalDeposit;

        let pre_balance = document.getElementById("pre-balance");
        let preBalanceText = parseInt(pre_balance.innerText);

        const totalBalance = depositAmt + preBalanceText;
        pre_balance.innerText = totalBalance;
        deposit.value = "";
    }
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdraw = document.getElementById("withdraw");
    const withdrawAmt = parseInt(withdraw.value);

    if (withdraw.value == "") {
        alert("please enter a valid amount");
    } 
    else {
        let pre_balanceAfterWithdraw = document.getElementById("pre-balance");
        const preBalanceAfterWithdrawText = parseInt(
            pre_balanceAfterWithdraw.innerText
        );
        if (withdrawAmt <= preBalanceAfterWithdrawText) {
            let pre_withdraw = document.getElementById("pre-withdraw");
            let preWithdrawText = parseInt(pre_withdraw.innerText);

            const totalWithdraw = withdrawAmt + preWithdrawText;
            pre_withdraw.innerText = totalWithdraw;

            const totalBalance = preBalanceAfterWithdrawText - withdrawAmt;
            pre_balanceAfterWithdraw.innerText = totalBalance;
        } 
        else {
            alert("sorry you have not enough money to withdraw.");
        }
        withdraw.value=''

    }
});
