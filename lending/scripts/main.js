const openModalButtons = document.querySelectorAll(".modalButton");
const modal = document.querySelector(".modal");
const submit = document.querySelector(".modalForm button");
const passwordInput = document.querySelector('input[id="password"]');
const confirmInput = document.querySelector('input[id="confirm"]');
const error = document.querySelector(".error");

openModalButtons.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "block";
  });
});

submit.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "none";
});

[passwordInput, confirmInput].forEach(input =>
  input.addEventListener("blur", validation)
);

function validation() {
  if (
    confirmInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    passwordInput.value !== confirmInput.value
  ) {
    submit.disabled = true;
    confirmInput.classList.add("error");
    error.innerHTML = "wrong password";
  } else if (
    confirmInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    passwordInput.value === confirmInput.value
  ) {
    submit.disabled = false;
    confirmInput.classList.remove("error");
    error.innerHTML = "";
  }
}

new WOW().init();
