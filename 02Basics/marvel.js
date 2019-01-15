const superHeroes = ['IranMan', 'SpiderMan', 'Captain America', 'Thor']
console.log(superHeroes)
console.log(superHeroes[0])
//console.log(superHeroes[-1]) not work as python
console.log(superHeroes[superHeroes.length-1])

console.log('we have 3 Super heroes')

console.log(`we have ${superHeroes.length} super heroes`)

const numbers = ['one', 'two', 'three', 'four', 'five']

numbers[1] = 'Something' //allowed

const a = 4
// a = 5 not allowed
console.log(a)

console.log(numbers.shift())
console.log(numbers)

console.log(numbers.unshift('Something'));
console.log(numbers)

numbers.splice(1,2,'sudhir')
console.log(numbers)

numbers.splice(2,2,'kumar','kumar')
console.log(numbers)




