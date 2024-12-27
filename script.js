'use strict'

const changeButton = document.getElementById('change-button')
const copyButton = document.getElementById('copy-button')
const color = document.querySelector('.color')

const hexSymbols = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]

function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}
function generateHexColor() {

    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hexSymbols[getRandomNumber(hexSymbols.length)]
    }
    return hexColor
}

changeButton.addEventListener('click', () => {
    const randomColor = generateHexColor()
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
    color.style.color = randomColor
})
color.addEventListener('click', () => {
    navigator.clipboard.writeText(color.textContent)
})
