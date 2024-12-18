const inputValue = document.querySelector("input");
const form = document.querySelector("form");
const submitSection = document.querySelector(".submit-section");
const error = document.querySelector(".error");
const errorImg = document.querySelector(".submit-section img");
const button = document.querySelector("button");

form.addEventListener("submit", submitEmail);

function submitEmail(event) {
  event.preventDefault();
  const regEx = new RegExp("[a-zA-Z_0-9]@gmail.com");
  const value = inputValue.value;
  const output = regEx.test(value);
  if (!output) {
    submitSection.style.boxShadow = "0px 0px 1px 2px #f96262";
    error.innerHTML = "<b>Please provide a valid email</b>";
    errorImg.style.display = "block";
  } else {
    submitSection.style.boxShadow = "0px 0px 0px 1px #4eed32";
    error.innerHTML = "";
    errorImg.style.display = "none";
    button.style.background =
      "linear-gradient(to left,rgb(40, 252, 3), rgb(185, 251, 172))";
    button.style.boxShadow = "10px 13px 25px 0px #97ce9a";
  }
}
