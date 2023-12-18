const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

const withOutSpace = e => e.replace(/\s/g, "");
const updStorageInfo = () => JSON.parse(localStorage.getItem("feedback-form-state"));
const savedFeedback = updStorageInfo();
const feedback = {};

if (localStorage.length !== 0) {
    email.value = savedFeedback.email;
    message.value = savedFeedback.message;
}

const formInput = event => {
    feedback[email.name] = email.value;
    feedback[message.name] = message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}

const formSubmit = event => {
    event.preventDefault();
    if (withOutSpace(email.value) === "" || withOutSpace(message.value) === "") {
        alert('All form fields must be filled in');
    } else {
        form.reset();
        console.table(updStorageInfo());
        localStorage.removeItem("feedback-form-state");
    }
}

form.addEventListener("input", formInput);
form.addEventListener("submit", formSubmit);