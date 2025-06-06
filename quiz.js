 const correctAnswers = {
      q1: "b",
      q2: "c",
      q3: "c",
      q4: "c",
      q5: "c"
    };

    document.getElementById("quizForm").addEventListener("submit", function(event) {
      event.preventDefault();

      let score = 0;

      for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
          score++;
        }
      }

      const percentage = (score / 5) * 100;
      const result = document.getElementById("result");

      if (percentage >= 60) {
        result.textContent = `✅ ¡Aprobaste con ${percentage}%!`;
        result.style.color = "#2e7d32";
      } else {
        result.textContent = `❌ Obtuviste ${percentage}%. No te desanimes, ¡intentá de nuevo!`;
        result.style.color = "#c62828";
      }
    });