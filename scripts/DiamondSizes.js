import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "sizes") {
            setSize(parseInt(event.target.value))
            // window.alert(`User chose size ${event.target.value}`)
        }
    }
)

export const DiamondSizes = () => {
    let sizesHTML = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="sizes" value="${size.id}" /> ${size.carets}
        </li>`
    })

    sizesHTML += listItems.join("")
    sizesHTML += "</ul>"

    return sizesHTML
}

