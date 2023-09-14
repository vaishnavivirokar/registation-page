var user = document.querySelector('#email');
email.addEventListener('keyup', function(){
    var u_times = document.querySelector('u_times');
    var u_check = document.querySelector('u_check');
    if (email.value.lenth == 0 || email.value.length < 12 || email.value =='text123@gmail.com'){
        email.style.border ='5px solid red';
        u_times.style.display ='block';
        u_check.style.display ='none';
    }else{
        email.style.border = '5px solid green';
    
    }
    
})
var user = document.querySelector('#password');
password.addEventListener('keyup', function(){
    var u_times = document.querySelector('u_times');
    var u_check = document.querySelector('u_check');
    if (password.value.lenth == 0 || password.value.length < 6){
        password.style.border ='5px solid red';
        u_times.style.display ='block';
        u_check.style.display ='none';
    }else{
        password.style.border = '5px solid green';
        alert('successfully logged in');
    }
    
})