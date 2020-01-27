(() => {
    const form = document.querySelector('form');

    const setColor = function(event) {
        event.preventDefault();

        const textField = document.querySelector('#color');
        const square = document.querySelector('#square');
        
        square.style.backgroundColor = textField.value;
    };

    form.addEventListener('submit', setColor, false);
})();