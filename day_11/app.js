console.log('started');
const question = [
    {
        'question': 'Who is the owner of bitcoin ?',
        'options': ['Satoshi Nakamoto','Elon Musk','Jeff Bezos','Bill Gates']
    }
]

let score =0;

function createOption(option, answer=false){
    const optionHolder = document.createElement('div');
    optionHolder.className = "option";
    const button = document.createElement('button');

    button.addEventListener('click',()=>{
        if(answer){
            if(!button.classList.contains('correct')){
                score++;
            }
            button.classList.add('correct');
        }else{
            button.classList.add('wrong');

        }
    })

    optionHolder.append()
}

question.forEach((item,index)=>{
    console.log(item,index);
    const container = document.createElement('div');
    container.className= "container";
    
    const question = document.createElement('div');
    question.className="question";

    question.innerHTML = `${index+1}. ${item.question}`;
    container.append(question);
    const options = document.createElement('div');
    options.className="options";

    const optionArr = [];
    item.options.forEach((option,index)=>{
        if(index==0){
            optionArr.push(createOption(option,true));
        }else{
            optionArr.push(createOption(option));
        }
    })

    optionArr.forEach((option)=>{
        options.append(option);
    })

    container.append(options);

    document.body.append(container);

})