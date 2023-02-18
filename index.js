import { menuArray } from "./data.js";


let checkoutList = document.getElementById("checkout-list")
let checkout = document.getElementById("checkout")
let moduleEl = document.getElementById("module")
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
    else if (e.target.id == "pay-btn") {
        payingOrder()
    }
})

function payingOrder() {
    const formData = new FormData(consentForm)
    console.log(formData)
    const userName = formData.get("userName") 
    moduleEl.style.display = "none"
    checkout.innerHTML = ""

    document.getElementById("finished-order").innerHTML = `
        <div class="thankyou-text">Thanks, ${userName}! Your order  is on its way!</div>
    `
}

function completeOrder() {    
    moduleEl.style.display = "block"
}

function removeFoodItem(index) {
    shoppingList.splice(index, 1)  
    
}


function addOrder(itemId) {
    let targetMenuArray = menuArray[itemId]
    
    checkout.style.display = "block"
    
    /* shopping lista amiben tároljuk az árakat majd összegezzük őket is kiiratjuk */
    shoppingList.push(targetMenuArray)
    let index = shoppingList.lastIndexOf(targetMenuArray)

    checkoutList.innerHTML += `
            <div class="checkout-item" data-remove="${index}" id="checkout-item"> 
                ${targetMenuArray.name}
            </div> 
            <button class="remove-item-btn" data-remove="${index}">remove</button>
            <div class="checkout-price" data-remove="${index} id="checkout-price">    
                $${targetMenuArray.price} 
            </div>
            <div class="line-break"></div>
        `
  
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
getFeedHTML()

function render() {
    document.getElementById("feed").innerHTML = getFeedHTML()
}
render()