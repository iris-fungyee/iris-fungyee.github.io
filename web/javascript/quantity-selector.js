const minusBtns = document.querySelectorAll('.minus');
const plusBtns = document.querySelectorAll('.plus');

// Handle Plus Button
plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Find the input that is in the same container as this button
        const input = btn.parentElement.querySelector('.qty-input');
        input.value = parseInt(input.value) + 1;
    });
});

// Handle Minus Button
minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('.qty-input');
        const currentValue = parseInt(input.value);
        
        // Prevent going below the minimum (usually 1)
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    });
});