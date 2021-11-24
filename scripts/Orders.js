import { addCustomOrder, getOrders } from "./database.js"

export const buildOrderListItem = () => {
    const orders = getOrders()
    return `<li>
        Order #${orders.id} was placed on ${orders.timestamp}
    </li>`
}


export const Orders = () => {

    const orders = newOrder()

    let html = "<ul>"

    const listItems1 = orders.map(orders => {
        `<li>
        Order #${orders.id} was placed on ${orders.timestamp}
    </li>`
    }
    )
    

    html += listItems1.join("")
    html += "</ul>"

    return html
}

