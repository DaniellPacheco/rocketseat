import * as Sounds from "./sounds.js";
import state from "./state.js";
import * as Timer from "./timer.js";
import * as Elements from "./elements.js";

export function running() {
    state.isRunning = document.documentElement.classList.toggle('running');
    Timer.countdown();
    Sounds.buttonPress.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    Timer.updateDisplay();
    Sounds.buttonPress.play();
}

export function increment() {
    reset();
    state.minutes = state.minutes + 5;
    if(state.minutes > 99) {
        state.minutes = 99;
    }
    Timer.updateDisplay();
}

export function decrement() {
    reset();
    state.minutes = state.minutes - 5;
    if(state.minutes < 0) {
        state.minutes = 0;
    }
    Timer.updateDisplay();
}

export function treeSong() {

    if(state.countFlorest > 0) {

        Elements.treeSong.classList.remove('activated');
        Sounds.FlorestaSong.pause();

        state.countFlorest = 0;

        return;
    }
    
    // Elements.treeSong.classList.add('activated');
    Elements.changeBtnCss('florest');
    Sounds.runAudio('florest');
    
    state.countFlorest++;
}

export function rainSong() {

    if(state.countRain > 0) {
        Elements.rainSong.classList.remove('activated');
        Sounds.ChuvaSong.pause();

        state.countRain = 0;

        return;
    }
    
    Elements.changeBtnCss('rain');
    Sounds.runAudio('rain');
    
    state.countRain++;

}

export function storeSong() {

    if(state.countStore > 0) {
        Elements.storeSong.classList.remove('activated');
        Sounds.CafeteriaSong.pause();

        state.countStore = 0;

        return;
    }
    
    Elements.changeBtnCss('store');
    Sounds.runAudio('store');
    
    state.countStore++;


}

export function fireSong() {

    if(state.countFire > 0) {
        Elements.fireSong.classList.remove('activated');
        Sounds.LareiraSong.pause();
        
        state.countFire = 0;

        return;
    }
    
    Elements.changeBtnCss('fire');
    Sounds.runAudio('fire');
    
    state.countFire++;


}