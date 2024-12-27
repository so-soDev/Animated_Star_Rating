const ratingInputs = document.querySelectorAll('.rating__input');
const ratingText = document.getElementById('rating-text');

function updateRatingText() {
    const selectedRating = document.querySelector('.rating__input:checked');

    if (!selectedRating) {
        ratingText.textContent = 'Chose the number of stars for rating';
        return;
    }

    const ratingValue = parseInt(selectedRating.value);

    switch (ratingValue) {
        case 1:
            ratingText.textContent = 'Bad';
            break;
        case 2:
            ratingText.textContent = 'Unsatisfactory';
            break;
        case 3:
            ratingText.textContent = 'Satisfactory';
            break;
        case 4:
            ratingText.textContent = 'Good';
            break;
        case 5:
            ratingText.textContent = 'Excellent';
            break;
        default:
            ratingText.textContent = 'Chose the number of stars for rating';
    }
}

ratingInputs.forEach(input => {
    input.addEventListener('change', updateRatingText);
})