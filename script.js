
let container = document.createElement('div')
container.style.height = "800px"
container.style.width = "800px"
container.style.backgroundColor = "blue"
container.style.display = "flex"
container.style.flexWrap = "wrap"

document.body.appendChild(container) // container inside the body

setInterval(() => {
    container.innerHTML = ''
    for (let i = 0; i < 64; i++) {
        let tile = document.createElement('div')
        tile.style.width = "12.5%"
        tile.style.height = "12.5%"
        if (Math.floor((i / 8) + i) % 2 === 0) {
            let lightness = 100 - (i * 100 / 64);
            tile.style.backgroundColor = `hsl(0, 80%, ${lightness}%)`;
            //tile.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            container.appendChild(tile)
        } else {
            let blueness = 100 - (i * 100 / 64);
            tile.style.backgroundColor = `hsl(240, 50%, ${blueness}%)`
            //tile.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            container.appendChild(tile)
        }
    }
}, 2000);
