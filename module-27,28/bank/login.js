document.getElementById('btn').addEventListener('click',function(){
  const passFiled = document.getElementById('password')
  const pass= passFiled.value 
  const emailField = document.getElementById('email')
  const email = emailField.value
  if(email === 'ami@gmail.com' && pass === 'asd'){
    window.location.href = 'bank.html'
  }
  else{
    alert('Invalid user')
  }
})