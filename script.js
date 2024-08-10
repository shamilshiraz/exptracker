let expense=document.getElementById("Expense")
let date=document.getElementById("date")
let billAmt=document.getElementById("billAmt")
let etracker=document.getElementById("etracker")
let addBtn=document.getElementById("addBtn")
let expenses=document.getElementById("expenses")
let dates=document.getElementById("dates")
let bills=document.getElementById("bills")
let remove=document.getElementById("remove")



addBtn.addEventListener('click',function(){
    var expensep=document.createElement('p');
    expensep.innerText=expense.value
    expenses.appendChild(expensep)
    expense.value=''

    var dateTdy=document.createElement('p');
    dateTdy.innerText=date.value
    dates.appendChild(dateTdy)
    date.value=''

    var billAmount=document.createElement('p');
    billAmount.innerText=billAmt.value+"$"
    bills.appendChild(billAmount)
    bill.value=''

})

