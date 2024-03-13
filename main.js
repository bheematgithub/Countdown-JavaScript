
let countDownDate = new Date('2024 11 31 00:00:00').getTime();

let countDown = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('Countdown').innerHTML = `${days}<small>d</small> ${hours}<small>h</small> ${minutes}<small>m</small> ${seconds}<small>s</small>`;
    
    if (distance < 0) {
        clearInterval(countDown);
        document.getElementById('Countdown').innerHTML = 'Expired';
    }
}, 1000);

