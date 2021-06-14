const timer = document.getElementById('timer');

var hr = 0;
var min = 0;
var sec = 0;
var stopTime = true;

function startTimer(){
    if(stopTime==true){
        stopTime = false;
        timecycle();
    }
}

function stopTimer(){
    if(stopTime==false){
        stopTime = true;
    }
}

function timecycle(){
    if(stopTime==false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        
        sec = sec + 1;
        if(sec===60){
            min = min + 1;
            sec = 0;
        }

        if(min===60){
            hr = hr + 1;
            min = 0;
        }

        if(sec < 10 || sec ==0){
            sec = '0' + sec;
        }

        if(min < 10 || min == 0){
            min = '0' + min;
        }

        if(hr < 10 || hr ==0){
            hr = '0' + hr;
        }

        // console.log(hr + ':' + min + ':' + sec);
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("timecycle()",1000);
    }

}

function resetTimer(){
    timer.innerHTML = '00:00:00';
    stopTime = true;
    hr = 0; min = 0; sec = 0;
}
