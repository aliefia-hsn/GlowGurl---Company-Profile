function openQuiz() {
    const quizModal = document.getElementById('quiz-modal');
    const modal = new bootstrap.Modal(quizModal);
    modal.show();
}
function nextStep(step, progress) {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(step => step.classList.add('d-none'));

    // Show the selected step
    document.getElementById(`step${step}`).classList.remove('d-none');

    // Update the progress bar
    const progressBar = document.getElementById('quiz-progress');
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressBar.textContent = `Step ${step} of 3`;
}

function showResult() {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(step => step.classList.add('d-none'));

    // Show the result
    document.getElementById('result').classList.remove('d-none');

    // Complete the progress bar
    const progressBar = document.getElementById('quiz-progress');
    progressBar.style.width = `100%`;
    progressBar.textContent = 'Complete';
}

// Initialize the product carousel with custom options
var productCarousel = new bootstrap.Carousel('#productCarousel', {
    interval: 3000, // Auto-slide every 3 seconds
    wrap: true, // Loop back to the first slide after the last
    pause: 'hover' // Pause the carousel when the user hovers over it
});

// Highlight the active card in the product carousel
document.querySelector('#productCarousel').addEventListener('slid.bs.carousel', function (event) {
    // Remove 'active-card' class from all cards
    document.querySelectorAll('#productCarousel .card').forEach(card => {
        card.classList.remove('active-card');
    });

    // Add 'active-card' class to cards in the currently active slide
    event.relatedTarget.querySelectorAll('.card').forEach(card => {
        card.classList.add('active-card');
    });
});

