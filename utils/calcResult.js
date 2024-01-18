function calcResult(answer1, answer2, answer3) {
  const totalQuestions = 3;
  let score = 0;

  const expectedAnswer1 = "Parijs";
  const expectedAnswer2 = "8";
  const expectedAnswer3 = "Tokio";

  if (
    answer1 &&
    answer1.trim().toLowerCase() === expectedAnswer1.toLowerCase()
  ) {
    score++;
  }

  if (answer2 && answer2.trim() === expectedAnswer2) {
    score++;
  }

  if (
    answer3 &&
    answer3.trim().toLowerCase() === expectedAnswer3.toLowerCase()
  ) {
    score++;
  }

  return { score, totalQuestions };
}

module.exports = calcResult;
