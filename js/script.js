"use strict"

const Fname=document.querySelector('#fname');
const Lname=document.querySelector('#lname');
const email=document.querySelector('#email');
const pswrd=document.querySelector('#pswd');
const submitBtn=document.querySelector('.button');
const pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


submitBtn.addEventListener('click',function(){

    if(Fname.value===''){
        const icon=document.querySelector('.icon-1');
        icon.classList.remove('hidden');
        document.querySelector('.error-msge-1').classList.remove('hidden');
        Fname.placeholder="";
        Fname.style.border="1px solid red";
    }
    else{
       Fname.style.border="2px solid hsl(154, 59%, 51%)";
    }

    if(Lname.value===''){
        const icon=document.querySelector('.icon-2');
        icon.classList.remove('hidden');
        document.querySelector('.error-msge-2').classList.remove('hidden');
        Lname.placeholder="";
        Lname.style.border="1px solid red";

    }
    else{
        Lname.style.border="2px solid hsl(154, 59%, 51%)";
    }
    

    if(email.value===''){
        const icon=document.querySelector('.icon-3');
        icon.classList.remove('hidden');
        document.querySelector('.error-msge-3-2').classList.remove('hidden');
        email.style.border="1px solid red";
        email.placeholder="";
        
    }
    else if(!email.value.match(pattern)){
        email.value="";
        email.placeholder="";
        // email +='red';
        document.querySelector('.error-msge-3-2').classList.add('hidden');
        document.querySelector('.error-msge-3-1').classList.remove('hidden');
    }
    else{
        email.style.border="2px solid hsl(154, 59%, 51%)";
        email.placeholder="";
    }


    if(pswrd.value===''){
        const icon=document.querySelector(`.icon-4`);
        icon.classList.remove('hidden');
        document.querySelector('.error-msge-4').classList.remove('hidden');
        pswrd.placeholder="";
        pswrd.style.border="1px solid red";

    }
    else{
        pswrd.style.border="2px solid hsl(154, 59%, 51%)";
    }
});

for(let i=1;i<=4;i++){
    let v=document.querySelector(`.form-in-${i}`);
    if(v.value===''){
        v.addEventListener('click',function(){
            if(i==3){
                document.querySelector(`.icon-${i}`).classList.add('hidden');
                document.querySelector(`.error-msge-${i}-1`).classList.add('hidden');
                document.querySelector(`.error-msge-${i}-2`).classList.add('hidden');
                document.querySelector(`.form-in-${i}`).style.border=".5px solid hsl(246, 25%, 77%)";
            }
            else{
                document.querySelector(`.icon-${i}`).classList.add('hidden');
                document.querySelector(`.error-msge-${i}`).classList.add('hidden');
                document.querySelector(`.form-in-${i}`).style.border=".5px solid hsl(246, 25%, 77%)";
            }
            
        })
    }
    
}