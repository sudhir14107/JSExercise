// const sayHello = function(name){
//     return 'hey there, ' + name + ' !'
// }

// console.log(sayHello('sudhir'))

const sayHello = (name) => `Hey there ${name}!`
console.log(sayHello('sudhir'))


const todos =[{
    title : 'Buy Bread',
    isDone : true

},{
    title : 'go to gym',
    isDone : true
},{
    title : 'record youtubeVideo',
    isDone : false
}]

const thingsDone = todos.filter((todo) => todo.isDone === true )
console.log(thingsDone)


const todos1 =[{
    title : 'Buy Bread',
    isDone : true

},{
    title : 'go to gym',
    isDone : false
},{
    title : 'record youtubeVideo',
    isDone : false
},{
    title : 'Buy Apple',
    isDone : true
},{
    title : 'Buy Fruit',
    isDone : false
},{
    title : 'go to scool',
    isDone : true
}]

const notDone = todos1.filter((todo) => todo.isDone === false )
notDone.forEach((obj) => console.log(obj.title))