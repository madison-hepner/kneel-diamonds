import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metals") {
            setMetal(parseInt(event.target.value))
            // window.alert(`User chose metal ${event.target.value}`)
        }
    }
    
)


export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listMetals = metals.map(metals => {
        return `<li>
            <input type="radio" name="metals" value="${metals.id}" /> ${metals.metal}
        </li>`
    })

    html += listMetals.join("")
    html += "</ul>"
    return html
}

