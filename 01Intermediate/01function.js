let sayHello = function(name){
    console.log(`Greeting for ${name}`)
    console.log(`Hello ${name}`)
}

sayHello('sudhir')

let fullNameMaker = function(firstName, lastName){
    console.log("Greetings for you")
    console.log(`Hello ${firstName} ${lastName}`)
}

fullNameMaker("Sudhir", "Kumar")

let myAdder = function(num1, num2){
    let sum = num1 + num2
    return sum
}

let result = myAdder(2,3)
console.log(myAdder(2,3))
console.log(result)


let guestUser = function(user='unName', courseCount=0){
    return `Hey ${user} your courseCount is ${courseCount}`
}

console.log(guestUser('sudhir',5))
