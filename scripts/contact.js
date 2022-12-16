const formElement = document.querySelector('#contact-page');

formElement.onsubmit = function(e){
    e.preventDefault();
    formElement.classList.add('submitContact');
    formElement.innerHTML = '<h2>Thank you for your message!</h2>';
};