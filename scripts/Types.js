import { getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "types") {
            setType(parseInt(event.target.value))
            // window.alert(`User chose metal ${event.target.value}`)
        }
    }
)

export const Types = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listTypes = types.map(type => {
        return `<li>
            <input type="radio" name="types" value="${type.id}" /> ${type.type}
        </li>`
    })

    html += listTypes.join("")
    html += "</ul>"
    return html
}