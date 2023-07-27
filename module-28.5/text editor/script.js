const text = document.getElementById('text')
const bold = document.getElementById('bold')

bold.addEventListener('click', function(){
  // bold.style.backgroundColor = 'purple'
  // bold.style.border = '1px solid cyan'

  text.style.fontWeight = 'bold'
})
const italic = document.getElementById('italic')
.addEventListener('click', function(){
  text.style.fontStyle = 'italic'
  // italic.style.border = '1px solid cyan'
  // italic.style.backgroundColor = 'purple'
})
const underline = document.getElementById('underline')
underline.addEventListener('click', function(){
  text.style.textDecoration = 'underline'
  // underline.style.backgroundColor = 'purple'
  // underline.style.border = '1px solid cyan'
})
const alignLeft =  document.getElementById('align-left')
alignLeft.addEventListener('click', function(){
  text.style.textAlign = 'left'
  // alignLeft.style.backgroundColor = 'purple'
  // alignLeft.style.border = '1px solid cyan'
})
const alignCenter= document.getElementById('align-center')
alignCenter.addEventListener('click', function(){
  text.style.textAlign = 'center'
  // alignCenter.style.backgroundColor = 'purple'
  // alignCenter.style.border = '1px solid cyan'
})
const alignRight = document.getElementById('align-right')
alignRight.addEventListener('click', function(){
  text.style.textAlign = 'right'
  // alignRight.style.backgroundColor = 'purple'
  // alignRight.style.border = '1px solid cyan'
})
const alignJustify= document.getElementById('align-justify')
alignJustify.addEventListener('click', function(){
  text.style.textAlign = 'justify'
  // alignJustify.style.backgroundColor = 'purple'
  // alignJustify.style.border = '1px solid cyan'
})
const number = document.getElementById('number')
document.getElementById('number').addEventListener('change', function(){
  text.style.fontSize = number.value +'px'
  // number.style.backgroundColor = 'purple'
  // number.style.border = '1px solid cyan'
})

const color = document.getElementById('color')
color.addEventListener('change', function(){
  // color.style.backgroundColor = 'purple'
  // color.style.border = '1px solid cyan'
  
  text.style.color = color.value
})
