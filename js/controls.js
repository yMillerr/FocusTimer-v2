export default function Controls({
    sounds,
    buttonPlay,
    buttonPause,

}){
    let itsPlaying = false
    
    function activeAudioAndToggleColor(audio , event){

        let notPlayingCondition = audio.paused && itsPlaying === false 
        let playingCondition = event.classList.contains('color') && itsPlaying === true
        let volumeCondition = event.classList.contains('input-volume')

                if(volumeCondition){
                    return
                } else {
                    if(notPlayingCondition){
                        audio.play()
                        event.classList.add('color')
                        itsPlaying = true
            
                    } else if(playingCondition) {
                        audio.pause()
                        event.classList.remove('color')
                        itsPlaying = false
                    } 
                }

            sounds.loop(audio)
    }
    
    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function toggle(btn1 , btn2){
        btn1.classList.toggle('hide')
        btn2.classList.toggle('hide')
    }

    return { 
        activeAudioAndToggleColor,
        reset,
        toggle,
    }
}