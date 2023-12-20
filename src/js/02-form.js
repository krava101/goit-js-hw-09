const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const LOCAL_FEEDBACK_KEY = "feedback-form-state";

const getSavedFormData = () => {
    try {
        return JSON.parse(localStorage.getItem(LOCAL_FEEDBACK_KEY))
    } catch (error) {
        console.error(error);
    }
};

const savedFeedback = getSavedFormData();

if (localStorage.length !== 0) {
    email.value = savedFeedback.userEmail;
    message.value = savedFeedback.userMessage;
}

const formInput = () => {
    const userFeedback = {
        userEmail:'',
        userMessage:''
    }
    userFeedback.userEmail = email.value.trim();
    userFeedback.userMessage = message.value.trim();
    localStorage.setItem(LOCAL_FEEDBACK_KEY, JSON.stringify(userFeedback));
}

const formSubmit = () => {
    event.preventDefault();
    if (email.value.trim() === "" || message.value.trim() === "") {
        alert('All form fields must be filled in');
    } else {
        form.reset();
        console.table(getSavedFormData());
        localStorage.removeItem(LOCAL_FEEDBACK_KEY);
    }
}

form.addEventListener("input", formInput);
form.addEventListener("submit", formSubmit);
