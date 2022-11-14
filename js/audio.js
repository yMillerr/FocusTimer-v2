export default function Sounds(){

    const florestAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Floresta.wav")
    const rainAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Chuva.wav")
    const coffeeAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Cafeteria.wav")
    const flameAudio = new Audio("https://github.com/yMillerr/audios/raw/main/Lareira.wav")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    
    function loop(audio){
        audio.loop = true
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    function volume(audio , input , event){
        audio.volume = input.value / 100
        event.classList.add('input-volume')
    }

    return {
        florestAudio,
        rainAudio,
        coffeeAudio,
        flameAudio,
        loop,
        timeEnd,
        volume,
    }
}