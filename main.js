document.getElementById("showSignup").addEventListener("click", function () {
  document.querySelector(".registration-form").classList.add("active");
});
document.getElementById("showSignin").addEventListener("click", function () {
  document.querySelector(".registration-form").classList.remove("active");
});

function showAlert(event) {
  event.preventDefault();
  document.querySelector(".alert-overlay").style.display = "block";
  document.querySelectorAll(".input").forEach((input) => {
    input.value = "";
  });
}

const message = (event) => {
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

document.querySelector("#form").addEventListener("submit", message);

const messaging = (event) => {
  event.preventDefault();
  
  let msg;

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  let signupName = document.querySelector("#signup-name")
  let signupEmail = document.querySelector("#signup-email")
  let signupPassword = document.querySelector("#signup-password")
  
  if (!signupName.value || !signupEmail.value || !signupPassword.value){
    msg = "Please enter valid inputs"
    document.querySelector(".signup-error").innerHTML = msg;
    document.querySelector(".signup-error").style.display = "block";
  }
  if (!regexPassword.test(signupPassword.value)){
    msg = "Valid password";
    document.querySelector(".signup-error").innerHTML = msg;
    document.querySelector(".signup-error").style.display = "block";


    return false
  }
    

  // Password regex

  
}
  
  
  // if (email.value === "" || password.value === "") {
  //   msg = "Please enter valid inputs";
  //   document.querySelector(".error-message").innerHTML = msg;
  //   document.querySelector(".error-message").style.display = "block";
  // }  
  // else if (
  //   email.value !== "Sinesipho@gmail.com" &&
  //   password.value !== "@12345"
  // ) {
  //   msg = "You have entered incorrect values";
  //   document.querySelector(".error-message").innerHTML = msg;
  //   document.querySelector(".error-message").style.display = "block";
  //   document.querySelectorAll(".input").forEach((input) => {
  //     input.value = "";
  //   });
  // }



document.querySelector("#signup-form").addEventListener("submit", messaging);

// document.getElementById("signup-form").addEventListener("submit", showAlert);

document.getElementById("close-popup").addEventListener("click", function () {
  document.querySelector(".alert-overlay").style.display = "none";
});
