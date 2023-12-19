const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const LOCAL_FEEDBACK_KEY = "feedback-form-state";

const withOutSpace = e => e.replace(/\s/g, "");
const updStorageInfo = () => JSON.parse(localStorage.getItem(LOCAL_FEEDBACK_KEY));
const savedFeedback = updStorageInfo();
const feedback = {};

if (localStorage.length !== 0) {
    email.value = savedFeedback.email;
    message.value = savedFeedback.message;
}

const formInput = event => {
    feedback[email.name] = email.value;
    feedback[message.name] = message.value;
    localStorage.setItem(LOCAL_FEEDBACK_KEY, JSON.stringify(feedback));
}

const formSubmit = event => {
    event.preventDefault();
    if (withOutSpace(email.value) === "" || withOutSpace(message.value) === "") {
        alert('All form fields must be filled in');
    } else {
        form.reset();
        console.table(updStorageInfo());
        localStorage.removeItem(LOCAL_FEEDBACK_KEY);
    }
}

form.addEventListener("input", formInput);
form.addEventListener("submit", formSubmit);