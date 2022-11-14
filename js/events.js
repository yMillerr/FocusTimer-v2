import { 
    buttonPlay,
    buttonStop,
    buttonPause,
    addMinutes,
    removeMinutes,
    florest,
    flames,
    rain,
    coffee,
    inputForest,
    inputFlames,
    inputRain,
    inputcoffee,
    buttonMoon,
    buttonSun,
    body } from "./utils.js"

export default function Events ({timer,controls,sounds}){
    
    buttonPlay.addEventListener('click', () => {    
        timer.countDown()
        controls.toggle(buttonPause , buttonPlay)
    })

    buttonPause.addEventListener('click' , () => {
        controls.toggle(buttonPause , buttonPlay)
        timer.stop()
    })
    
    buttonStop.addEventListener('click' ,() =>{
        timer.reset()
        controls.reset()
    })
    
    addMinutes.addEventListener('click' , () => {
        timer.addFiveMinutes()
    })
    
    removeMinutes.addEventListener('click' , () => {
        timer.removeFiveMinutes()
    })
    
    florest.addEventListener('click' ,() =>{
        controls.activeAudioAndToggleColor(sounds.florestAudio , florest)
        florest.classList.remove('input-volume')
    })
    
    rain.addEventListener('click' ,() => {
        controls.activeAudioAndToggleColor(sounds.rainAudio , rain)
        rain.classList.remove('input-volume')
    })
    
    coffee.addEventListener('click' ,() => {
        controls.activeAudioAndToggleColor(sounds.coffeeAudio , coffee)
        coffee.classList.remove('input-volume')
    })
    
    flames.addEventListener('click' , () => {
        controls.activeAudioAndToggleColor(sounds.flameAudio , flames)
        flames.classList.remove('input-volume')
    })

    inputForest.addEventListener('input' , () => {
        sounds.volume(sounds.florestAudio , inputForest , florest)
    })

    inputFlames.addEventListener('input' , () => {
        sounds.volume(sounds.flameAudio , inputFlames , flames)
    })

    inputRain.addEventListener('input' , () => {
        sounds.volume(sounds.rainAudio , inputRain , rain)
    })

    inputcoffee.addEventListener('input' , () => {
        sounds.volume(sounds.coffeeAudio , inputcoffee , coffee)
    })

    buttonMoon.addEventListener('click', function(){
        body.classList.remove('dark')
        controls.toggle(buttonMoon , buttonSun)
    })
    
    buttonSun.addEventListener('click' , function(){
        controls.toggle(buttonMoon , buttonSun)
        body.classList.add('dark')  
    })


}