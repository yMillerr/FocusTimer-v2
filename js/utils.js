const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')

const inputForest = document.querySelector('.florest .slider')
const inputRain = document.querySelector('.rain .slider')
const inputcoffee = document.querySelector('.coffee .slider')
const inputFlames = document.querySelector('.flames .slider')

const buttonSun = document.querySelector('.sun')
const buttonMoon = document.querySelector('.moon')

const addMinutes = document.querySelector('.add-minutes')
const removeMinutes = document.querySelector('.remove-minutes')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const florest = document.querySelector('.florest')
const rain = document.querySelector('.rain')
const coffee = document.querySelector('.coffee')
const flames = document.querySelector('.flames')

const body = document.querySelector('body')

let minutes = displayMinutes.textContent

export {
    minutes,

    florest,
    coffee,
    rain,
    flames,

    addMinutes,
    removeMinutes,

    buttonPlay,
    buttonStop,
    buttonPause,

    displaySeconds,
    displayMinutes,

    buttonMoon,
    buttonSun,

    body,

    inputForest,
    inputFlames,
    inputRain,
    inputcoffee
}