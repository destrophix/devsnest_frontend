console.log('success');
let content = document.querySelector('.content');
for(let i = 0; i< 12; i++){
    content.innerHTML += '<div class="card"></div>';
}

let card = document.querySelector('.card');
card.addEventListener('click',function(){
    console.log('clicked');
    card.style.backgroundImage = "url('images/image006.png')";
})