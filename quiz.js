const emailQuestions = [
    {
        subject: "Your Account Has Been Compromised. Please Reset Your Password Immediately.",
        sender: "security@bank.com",
        message: "We have detected unusual activity in your account. To protect your information, click here to reset your password.",
        correctAnswer: "Phishing Email",
        feedback: "Phishing emails often use urgent language like 'compromised' and ask for sensitive actions like resetting a password through a link."
    },
    {
        subject: "Important Update from Your Bank",
        sender: "noreply@mybank.com",
        message: "We have recently updated our terms of service. Please log into your account for details.",
        correctAnswer: "Legitimate Email",
        feedback: "Legitimate emails from your bank often come from addresses like 'noreply' and avoid urging you to click on suspicious links."
    },
    // Add more email examples as needed
];

let currentQuestion = 0;

const phishingBtn = document.getElementById('phishing-btn');
const legitBtn = document.getElementById('legit-btn');
const resultDiv = document.getElementById('result');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-question');
const restartBtn = document.getElementById('restart-quiz');

function checkAnswer(userAnswer) {
    const correctAnswer = emailQuestions[currentQuestion].correctAnswer;
    const feedback = emailQuestions[currentQuestion].feedback;

    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "Correct! This is a " + correctAnswer + ".";
        resultDiv.style.color = '#2ecc71'; // Green for correct
    } else {
        resultDiv.textContent = "Oops! This is actually a " + correctAnswer + ".";
        resultDiv.style.color = '#e74c3c'; // Red for incorrect
    }

    feedbackDiv.textContent = feedback;
    feedbackDiv.style.display = 'block'; // Show the feedback
    nextBtn.style.display = 'inline-block'; // Show the next button
}

phishingBtn.addEventListener('click', function () {
    checkAnswer('Phishing Email');
});

legitBtn.addEventListener('click', function () {
    checkAnswer('Legitimate Email');
});

nextBtn.addEventListener('click', function () {
    currentQuestion++;

    if (currentQuestion < emailQuestions.length) {
        document.querySelector('.question p:nth-child(1)').textContent = `Subject: "${emailQuestions[currentQuestion].subject}"`;
        document.querySelector('.question p:nth-child(2)').textContent = `Sender: ${emailQuestions[currentQuestion].sender}`;
        document.querySelector('.question p:nth-child(3)').textContent = `Message: "${emailQuestions[currentQuestion].message}"`;

        resultDiv.textContent = '';
        feedbackDiv.style.display = 'none'; // Hide feedback for next question
        nextBtn.style.display = 'none';
    } else {
        resultDiv.textContent = 'Quiz Completed!';
        phishingBtn.style.display = 'none';
        legitBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        restartBtn.style.display = 'inline-block'; // Show the restart button
    }
});

restartBtn.addEventListener('click', function () {
    currentQuestion = 0;

    // Reset the first question
    document.querySelector('.question p:nth-child(1)').textContent = `Subject: "${emailQuestions[0].subject}"`;
    document.querySelector('.question p:nth-child(2)').textContent = `Sender: ${emailQuestions[0].sender}`;
    document.querySelector('.question p:nth-child(3)').textContent = `Message: "${emailQuestions[0].message}"`;

    resultDiv.textContent = '';
    feedbackDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';

    phishingBtn.style.display = 'inline-block';
    legitBtn.style.display = 'inline-block';
});
