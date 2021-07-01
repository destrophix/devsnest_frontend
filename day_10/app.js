let words = ["amit","sumit","sharique","akshansh","prasanna","abhay","gautam","jitu"];
words = [...words,...words];
let moves = 30;
let matches = 0;
let gameActive = true;


for(let i = 0; i< 16; i++){
    let card = document.createElement('div');
    card.classList.add('flip-card');
    let inner = document.createElement('div');
    inner.classList.add('flip-inner');
    // inner.classList.add('flipped');
    let front = document.createElement('div');
    front.classList.add('front');
    let back = document.createElement('div');
    back.classList.add('back');

    let rand = Math.floor(Math.random()*(16-i));
    
    back.innerHTML = "<h2>"+words[rand]+"</h2>";
    words.splice(rand,1);
    
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    document.getElementById('grid').appendChild(card);
}

let clicked;
let cards = document.getElementsByClassName('flip-card');

for(let card of cards){
    card.addEventListener('click',(e) =>{
        if(!gameActive || card.firstChild.classList.contains('flipped')) return;
        moves--;
        document.querySelector("span").innerHTML = moves;
        if(clicked){
            card.firstChild.classList.add('flipped');
            gameActive = false;
            console.log(card.firstChild.lastChild.innerHTML, clicked.firstChild.lastChild.innerHTML)
            setTimeout(()=>{
                if(card.firstChild.lastChild.innerHTML !== clicked.firstChild.lastChild.innerHTML){
                    card.firstChild.classList.remove('flipped');
                    clicked.firstChild.classList.remove('flipped');
                }else{
                    matches++;
                    card.style.visibility="hidden";
                    clicked.style.visibility="hidden";
                }
                clicked=undefined;
                gameActive = true;
            },500);
        }else{
            clicked = card;
            card.firstChild.classList.add('flipped');
        }
    })
}

setInterval(()=>{
    if(matches==8){
        window.alert('You have won');
    }
},100);