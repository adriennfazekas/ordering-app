import { menuArray } from "./data.js";


let checkoutList = document.getElementById("checkout-list")
let checkout = document.getElementById("checkout")
let modalEl = document.getElementById("modal")
const consentForm = document.getElementById("consent-form")
let shoppingList = []

document.addEventListener("click", function (e) {
    if (e.target.dataset.increase) {
        addOrder(e.target.dataset.increase)
    }
    else if (e.target.dataset.remove) {
        removeFoodItem(e.target.dataset.remove)
    } 
    else if (e.target.id == "purchase-btn") {
        completeOrder()
    }
})

modalEl.addEventListener("submit", function(e) {
    e.preventDefault()
    const formData = new FormData(consentForm)
    const userName = formData.get("user-name") 
    modalEl.style.display = "none"
    checkout.innerHTML = ""

    document.getElementById("finished-order").innerHTML = `
        <div class="thankyou-text">Thanks, ${userName}! Your order  is on its way!</div>
    `
})

function completeOrder() {
    modalEl.style.display = "block"   

    let buttons = document.getElementsByClassName("increase")
    let removeButtons = document.getElementsByClassName("remove-item-btn")
    for(let i = 0; i<removeButtons.length; i++) {
        buttons[i].disabled = true
        removeButtons[i].disabled = true
    }
}

function removeFoodItem(index) {    
    shoppingList.splice(index, 1)    
    
    getPurchaseFeed()
}


function addOrder(itemId) {
    let targetMenuArray = menuArray[itemId]    
    
    /* shopping lista amiben tároljuk az árakat majd összegezzük őket is kiiratjuk */
    shoppingList.push(targetMenuArray)
    let index = shoppingList.lastIndexOf(targetMenuArray)
    
    getPurchaseFeed()
}

function getPurchaseFeed() {
    checkout.style.display = "block"
    checkoutList.innerHTML = ""

    shoppingList.forEach( (item,index) => {
        checkoutList.innerHTML += `
                <div class="checkout-item" id="checkout-item"> 
                    ${item.name}
                </div> 
                <button class="remove-item-btn" data-remove="${index}">remove</button>
                <div class="checkout-price" id="checkout-price">    
                    $${item.price} 
                </div>
                <div class="line-break"></div>
            `
    })        
  
    if (shoppingList) {
        let sum = 0
        shoppingList.forEach( function (item) {
                sum += item.price
        })
        document.getElementById("checkout-totel-price").innerHTML = `
            <h2 class="checkout-totel-price" id="checkout-totel-price">
                Total price: $${sum} 
            </h2>
        `
        }
}

function getFeedHTML() {
    let feedHTML = ""
        menuArray.forEach( function(item) {
            feedHTML += `
                    <div class="container">
                        <ul class="menu-item" id="item-one">
                            <li class="emoji">${item.emoji}</li>
                            <li class="food">${item.name}</li>
                            <li class="ingredients">${item.ingredients}</li>
                            <li class="price"> $${item.price}</li>
                            <hr class="solid">
                            <button class="increase" data-increase="${item.id}" id="increase">+</button>
                        </ul>
                    </div>
                `                            
        })
        return feedHTML
}

function render() {
    document.getElementById("feed").innerHTML = getFeedHTML()    
}
render()
