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
        tile.style.backgroundColor = "red"
        container.appendChild(tile)
    } else {
        tile.style.backgroundColor = "black"
        container.appendChild(tile)
    }
}


// for (let i = 1; i <= 8; i++) {
//     let row = document.createElement('div')
//     row.style.width = "12.5%"
//     row.style.height = "12.5%"
//     for (let e = 1; e <= 8; e++) {
//         let column = document.createElement('div')

//         if (i % 2 === 0) {
//             if (e % 2 === 0) {
//                 row.style.backgroundColor = "black"
//             }
//         } 
//         if (i % 2 !== 0) {
//             if (e % 2 !== 0 ) {
//                 row.style.backgroundColor = "red"
//             }
//         }

//         row.append(column)
//     }
//     container.append(row)
// }