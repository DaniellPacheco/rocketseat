export const buttonPress = new Audio('./assets/button-press.wav');
export const kichenTimer = new Audio('./assets/kichen-timer.mp3');
export const FlorestaSong = new Audio('./assets/Floresta.wav');
export const ChuvaSong = new Audio('./assets/Chuva.wav');
export const CafeteriaSong = new Audio('./assets/Cafeteria.wav');
export const LareiraSong = new Audio('./assets/Lareira.wav');

export function runAudio(option) {

    switch (option) {
        case 'florest':
            FlorestaSong.play();
            ChuvaSong.pause();
            CafeteriaSong.pause();
            LareiraSong.pause();
            break;
        case 'rain':
            ChuvaSong.play();
            FlorestaSong.pause();
            CafeteriaSong.pause();
            LareiraSong.pause();
            break;
        case 'store':
            CafeteriaSong.play();
            FlorestaSong.pause();
            ChuvaSong.pause();
            LareiraSong.pause();
            break;
        case 'fire':
            LareiraSong.play();
            FlorestaSong.pause();
            ChuvaSong.pause();
            CafeteriaSong.pause();
            break;
        default:
            break;
    }

}