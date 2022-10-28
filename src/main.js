let passwordInput = document.querySelector("#password");
let passwordConfirmInput = document.querySelector("#password-confirm");

passwordConfirmInput.addEventListener("input", (e) => {
    if (passwordConfirmInput.value.length >= 8 && passwordInput.value !== passwordConfirmInput.value) {
        passwordConfirmInput.classList.add("wrong-pass");
        passwordInput.classList.add("wrong-pass");
        passwordConfirmInput.classList.remove("right-pass");
        passwordInput.classList.remove("right-pass");
    } else if (passwordConfirmInput.value.length >= 8 && passwordInput.value === passwordConfirmInput.value) {
        passwordConfirmInput.classList.remove("wrong-pass");
        passwordInput.classList.remove("wrong-pass");
        passwordConfirmInput.classList.add("right-pass");
        passwordInput.classList.add("right-pass");
    }
})

// passwordInput.addEventListener("input", (e) => {
//     if (passwordInput.value.length >= 8 && passwordInput.value !== passwordConfirmInput.value) {
//         passwordConfirmInput.classList.add("wrong-pass");
//         passwordInput.classList.add("wrong-pass");
//     } else if (passwordInput.value.length >= 8 && passwordInput.value === passwordConfirmInput.value) {
//         passwordConfirmInput.classList.add("right-pass");
//         passwordInput.classList.add("right-pass");
//     }
// })
