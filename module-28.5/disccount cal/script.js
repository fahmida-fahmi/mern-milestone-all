document.getElementById('apply').addEventListener('click', function(){
    const getPrice = parseInt(document.getElementById('price').innerText)
    const getInput = document.getElementById('coupon')
    const getInputValue = getInput.value
    const amountPrice = document.getElementById('amount')
    if(getInputValue === 'DISC30'){
       
        amountPrice.innerText = getPrice*0.7
    }
    else if(getInputValue === ''){
        amountPrice.innerText = getPrice
    }
    else{
        alert('Sorry you enter wrong coupon')
        amountPrice.innerText = getPrice

    }
    getInput.value = ''
})
document.getElementById('reset').addEventListener('click',function(){
    const resetPrice = document.getElementById('amount')
    resetPrice.innerText = ''
})