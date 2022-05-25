let pause = document.getElementById('play-pause')
let video = document.getElementById('video')
if(pause.checked){
    video.removeAttribute('autoplay')
}else{
    video.setAttribute('autoplay')
}