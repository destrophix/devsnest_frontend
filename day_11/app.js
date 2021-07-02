console.log('started');
const question = [
    {
        'question': 'Who is the owner of bitcoin ?',
        'options': ['Satoshi Nakamoto','Elon Musk','Jeff Bezos','Bill Gates']
    }
]

let score =0;

function shuffle(arr){
    for(let i = 0; i< arr.length; i++){
        let index = Math.floor(Math.random()* (i+1))
        temp = arr[i]
        arr[i] = arr[index]
        arr[index] = temp
    }
}

function reveal(option){
    const options = option.closest('.options')
    let temp = score;
    options.querySelectorAll('button').forEach((button)=>{
        button.click()
    })
    score = temp;
}

function createOption(option, answer=false){
    const optionHolder = document.createElement('div');
    optionHolder.className = "option";
    const button = document.createElement('button');
    button.innerHTML = option;
    button.addEventListener('click',()=>{
        if(answer){
            if(!button.classList.contains('correct')){
                score++;
            }
            button.classList.add('correct');
        }else{
            button.classList.add('wrong');

        }
        reveal(button);
    })

    optionHolder.append(button)
    return optionHolder
}

shuffle(question)

question.forEach((current,number)=>{
    const container = document.createElement('div');
    container.className= "container";
    
    const question = document.createElement('div');
    question.className="question";

    question.innerHTML = `${number+1}. ${current.question}`;
    container.append(question);

    const options = document.createElement('div');
    options.className="options";

    const optionArr = [];
    current.options.forEach((option,number)=>{
        if(number==0){
            optionArr.push(createOption(option,true));
        }else{
            optionArr.push(createOption(option));
        }
    })

    shuffle(optionArr);

    optionArr.forEach((option)=>{
        options.append(option);
    })

    container.append(options);

    document.body.append(container);

})

const showresult = document.querySelector('.result');
showresult.addEventListener('click',()=>{
    showresult.innerHTML = `${score}/${question.length}`
})