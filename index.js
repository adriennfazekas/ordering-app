import { menuArray } from "./data.js";


document.addEventListener("click", function (e) {

    if (e.target.dataset.increase) {
        addOrdering(e.target.dataset.increase)
    } 
})

function addOrdering(itemId) {
    let targetMenuArray = menuArray[itemId]    
    let checkoutList = document.getElementById("checkout-list")
    let checkout = document.getElementById("checkout")

    checkout.style.display = "block"
    
    checkoutList.innerHTML += `
            <li class="checkout-list" 
                id="checkout-list"> ${targetMenuArray.name} $${targetMenuArray.price}  
            </li>
         `
         render()
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