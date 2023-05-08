function countdownDate () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('May 11, 2023 00:00:00').getTime(),
        x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "00"
            document.getElementById("hours").innerHTML = "00" 
            document.getElementById("minutes").innerHTML = "00"
            document.getElementById("seconds").innerHTML = "00"
            document.querySelector(".time-text").innerHTML = "Harap Tunggu!!";
            document.querySelector(".small-heading").innerHTML = "SMAN 01 Talun";
            document.querySelector(".heading").innerHTML = "PRAJA WIRA";
        }
    }, second)
}
countdownDate();