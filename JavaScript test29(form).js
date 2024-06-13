var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submitError");

function validateName(){
    var name = document.getElementById("inputName3").value;
    if(name.length == ""){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}

function validatePhone(){
     var phone = document.getElementById("inputPhno3").value;
     if(phone.length == 0){
        phoneError.innerHTML="Phone no is required";
        return false;
     }
     if(phone.length !=11){
        phoneError.innerHTML= "Phone no should be 11 digits";
        return false;
     }
     if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only digit please";
        return false;
     }
     phoneError.innerHTML = '<i class= "fa fa-check-square"></i>';
     return true;
}
function validateEmail(){
    var email = document.getElementById("inputEmail3").value;
    if(email.length == "0"){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._0-9]*[@][a-z]{5}[\.][a-z]{3}$/)){
        emailError.innerHTML = "Email is required";
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("inputMessage3").value;
    var required = 30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left + "more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}
function validateSubmit(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = 'block';}, 3000);
        return false;
    }
    return true;
}