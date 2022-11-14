export default function Timer({
    displayMinutes,
    displaySeconds,
    minutes,
    controls,
    sounds

}){
    let timerTimeOut
    
    function countDown(){
        timerTimeOut = setTimeout(function(){

             let minutes = displayMinutes.textContent 
             let seconds = displaySeconds.textContent 
             let isFinished = minutes <= 0 && seconds <= 0
     
             if(isFinished){
                 reset()
                 sounds.timeEnd()
                 return
             }
     
             if(seconds == 0){
                 seconds = 60
                 --minutes
             }
     
             displayUpdate(minutes , seconds - 1)
     
             countDown()
     
        } , 1000)
    }

    function displayUpdate(minutes , seconds){
        displayMinutes.textContent = String(minutes).padStart(2 , '0')
        displaySeconds.textContent = String(seconds).padStart(2 , '0')
    }

    function removeFiveMinutes(){

        let Newminutes = Number(displayMinutes.textContent) - 5

        if(minutes < 0){
            minutes = 25
            
            alert('Não pode diminuir mais minutos!')
        }

        displayUpdate(Newminutes , 0)
    }

    function addFiveMinutes() { 

        let Newminutes = Number(displayMinutes.textContent) + 5
        
        if(minutes > 90){
            minutes = 90
            alert('Você alcançou o limite de minutos')
        }
    
        displayUpdate(Newminutes , 0)
    }

    function reset(){
        displayUpdate(minutes , 0)
        controls.reset()
        stop()
    }

    function stop(){
        clearTimeout(timerTimeOut)
    }

    return {
        reset,
        displayUpdate,
        countDown,
        stop,
        addFiveMinutes,
        removeFiveMinutes

    }
}