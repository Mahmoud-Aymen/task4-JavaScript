var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var dataList = [];
var Alert = document.getElementById("Alert")

function userData(){
  if( signinEmail.value == "" || signinPassword.value == "" ){
    Alert.classList.remove("d-none")
  }
  var userData = {
    email : signinEmail.value,
    password : signinPassword.value,
  }
  dataList.push(userData);
  clearForm();
  console.log(dataList);
}

function clearForm(){
  signinEmail.value = "";
  signinPassword.value = "";
}