let myYoutubeVideoOne = {
    title : 'Loops in javascipt',
    length : 15,
    videoDescription : 'this is a video description',
    videoCreator : 'Sudhir Kumar'
}

// console.log(myYoutubeVideo)
// console.log(`hey new video ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

// let myCourse = {
//     course : 'Javascript',
//     author : 'Hitesh',
//     price : 500
// }

// console.log(`hey i have taken this ${myCourse.course} by ${myCourse.author} at ${myCourse.price}`)
let myYoutubeVideoTwo = {
    title : 'function in javascipt',
    length : 10,
    videoDescription : 'this is a video description',
    videoCreator : 'Sudhir Kumar'
}


let changeVideoLength = function(myObject){
    //console.log(`time of this video is ${myObject.length}`)
    return {
        formatOne : `video length is ${myObject.length + 2}`,
        formatTwo : `video length is ${myObject.length }`
    }
}

console.log(changeVideoLength(myYoutubeVideoOne))
let addOne = changeVideoLength(myYoutubeVideoOne);
console.log(addOne.formatOne)