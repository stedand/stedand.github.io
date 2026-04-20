//letter.toString(16).toUpperCase().padStart(2, "0")

const letters = [
  ["Аа", "a"],
  ["Бб", "b"],
  ["Вв", "v"],
  ["Гг", "g"],
  ["Дд", "d"],
  ["Ее", "e"],
  ["Ёё", "ë"],
  ["Жж", "ž"],
  ["Зз", "z"],
  ["Ии", "i"],
  ["Йй", "j"],
  ["Кк", "k"],
  ["Лл", "l"],
  ["Мм", "m"],
  ["Нн", "n"],
  ["Оо", "o"],
  ["Пп", "p"],
  ["Рр", "r"],
  ["Сс", "s"],
  ["Тт", "t"],
  ["Уу", "u"],
  ["Фф", "f"],
  ["Хх", "h"],
  ["Цц", "c"],
  ["Чч", "č"],
  ["Шш", "š"],
  ["Щщ", "šč"],
  ["Ъъ", "\""],
  ["Ыы", "y"],
  ["Ьь", "'"],
  ["Ээ", "è"],
  ["Юю", "ju"],
  ["Яя", "ja"],
]
let lastIndex
let cyrillicLetter
let latinLetter
let showingCyrillic = true
let label = () => showingCyrillic ? "CYRILLIC" : "LATIN"

function getKey(value) {
  return [...letters].find(([key, val]) => val == value)[0]
}

function changeLanguage() {
  showingCyrillic = !showingCyrillic
  updateDisplay()
}

function updateDisplay() {
  document.getElementById("letter").textContent = showingCyrillic ? cyrillicLetter : latinLetter
  document.getElementById("label").textContent = label()
}

function nextLetter() {
  do {
    newIndex = Math.floor(Math.random() * letters.length)
  } while (lastIndex == newIndex)

  cyrillicLetter = letters[newIndex][0]
  latinLetter = letters[newIndex][1]
  showingCyrillic = true
  lastIndex = newIndex
  updateDisplay()
}

nextLetter()