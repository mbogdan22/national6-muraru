console.log("JavaScript - Digital Clock");

    const secondsParagraphs = document.querySelectorAll(".seconds p");
        let seconds = 0;

    const minutesParagraphs = document.querySelectorAll(".minutes p");
        let minutes = 0;

    const hoursParagraphs = document.querySelectorAll(".hours p");
        let hours = 0; 

    let intervalId;

    
    document.getElementById("start").addEventListener("click", function (){


        intervalId = setInterval(function() {
    
        renderDigits(seconds, secondsParagraphs);
        renderDigits(minutes, minutesParagraphs);
        renderDigits(hours, hoursParagraphs);
       
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++
        }
        if (minutes === 60) {
            minutes = 0;
            hours++   
        }
        if (hours === 24) {
            hours = 0;
        }
    
        }, 200);
    });

    document.getElementById("stop").addEventListener("click", function() {
        clearInterval(intervalId);
    });

    document.getElementById("reset").addEventListener("click", function() {
        seconds = 0;
        minutes = 0;
        hours = 0;

        secondsParagraphs[0].innerText = 0;
        secondsParagraphs[1].innerText = 0;
        
        minutesParagraphs[0].innerText = 0;
        minutesParagraphs[1].innerText = 0;
      
        hoursParagraphs[0].innerText = 0;
        hoursParagraphs[1].innerText = 0;
        
    });


    function renderDigits(nr, pList) {
        const stringDigits = nr + "";
        const digitList = stringDigits.split('');

        if (digitList.length === 2) {
            pList[0].innerText = digitList[0];
            pList[1].innerText = digitList[1];
        } else {
            pList[0].innerText = 0;
            pList[1].innerText = digitList[0];
        }
    };


    document.getElementById("save").addEventListener("click", function() {
        const setLap = document.createElement("p");
        document.body.appendChild(setLap);
        var seeSeconds = seeDigits(seconds);
        var seeMinutes = seeDigits(minutes);
        var seeHours = seeDigits(hours);
        setLap.innerText = `${seeHours}:${seeMinutes}:${seeSeconds}`
    });

    function seeDigits(digit) {
        if (digit < 10) {
            digit = `0${digit}`;
        }
        return digit;
    };  