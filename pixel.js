// Wrapper
document.addEventListener('DOMContentLoaded', function() {
  createGrid()
  createColors()
})
// Color selected - global
selectColor = 'blue'

// Create the grid
function createGrid() {
  let placement = document.querySelector('.container')
  for (let i = 0; i < 3750; i++) {
    let row = document.createElement('div')
    row.classList.add('box')
    let pixelID = row.id=(`pixel${[i]}`)
    placement.appendChild(row)
  }

// Paint
  var listenToGrid = document.querySelector('.container')
  listenToGrid.addEventListener('mousedown', function() {
  event.target.style.backgroundColor = selectColor

  })
}

// Create the palette
function createColors() {
  let place = document.querySelector('.colors')
  const colors = ['black', 'white', 'red', '#FF5310', 'yellow', 'green', 'navy', 'lightblue', 'indigo', 'violet']
  for (let c = 0; c < colors.length; c++) {
    let currentColor = colors[c]
    let rowColor = document.createElement('div')
    rowColor.classList.add('colorBox')
    rowColor.style.backgroundColor = currentColor
    rowColor.id=(`${colors[c]}`)
    place.appendChild(rowColor)
  }

  //Pick a color
  var listenToColors = document.querySelector('.colors')
  listenToColors.addEventListener('click', function() {
  selectColor = event.target.id
  })
}
