

function myValidation(){
     var myValue=document.getElementById('myform').value;
     const myPwithId=document.getElementById('idone');
     myPwithId.textContent = 'Hey i am changed on click'
     if(isNaN(myValue) || myValue < 1 || myValue >20){
        console.log('Not a valid input')
     }else{
         console.log('This is valid input')
     }
}

document.querySelector('.myform').addEventListener('submit',(event) => {
    event.preventDefault();
    if(event.target.pass1.value===event.target.pass2.value){
        console.log('password matched')
    }
    else{
        console.log('check your password')
    }
})