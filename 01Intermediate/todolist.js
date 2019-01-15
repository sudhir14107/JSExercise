const myTodos = []

myTodos.push('go school')
myTodos.push('buy bread')
myTodos.push('go gym')

myTodos.forEach(function(todo,i){
    console.log(`your task no ${i+1} is ${todo}`)
})


let getMyGrade = function(myMarks,totalMarks){
    let percentage = (myMarks/totalMarks)*100
    return percentage
}

let grade = getMyGrade(80,100)
if(grade>=90){
    console.log('my grade is A')
}else if (grade>=80) {
    console.log('my grade is B')
}else if (grade>=70) {
    console.log('my grade is C')
}else if(grade>=60){
    console.log('my grade is D')
}else{
    console.log('I am fail')
}