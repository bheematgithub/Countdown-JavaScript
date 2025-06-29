function getNextNewYear() {
    const now = new Date();
    let year = now.getFullYear();
    // If today is Jan 1, show message
    if (now.getMonth() === 0 && now.getDate() === 1) {
        return null;
    }
    // If today is after Jan 1, set countdown to next year's Jan 1
    if (now.getMonth() > 0 || (now.getMonth() === 0 && now.getDate() > 1)) {
        year += 1;
    }
    return new Date(`${year}-01-01T00:00:00`);
}

function updateCountdown() {
    const countdownElem = document.getElementById('Countdown');
    const headingElem = document.getElementById('heading');
    const nextNewYear = getNextNewYear();

    if (!nextNewYear) {
        headingElem.innerHTML = '';
        countdownElem.innerHTML = '<span style="color:green;">🎉 Happy New Year! 🎉</span>';
        return;
    } else {
        headingElem.innerHTML = 'New Year Starts In';
    }

    const now = new Date();
    const distance = nextNewYear.getTime() - now.getTime();

    if (distance <= 0) {
        headingElem.innerHTML = '';
        countdownElem.innerHTML = '<span style="color:green;">🎉 Happy New Year! 🎉</span>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElem.innerHTML = `${days}<small>d</small> ${hours}<small>h</small> ${minutes}<small>m</small> ${seconds}<small>s</small>`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

