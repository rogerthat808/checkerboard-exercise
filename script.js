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
document.body.appendChild(container)

// function that creates a random colors


for (let i = 0; i < 64; i++) {
    let tile = document.createElement('div')
    tile.style.width = "12.5%"
    tile.style.height = "12.5%"
    if (Math.floor((i / 8) + i) % 2 === 0) {
        tile.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        container.appendChild(tile)
    } else {
        tile.style.backgroundColor = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
        container.appendChild(tile)
    }
}