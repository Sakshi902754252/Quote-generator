const quotes = [{
    quote :"In three words, I can sum up everything I've learned about life: it goes on." ,
    writer: '- Robert Frost'
},{
    quote :"The greatest glory in living lies not in never falling, but in rising every time we fall." ,
    writer: '- Nelson Mandela'
},{
    quote :"The future belongs to those who believe in the beauty of their dreams." ,
    writer: '- Eleanor Roosevelt'
},{
    quote :"The best way to predict the future is to create it." ,
    writer: '- Peter Drucker'
},{
    quote :"Happiness is not something ready-made. It comes from your own actions.",
    writer: ' - Dalai Lama'
},{
    quote :"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
    writer: ' - Albert Einstein'
},{
    quote :"Success is not final, failure is not fatal: It is the courage to continue that counts." ,
    writer: ' - Winston Churchill'
},]

let btn = document.querySelector("#qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener('click',function(){
    let random =Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;

})
