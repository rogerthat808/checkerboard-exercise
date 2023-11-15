// Hints

// Create a container for your tiles with the following styles:
// display = "flex"
// flexWrap = "wrap"
// width = "800px"
// height = "800px"
// Each tile should have the following styles:
// width = "12.5%"
// height = "12.5%"


let container = document.createElement('div')
container.style.height = "800px"
container.style.width = "800px"
container.style.backgroundColor = "blue"
container.style.display = "flex"
container.style.flexWrap = "wrap"

document.body.appendChild(container) // container inside the body

for (let i = 0; i < 64; i++) {
    let tile = document.createElement('div')
    tile.style.width = "12.5%"
    tile.style.height = "12.5%"
    if (Math.floor((i / 8) + i) % 2 === 0) {
        let lightness = 100 - (i * 100 / 64);
        tile.style.backgroundColor = `hsl(0, 80%, ${lightness}%)`;
        container.appendChild(tile)
    } else {
        let blueness = 100 - (i * 100 / 64);
        tile.style.backgroundColor = `hsl(240, 50%, ${blueness}%)`
        container.appendChild(tile)
    }
}
