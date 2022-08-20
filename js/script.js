"use strict"

const Fname=document.querySelector('#fname');
const Lname=document.querySelector('#lname');
const email=document.querySelector('#email');
const pswrd=document.querySelector('#pswd');
const submitBtn=document.querySelector('.button');
const icon=document.querySelector(`.Fname-icon`);
const pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


submitBtn.addEventListener('click',function(){

    if(Fname.value===''){
        const icon=document.querySelector(`.Fname-icon`);
        icon.classList.remove('hidden');
        document.querySelector('.Fname-msge').classList.remove('hidden');
        Fname.placeholder="";
        Fname.style.border="1px solid red";
    }
    else{
       Fname.style.border="2px solid hsl(154, 59%, 51%)";
    }

    if(Lname.value===''){
        const icon=document.querySelector(`.lname-icon`);
        icon.classList.remove('hidden');
        document.querySelector('.lname-msge').classList.remove('hidden');
        Lname.placeholder="";
        Lname.style.border="1px solid red";

    }
    else{
        Lname.style.border="2px solid hsl(154, 59%, 51%)";
    }

    if(email.value===''){
        const icon=document.querySelector(`.email-icon`);
        icon.classList.remove('hidden');
        document.querySelector('.email-msge-2').classList.remove('hidden');
        email.style.border="1px solid red";
        email.placeholder="";
        
    }
    else if(!email.value.match(pattern)){
        email.value="";
        email.placeholder="email@Example/com";
        email +='red';
        document.querySelector('.email-msge').classList.remove('hidden');
    }
    else{
        email.style.border="2px solid hsl(154, 59%, 51%)";
        email.placeholder="";
    }

    if(pswrd.value===''){
        const icon=document.querySelector(`.pswrd-icon`);
        icon.classList.remove('hidden');
        document.querySelector('.pswrd-msge').classList.remove('hidden');
        pswrd.placeholder="";
        pswrd.style.border="1px solid red";

    }
    else{
        pswrd.style.border="2px solid hsl(154, 59%, 51%)";
    }
});