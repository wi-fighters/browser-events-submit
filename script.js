(() => {
    // store a reference to the event target/s
    const form = document.querySelector('form');

    // define the listener/s
    const setColor = function(event) {
        // Tell the form not to navigate to the 'action' page like it would by default, stay here instead.
        event.preventDefault();

        const textField = document.querySelector('#color');
        const square = document.querySelector('#square');

        square.style.backgroundColor = textField.value;
    };

    const setSize = function(event) {
        // Technically we only need this line on one of the listeners, but this is a simplistic example
        event.preventDefault();

        const textField = document.querySelector('#size');
        const p = document.querySelector('#square p');

        p.style.fontSize = textField.value + 'em';
    }

    // attach the listeners to the event target/s
    form.addEventListener('submit', setColor, false);
    form.addEventListener('submit', setSize, false);
})();