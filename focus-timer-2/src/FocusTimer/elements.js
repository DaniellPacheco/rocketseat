export const controls = document.getElementById('controls');

export const controlsSongs = document.getElementById('controls-songs');

export const minutes = document.getElementById('minutes');

export const seconds = document.getElementById('seconds');

export const treeSong = document.getElementById('treeSong');

export const rainSong = document.getElementById('rainSong');

export const storeSong = document.getElementById('storeSong');

export const fireSong = document.getElementById('fireSong');

export function changeBtnCss(option) {

    switch (option) {
        case 'florest':
            treeSong.classList.add('activated');
            rainSong.classList.remove('activated');
            storeSong.classList.remove('activated');
            fireSong.classList.remove('activated');
            break;
        case 'rain':
            treeSong.classList.remove('activated');
            rainSong.classList.add('activated');
            storeSong.classList.remove('activated');
            fireSong.classList.remove('activated');
            break;
        case 'store':
            treeSong.classList.remove('activated');
            rainSong.classList.remove('activated');
            storeSong.classList.add('activated');
            fireSong.classList.remove('activated');
            break;
        case 'fire':
            treeSong.classList.remove('activated');
            rainSong.classList.remove('activated');
            storeSong.classList.remove('activated');
            fireSong.classList.add('activated');
            break;
        default:
            treeSong.classList.remove('activated');
            rainSong.classList.remove('activated');
            storeSong.classList.remove('activated');
            fireSong.classList.remove('activated');
            break;
    }



}