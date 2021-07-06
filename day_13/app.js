console.log('started');

const input = document.querySelector('input')
const btn = document.querySelector('button')

async function getData(tag){
    
    let res = await fetch(`https://api.quotable.io/random?tags=${tag}`)
    let data = await res.json()
    return data;
    
}
btn.addEventListener('click',async ()=>{
    let response = await getData(input.value);
    let quote = response.content;
    let author = response.author;
    document.querySelector('blockquote').innerHTML = quote + "  " + `<div>${author}</div>`;
})
