//number.toString(16).toUpperCase().padStart(2, "0")

let number
let showingHex = true
let label = () => showingHex ? "HEX" : "DECIMAL"

function changeBase() {
  showingHex = !showingHex
  updateDisplay()
}

function updateDisplay() {
  document.getElementById("number").textContent = showingHex ? number.toString(16).toUpperCase().padStart(2, "0") : number
  document.getElementById("label").textContent = label()
}

function nextNumber() {
  number = Math.floor(Math.random() * 256)
  showingHex = true
  updateDisplay()
}

nextNumber()