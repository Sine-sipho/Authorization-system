// Form animation changes
document.getElementById("showSignup").addEventListener("click", function () {
  document.querySelector(".registration-form").classList.add("active");
});
document.getElementById("showSignin").addEventListener("click", function () {
  document.querySelector(".registration-form").classList.remove("active");
});

// function showAlert(event) {
//   event.preventDefault();
//   document.querySelector(".alert-overlay").style.display = "block";
//   document.querySelectorAll(".input").forEach((input) => {
//     input.value = "";
//   });
// }
// Sign in form validation
const SignInValidation = (event) => {
  event.preventDefault();

  let msg;

  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  
  if (!email.value || !password.value){
    msg = "Please enter valid inputs"
    document.querySelector(".message-error").innerHTML = msg;
    document.querySelector(".message-error").style.display = "block";

    return false
  }
}
document.querySelector("#form").addEventListener("submit", SignInValidation);


// Signup form validation
const SignUpValidation = (event) => {
  event.preventDefault();
  
  let msg;

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  let signupName = document.querySelector("#signup-name")
  let signupEmail = document.querySelector("#signup-email")
  let signupPassword = document.querySelector("#signup-password")
  let passworkRegexReq = document.querySelector("#passwordRegexMessage")
  
  
  if (!signupName.value || !signupEmail.value || !signupPassword.value){
    msg = "Please enter valid inputs"
    document.querySelector(".signup-error").innerHTML = msg;
    document.querySelector(".signup-error").style.display = "block";
  }
  else if (!regexPassword.test(signupPassword.value)){
    msg = "Please enter a valid password format";
    document.querySelector(".signup-error").innerHTML = msg;
    document.querySelector(".signup-error").style.display = "block";
    passworkRegexReq.style.display = "block"
  }
}
document.querySelector("#signup-form").addEventListener("submit", SignUpValidation);

 let signupPassword = document.querySelector("#signup-password")
 let passworkRegexReq = document.querySelector("#passwordRegexMessage")
 signupPassword.addEventListener("keydown", function (){
   let passworkRegexReq = document.querySelector("#passwordRegexMessage")
   passworkRegexReq.style.display = "none"
   })

// document.getElementById("signup-form").addEventListener("submit", showAlert);

// document.getElementById("close-popup").addEventListener("click", function () {
//   document.querySelector(".alert-overlay").style.display = "none";
// });
