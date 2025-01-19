export function faqElement() {
    // FAQ Toggle Logic
    const questions = document.querySelectorAll('.js-questions');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            // Select the corresponding answer
            const answer = question.nextElementSibling;

            if (answer) {
                answer.classList.toggle('visible');
                answer.classList.toggle('hidden');
            }
        });
    });

}
