
const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener(
"submit",
async function(e){

e.preventDefault();

const user = {

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value
};

const response = await fetch(
"http://localhost:8080/api/auth/register",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)
});

if(response.ok){

alert("Registration Successful");

window.location.href =
"/login.html";

}else{

const error =
await response.text();

alert(error);
}
});
}



const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener(
"submit",
async function(e){

e.preventDefault();

const user = {

email:
document.getElementById("loginEmail").value,

password:
document.getElementById("loginPassword").value
};

const response = await fetch(
"http://localhost:8080/api/auth/login",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)
});

const data =
await response.json();

if(data.message ===
"Login Successful"){

localStorage.setItem(
"user",
user.email
);

window.location.href =
"/employee.html";

}else{

alert("Invalid Credentials");
}
});
}

