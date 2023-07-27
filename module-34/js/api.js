const loadQuote =() =>{
    fetch('https://api.kanye.rest/')
    .then(res =>res.json())
    .then(data => loadQuote2(data))
}

const loadQuote2 = (quote)=> {
    const blockquote = document.getElementById('quote')
    console.log(quote);
    blockquote.innerHTML = quote.quote
}
// loadQuote()