import { useRouter } from 'vue-router'
const router = useRouter()

const startTimer = () => {
    const minutos = 3
    const duration = minutos*60
    const display = document.querySelector('#countdown');
    let timer = duration, minutes, seconds;
    let rel = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        display.textContent = "00:00";
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        if (minutes == 0) {
            $('#countdown').css('color','#e52020')
        }
        if (minutes == 0 && seconds == 0) {
            clearInterval(rel);
            $('#countdown').css('color', 'black')
            router.push({ name: 'fin' })
            
        }
    }, 1000);
}

export default startTimer