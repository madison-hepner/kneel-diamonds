import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"


const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()

// Remember that the function you pass to find() must return true/false


export const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    

    if (types === "earring") {
        totalCost * 2
    }

    if (types === "necklace") {
        totalCost * 4
    }

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
    
}




export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems1 = orders.map(
        (order) => {
            return buildOrderListItem(order)
        }
    )

    html += listItems1.join("")
    html += "</ul>"

    return html
}

