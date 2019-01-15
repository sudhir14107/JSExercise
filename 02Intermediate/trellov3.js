let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetingDone : 0,

    addMeeting : function(num){
        this.meetings = this.meetings + num
    },

    addMeetingDone : function(num){
        this.meetingDone = this.meetingDone + num
    } ,

    getSummary : function(){
        return `you have ${this.meetings - this.meetingDone} meetings left!`
    }
}

myTodos.addMeeting(4)
myTodos.addMeetingDone(2)
console.log(myTodos.getSummary())