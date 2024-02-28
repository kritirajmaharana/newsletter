var a = document.querySelector("#email");

function validateEmail(email) {
   if(email.toLowerCase().endsWith('@gmail.com')){
    return true
   }else{
    return false
   }
}

  let newsletterForm = document.getElementById("newsletterForm");
  
    newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    let emailInput = document.getElementById("email");
    if (validateEmail(emailInput.value)) {
            window.location.href = "./page.html";
            emailInput.style.backgroundColor = "";
            emailInput.style.color = "";
    } else {
      let errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
      a.style.backgroundColor = "hsl(4, 100%, 87%)";
      a.style.color = "hsl(4, 100%, 67%)";
      a.style.border = "2px solid hsl(4, 100%, 67%)"
    }
  });
  