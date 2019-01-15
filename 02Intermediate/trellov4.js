const newTodos = [{
    title : 'Buy Bread',
    isDone : false
},{
    title : 'Go to Gym',
    isDone : false
},{
    title : 'Record Youtube videos',
    isDone : false
}]

// const index = newTodos.findIndex(function(todo,index){
//     console.log(todo)
//     return todo.title === 'Go to Gym'
// })
//console.log(index)

const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo,index){
        //console.log(todo)
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

console.log(findTodo(newTodos, 'Go to Gym'))