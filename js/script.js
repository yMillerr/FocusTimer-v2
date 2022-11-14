import Sounds from './audio.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'
import {
    displaySeconds,
    displayMinutes,
    minutes,
    buttonPause,
    buttonPlay, }from './utils.js'

const sounds = Sounds()

const controls = Controls({
    buttonPause,
    buttonPlay,
    sounds,
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    minutes,
    controls,
    sounds
})

const events = Events({
    timer,
    controls,
    sounds
})





