var jhon = {
    name : 'I am jhon',
    age : 24,
    isActive : true
}

var marry = {
    name : 'I am marry',
    age : 23,
    isActive : true
}

var sam = {
    name : 'I am sam',
    age : 29,
    isActive : false
}

let users = new Map()
users.set('jhon',jhon)
users.set('marry',marry)
users.set('sam',sam)
console.log(users)
console.log(users.size)
console.log(users.get('jhon'))
console.log(users.keys())
console.log(users.values())

for (const key of users.keys()) {
    console.log(key)
}

for (const [key,value] of users.entries()) {
    console.log(key + ':'+ value.name)
}
users.forEach((value,key) => console.log(key + ' : '+ value.name))

var arrOfArr =[[0,1],[2,3],[4,5]]
var newMap = new Map(arrOfArr)
console.log(newMap)
