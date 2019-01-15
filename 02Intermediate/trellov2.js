let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetingDone : 0,
}

let addMeeting = function(todo, meet=0){
    todo.meetings=todo.meetings + meet
}

let meetDone = function(todo, meetDone){
    todo.meetingDone = todo.meetingDone + meetDone
}

let resetDay = function(todo){
    todo.meetingDone = 0
    todo.meetings = 0
}

let getSummaryOfDay = function(todo){
    let meetingLeft = todo.meetings -todo.meetingDone
    return `You have ${meetingLeft} meeting today!`
}

addMeeting(myTodos,4)
meetDone(myTodos,2)
addMeeting(myTodos,3)
console.log(getSummaryOfDay(myTodos))
