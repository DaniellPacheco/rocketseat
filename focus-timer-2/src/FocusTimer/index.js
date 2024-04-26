import * as Events from './events.js';
import state from './state.js';
import { updateDisplay } from './timer.js';

export function start(minutes, seconds) {
    
    state.minutes = minutes;
    state.seconds = seconds;

    updateDisplay();

    Events.registerControls();
    Events.registerControlsSongs();

}