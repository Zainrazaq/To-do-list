let input = document.getElementById('input')
let text = document.getElementById('textContainer')

function addTask() {
    if (input.value === '') {
    alert('you have to write')
}else{
   let li = document.createElement('li')
    li.innerHTML = input.value
    text.appendChild(li)
let span = document.createElement('span')
span.innerHTML = '\u00d7'
li.appendChild(span)
}
input.value=''
setLocalStorage()
}
text.addEventListener('click',function (e) {
    
  if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      setLocalStorage()
  } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
setLocalStorage()
      
  }
},false)

function setLocalStorage() {
    localStorage.setItem('data',text.innerHTML)
}
function getLocalStorage() {
text.innerHTML =localStorage.getItem('data')
}
getLocalStorage()