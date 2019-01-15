let sayHello = function(name){
    console.log(`Greeting for ${name}`)
    console.log(`Hello ${name}`)
}


const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
days.forEach(sayHello)


days.forEach(function(day){
    console.log(day)
})

days.forEach(function(day,index){
    console.log(`${index+1}----${day}`)
})