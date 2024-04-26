import state from "./state.js";
import * as Elements from "./elements.js";
import * as Sounds from "./sounds.js";
import * as Actions from "./actions.js";

export function countdown() {

    clearTimeout(state.countdownid);

    if(!state.isRunning) {
        return;
    }

    let minutes = Number(Elements.minutes.textContent);
    let seconds = Number(Elements.seconds.textContent);

    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if(minutes < 0 ) {
        Actions.reset();
        Sounds.kichenTimer.play();
        return;
    }


    updateDisplay(minutes, seconds);
    state.countdownid = setTimeout(() => countdown(), 1000);

}



export function updateDisplay(minutes, seconds) {

    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    Elements.minutes.textContent = String(minutes).padStart(2, '0');
    Elements.seconds.textContent = String(seconds).padStart(2, '0');
}