console.log('linked successfully to app.js');
let booked_seats = 0;
let remaining_seats = 36;
let box = document.querySelector('.box');
for(let i = 0; i<36; i++ ){
    box.innerHTML += '<div class="seat"></div>'
}

let seats = document.querySelectorAll('.seat');
let booked = document.getElementById('booked');
let left = document.getElementById('left');
seats.forEach((item)=>{
    let i = item.classList;
    item.addEventListener('mouseover',function(){
        item.style.backgroundColor = "rgba(165, 42, 42, 0.608)";
    })
    item.addEventListener('mouseout',function(){
        item.style.backgroundColor = "";
    })
    item.addEventListener('click',function(){
        if(i.contains('booked')){
            i.remove('booked');
            booked_seats -= 1;
            remaining_seats += 1;
        }
        else{
            i.add('booked');
            booked_seats += 1;
            remaining_seats -= 1;
        }
        booked.innerHTML = `Booked Seats : ${booked_seats}`;
        left.innerHTML = `Remaining Seats : ${remaining_seats}`;
    })
})