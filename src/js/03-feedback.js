import throttle from 'lodash.throttle';
import storage from './storage';

const feedback = document.querySelector('.feedback-form');
const userEmail = feedback.children[0].firstElementChild;
const userMessage = feedback.children[1].firstElementChild;

const feedbackKey = 'feedback-form-state';
let userCommit = {};

feedback.addEventListener('input', throttle(() => {
    userCommit = {
        email: userEmail.value,
        message: userMessage.value
    };
    storage.save(feedbackKey, userCommit);
}, 500));

feedback.addEventListener('submit', event => {
    event.preventDefault()
    console.log(storage.load(feedbackKey))
    userEmail.value = '';
    userMessage.value = '';
    userCommit = {
      email: userEmail.value,
      message: userMessage.value,
    };
    storage.save(feedbackKey, userCommit)
})

if (storage.load(feedbackKey).email !== null) {
    userEmail.value = storage.load(feedbackKey).email;
}
if (storage.load(feedbackKey).message !== null) {
  userMessage.value = storage.load(feedbackKey).message;
}
