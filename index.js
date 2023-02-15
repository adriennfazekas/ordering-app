import { menuArray } from "./data.js";


document.addEventListener("click", function () {
    
})



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
                            <button class="increase" id="increase">+</button>
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