var correctAnswer = 2;

function checkAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    var result = document.getElementById("result");

    if (answer === correctAnswer) {
        result.innerText = "Correct! Paris is the capital of France.";
        result.style.color = "green";
    } else {
        result.innerText = "Wrong! The correct answer is Paris.";
        result.style.color = "red";
    }
} else {
    result.innerText = "Please select an answer.";
    result.style.color = "orange";
}










