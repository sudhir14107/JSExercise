const convertToRs = (dollar) => {
    if (typeof dollar ==='number'){
        return dollar * 73
    }else{
        throw Error('Amounts need to be in number')
    }
}

const myValue = convertToRs('sud')
console.log(myValue)

try {
    const myValue = convertToRs('sud')
    console.log(myValue)
} catch (e) {
    console.log(e)
}