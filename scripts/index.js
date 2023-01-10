/*Importación de clases*/
import { Customer } from './Customer.js'
import { Manager } from './Employees/Manager.js';
import { Authentication } from './Authentication.js';
import { CurrentAccount } from './Accounts/CurrentAccount.js';
import { SavingsAccount } from './Accounts/SavingsAccount.js';
import { users } from '../data/users.js';
import { accounts } from '../data/accounts.js';
import { currencies } from '../data/currencies.js'
import { cashMachine } from './cashMachine.js';


const userArray = []
const accountArray = []
const moneyArray = [...currencies]




const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

const depositInput = document.querySelectorAll(".deposit")

const withdrawalInput = document.querySelector("#withdrawal")

const balanceQtyTxt = document.querySelectorAll(".balance-qty")
const balanceValTxt = document.querySelectorAll(".balance-value")

const componentWeb = document.querySelectorAll(".component")

const submitButton1 = document.getElementById("submit1")
const submitButton2 = document.getElementById("submit2")
const submitButton3 = document.getElementById("submit3")

const currencyList = document.getElementById("currencyList")
const currencyTotal = document.getElementById("currencyTotal")

const balanceTxt = document.getElementById("balance")


users.forEach((user, idx)=>{
    userArray.push(
        new Customer(
            user.name,
            user.document
        )
        )
        userArray[idx].asignUsername(user.username)
        userArray[idx].asignPassword(user.password)
})

accounts.forEach((account, idx)=>{
    accountArray.push(
        new SavingsAccount(
            userArray[idx],
            account.number,
            account.agency,
            account.balance
        )
    )
})


console.log(userArray);
console.log(accountArray);
console.log(moneyArray)



submitButton1.addEventListener('click', (event) => {
    event.preventDefault();

    let username = usernameInput.value;
    console.log(username)
    let password = passwordInput.value;
    console.log(password);

    let currentUser = userArray.find(user => user.username = username);
    console.log(currentUser)

    let sentinel = Authentication.login(currentUser, username, password);
    console.log(sentinel)

    if(sentinel){
        depositForm("", "none")
        console.log('Inicio de sesión')

    }else{
        console.log('Usuario y contraseña incorrectos')
    }

})

submitButton2.addEventListener('click', (event) => {
    event.preventDefault();

    
    depositInput.forEach((money, idx) =>{
        moneyArray[idx].quantity += money.value
    })
    
    console.log(moneyArray);

    withdrawalForm("", "none")


})


submitButton3.addEventListener('click', (event) => {
    event.preventDefault();

    

    let withdrawal = withdrawalInput.value

    console.log(withdrawal)
    console.log(moneyArray);

    let results = cashMachine(withdrawal, moneyArray)

    balanceTxt.textContent = withdrawal
    
    results.forEach((result, idx) =>{
        balanceQtyTxt[idx].textContent = result.qty;
        balanceValTxt[idx].textContent = result.val; 
    })
    
    console.log(results)

    currenciesTable("", "none")

     results.forEach((result, idx)=>{
         if(moneyArray[idx].value == result.val)
             moneyArray[idx].quantity -=  result.qty
     })


    const trFooter = document.createElement("tr")

    moneyArray.forEach((money)=>{
        let trBody = document.createElement("tr")

        let tdId = document.createElement("td")
        let txtId = document.createTextNode(money.id)
        tdId.setAttribute('class','body-celda')
        tdId.appendChild(txtId)
        trBody.appendChild(tdId)
        
        let tdDenomination = document.createElement("td")
        let txtDenomination = document.createTextNode(money.denomination)
        tdDenomination.setAttribute('class','body-celda')
        tdDenomination.appendChild(txtDenomination)
        trBody.appendChild(tdDenomination)

        let tdValue = document.createElement("td")
        let txtValue = document.createTextNode(money.value)
        tdValue.setAttribute('class','body-celda')
        tdValue.appendChild(txtValue)
        trBody.appendChild(tdValue)

        let tdQuantity = document.createElement("td")
        let txtQuantity = document.createTextNode(money.quantity)
        tdQuantity.setAttribute('class','body-celda')
        tdQuantity.appendChild(txtQuantity)
        trBody.appendChild(tdQuantity)

        currencyList.appendChild(trBody)
    })

    

    let tdTotal = document.createElement("td")
    let txtTotal= document.createTextNode(sumValues(moneyArray))
    tdTotal.setAttribute('class','footer-celda')
    tdTotal.appendChild(txtTotal)
    trBody.appendChild(tdTotal)

    currencyTotal.appendChild(trFooter)


})

function sumValues(items){
    return items.reduce((total, item)=>{
        total+(item.value*item.quantity)
    }, 0)
}


function currenciesTable(show, noShow){

        let iterator = 0;
    while(iterator<componentWeb.length){
        if(iterator == 3 || iterator == 4){
            componentWeb[iterator].style.display =  show
        }else{
            componentWeb[iterator].style.display =  noShow
        }

        iterator++;
    }
}
function withdrawalForm(show, noShow){

    let iterator = 0;
    while(iterator<componentWeb.length){
        if(iterator == 2){
            componentWeb[iterator].style.display =  show
        }else{
            componentWeb[iterator].style.display =  noShow
        }

        iterator++;
    }
}
function depositForm(show, noShow){


    let iterator = 0;
    while(iterator<componentWeb.length){
        if(iterator == 1){
            componentWeb[iterator].style.display =  show
        }else{
            componentWeb[iterator].style.display =  noShow
        }

        iterator++;
    }
}
function loginForm(show, noShow){

    let iterator = 0;
    while(iterator<componentWeb.length){
        if(iterator == 0){
            componentWeb[iterator].style.display =  show
        }else{
            componentWeb[iterator].style.display =  noShow
        }

        iterator++;
    }
    
}

loginForm("", "none")
