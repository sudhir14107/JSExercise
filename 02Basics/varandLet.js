let a = 'I am Global'

if(a){
    console.log(a)
    a = 'i am global 1'
    let b = 'i am local'
    console.log(b)
    var c = 'i am too global'
}

console.log(a) // change in global change all over program
//console.log(b) b is not defined
// let a = 'i am still global' using let global variable can't be redeclared
console.log(c)
var c ='i am still global'
console.log(c)