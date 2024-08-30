
const form = document.getElementById("form") 

const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPasssword = document.getElementById("confirmPassword")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const confirmPassswordValue = confirmPasssword.value

    if(usernameValue === ""){
            setErrorFor(username, "O nome de usuário é obrigatório.")
    }else{
            setSuccesFor(username)
    }

    if(emailValue === ""){
        setErrorFor(email, "O e-mail é obrigatório.")
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Insira um e-mail válido!")
    }else{
        setSuccesFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "O campo senha é obrigatório.")
    }else if(passwordValue.length < 7){
        setErrorFor(password, "A senha precisa conter mais de 7 caracteres!")
    }else{
        setSuccesFor(password)
    }

    if(confirmPassswordValue === ""){
        setErrorFor(confirmPasssword, "Este campo é obrigatório")
    }else if (confirmPassswordValue != passwordValue){
        setErrorFor(confirmPasssword, "As senhas estão divergentes!")
        setErrorFor(password, "As senhas estão divergentes!")
    }
    else{
        setSuccesFor(confirmPasssword)
    }


}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "form-item error"
}

function setSuccesFor(input){
    const formControl = input.parentElement

    formControl.className = "form-item succes"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}