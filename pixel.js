document.addEventListener('DOMContentLoaded', function() {
  createGrid(),
  createColors()
})

// Create the grid
function createGrid() {
  let placement = document.querySelector('.container')
  for (let i = 0; i < 3750; i++) {
    let row = document.createElement('div')
    row.classList.add('box')
    let pixelID = row.id=(`pixel${[i]}`)
    placement.appendChild(row)
  }
}

function createColors() {
  let place = document.querySelector('.colors')
  const colors = ['black', 'white', 'red', '#FF5310', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan']
  for (let c = 0; c < colors.length; c++) {
    let currentColor = colors[c]
    let rowColor = document.createElement('div')
    rowColor.classList.add('colorBox')
    rowColor.style.backgroundColor = currentColor
    let pixelID2 = rowColor.id=(`color${[c]}`)
    place.appendChild(rowColor)


  } let listen = document.querySelector('.container')
    listen.addEventListener('click', function() {
      console.log(event.target.id)
    })
    let listen2 = document.querySelector('.colors')
    listen2.addEventListener('click', function() {
      console.log(event.target.id)
    })
}
// let colors = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// for (let c = 0; 0 < colors.length; c++) {
//   let currentColor = colors[c]
// }
