
var signinNameInput = document.getElementById("signinNameInput")
var signinEmailInput = document.getElementById("signinEmailInput")
var signinPasswordInput = document.getElementById("signinPasswordInput")

var userDataList = [];

if( localStorage.getItem("allUsers") !=null ){
    userDataList = JSON.parse( localStorage.getItem ("allUsers") )
}

var email = document.getElementById("email");

function signUp(){
    if( signinNameInput.value == "" || signinEmailInput.value == "" || signinPasswordInput.value == "" ){
        requiredd.classList.remove("d-none")
        
    }
    else if( isExist() ){
        email.classList.remove("d-none")
        requiredd.classList.add("d-none")
        success.classList.add("d-none")
    }
    
    else{

        var data = {
            name : signinNameInput.value,
            email : signinEmailInput.value,
            password : signinPasswordInput.value,
        }
        userDataList.push(data)
        localStorage.setItem("allUsers" , JSON.stringify(userDataList))
        requiredd.classList.add("d-none")
        success.classList.remove("d-none")
    
        valUserName();
    }
}

function isExist(){
    for( var i = 0; i < userDataList.length; i++ ){
        if(  userDataList[i].name.toLowerCase() == signinNameInput.value.toLowerCase() ||
        userDataList[i].email.toLowerCase() == signinEmailInput.value.toLowerCase() ){
            return true
        }
    }
    return false
}

var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")

var usersession = JSON.parse( localStorage.getItem("UUser") )
function login(){
for( var i =0; i < userDataList.length; i++ ){
if( userDataList[i].email.toLowerCase() == signinEmail.value.toLowerCase() &&
userDataList[i].password.toLowerCase() == signinPassword.value.toLowerCase() ){
    usersession = userDataList[i].name
    localStorage.setItem("UUser" , JSON.stringify(usersession))
    window.location.href = "./home.html"
}
}

error.classList.remove("d-none")
requiredd.classList.add("d-none")
}

function displaywelcome(){
    var username = document.getElementById("username").innerHTML = `Welcome ${usersession}`
}

function logout(){
    localStorage.removeItem("UUser")
}