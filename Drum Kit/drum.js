function playSound(s) {
    const audio = document.querySelector(`audio[data-key="${s.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${s.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(function(){

    }, 0.07)
}

function removeTransition(s){
    if (s.propertyName !== 'transform') return;
    
        this.classList.remove('playing');
      
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

