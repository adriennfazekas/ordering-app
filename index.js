import { menuArray } from "./data.js";

console.log(menuArray)

function getFeedHTML() {
    let feedHTML = ""
        menuArray.forEach( function(item) {
            feedHTML += `
                    <div class="menu">
                        <ul class="menu-item" id="item-one">
                            <li class="emoji">${item.emoji}</li>
                            <li>${item.name}</li>
                            <li>${item.ingredients}</li>
                            <li>${item.price}</li>
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