import { menuArray } from "./data.js";


let checkoutList = document.getElementById("checkout-list")
let checkout = document.getElementById("checkout")
let shoppingList = []


document.addEventListener("click", function (e) {

    if (e.target.dataset.increase) {
        addOrdering(e.target.dataset.increase)
    }
    else if (e.target.dataset.remove) {
        removeFoodItem(e.target.dataset.remove)
    } 
    else if (e.target.id == "purchase-btn") {
        completeOrder()
    }
})

function completeOrder() {
    const moduleEl = document.getElementById("module")
    moduleEl.style.display = "block"
}

function removeFoodItem(index) {

}


function addOrdering(itemId) {
    let targetMenuArray = menuArray[itemId]
    
    checkout.style.display = "block"
    
    checkoutList.innerHTML += `
            <div class="checkout-item" id="checkout-item"> 
                ${targetMenuArray.name}
            </div> 
            <button class="remove-item-btn" data-remove="${targetMenuArray.id}">remove</button>
            <div class="checkout-price" id="checkout-price">    
                $${targetMenuArray.price} 
            </div>
            <div class="line-break"></div>
        `
    /* shopping lista amiben tároljuk az árakat majd összegezzük őket is kiiratjuk */
    shoppingList.push(targetMenuArray.price)
    
    if (shoppingList) {
        let sum = 0
        shoppingList.forEach( function (price) {
                sum += price
        })
        document.getElementById("checkout-totel-price").innerHTML = `
            <h2 class="checkout-totel-price" id="checkout-totel-price">
                Total price: $${sum} 
            </h2>
        `
        }
    render()
}

/* let sum = 0;
shoppingCartArray.forEach(item => sum += item.price);
*/

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