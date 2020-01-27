(() => {
    // store a reference to the event target/s
    const form = document.querySelector('form');

    // define the listener/s
    const setColor = function(event) {
        event.preventDefault();

        const textField = document.querySelector('#color');
        const square = document.querySelector('#square');
        
        square.style.backgroundColor = textField.value;
    };

    // attach the listeners to the event target/s
    form.addEventListener('submit', setColor, false);
})();