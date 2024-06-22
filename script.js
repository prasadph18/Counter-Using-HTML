document.addEventListener('DOMContentLoaded', (event) => {
    const counter = document.getElementById('counter');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');
    const error = document.getElementById('error');
    
    let count = 0;

    function updateCounter() {
        counter.innerHTML = count;
        if (count === 0) {
            error.style.visibility = 'visible';
            decrementButton.disabled = true;
        } else {
            error.style.visibility = 'hidden';
            decrementButton.disabled = false;
        }
        clearButton.style.display = count === 0 ? 'none' : 'inline-block';
    }

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        updateCounter();
    });

    updateCounter();
});