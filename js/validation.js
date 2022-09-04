const submit = document.querySelector("#submit-contact");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email")
const message = document.querySelector("#message");
const acceptData = document.querySelector("#accept-data");
const reg = '/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/';

function validateForm() {

    if (name.value.length < 3) {
        name.classList.add("validation-error")
        alert("Wpisz poprawne imię")
        name.focus();
        return false;
    }
    if (surname.value.length < 3) {
        surname.classList.add("validation-error")
        alert("Wpisz poprawne nazwisko")
        surname.focus();
        return false;
    }
    if (email.value.length < 5) {
        email.classList.add("validation-error")
        alert("Wpisz poprawny email")
        return false;
    }
    if (message.value.length < 5) {
        message.classList.add("validation-error")
        alert("Treść wiadomości posiada mniej niż 5 znaków")
        message.focus();
        return false;
    }

    if (!acceptData.checked) {
        console.log("false");
        alert("Prosimy o wyrażenie zgody na przetwarzanie danych.")
        return false;
    }


}



function sendByAjax() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status === 200) {

        }
    }

    xhr.open('POST', 'contact-form.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('message=' + JSON.stringify({ val: message.value }));

}


