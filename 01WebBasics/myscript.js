// console.log(document.getElementById('idone'))
// console.log(document.getElementsByClassName('classone'))

// const myElement = document.querySelectorAll('p')
// console.log(myElement[0])

// const myElement1 = document.querySelectorAll('#idone')
// console.log(myElement1)

// const myElement2 = document.querySelectorAll('.classone')
// console.log(myElement2)

// const myPElement = document.querySelector('p')
// console.log(myPElement.textContent='I am changed using js')


// const myPElement = document.querySelectorAll('p')
// myPElement.forEach((obj) => obj.textContent= 'i am changed in loop using js')

// const myNewPara = document.createElement('p')
// myNewPara.textContent='I was added via Js'
// document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click',(event) => {
    event.target.textContent = 'I was clicked'
})

//track search input
document.querySelector('#myform').addEventListener('input', (event) => console.log(event.target.value))