"use strict"

const Fname=document.querySelector('#fname');
const Lname=document.querySelector('#lname');
const email=document.querySelector('#fname');
const pswrd=document.querySelector('#fname');
const submitBtn=document.querySelector('.main__form-btn');

function errorFunc(obj){
    obj.classList.remove('hidden');
}

submitBtn.addEventListener('click',function(){
    console.log(2);

    var firstName=Fname.value.trim();
    var lastName=Lname.value.trim();
    var emailValue=email.value.trim();
    var passwordValue=pswrd.value.trim();


    if(firstName.value===''){
        errorFunc(Fname);
    }
    else{
        successFunc(Fname);
    }

    if(firstName.value===''){
        errorFunc(Fname);
    }
    else{
        successFunc(Fname);
    }
});