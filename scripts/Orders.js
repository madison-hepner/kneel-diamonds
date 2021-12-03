import { getOrders } from "./database.js"

 export const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}



export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems1 = orders.map(buildOrderListItem)


    html += listItems1.join("")
    html += "</ul>"

    return html
}

