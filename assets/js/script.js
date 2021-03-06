let flagSize;
const mobileScreen = 350;
const mediumScreen = 700;
const largeScreen = 1200;
const gameDuration = 29;
let seconds;
let intervaliId;
let intViewportWidth
let timeRemaining;
function startTimer(seconds) {
  intervalId = setInterval(countDown, 1000);
  function countDown() {
    document.getElementById("timer").innerHTML = `Time: ${seconds}`;
    if (seconds === 0) {
      clearInterval(intervalId);
      finishGame();
    } else if (seconds === 10) {
      document.getElementById("timer").style.color = "red";
      document.getElementById("timer").classList.add("flashing");
      { seconds = seconds -= 1;
      }
    } else {
      seconds = seconds -= 1;
    }
    timeRemaining = seconds;
  }
}
let gameArray = [];
let difficultyMultiplier;
document.getElementById("easy-btn").addEventListener("click", function () {
  gameArray = easyArray;
  difficultyMultiplier = 0;
  getQuiz();
});
document.getElementById("medium-btn").addEventListener("click", function () {
  gameArray = mediumArray;
  difficultyMultiplier = gameArray.length;
  getQuiz();
});
document.getElementById("difficult-btn").addEventListener("click", function () {
  gameArray = hardArray;
  difficultyMultiplier = gameArray.length * 2;
  getQuiz();
});
function getQuiz() {
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("home-container").classList.add("hidden");
  startTimer(gameDuration);
  generateQuestion();
}
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
const flag = document.getElementById("flag");
const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const button4 = document.getElementById("option4");
const answerButtonArray = [button1, button2, button3, button4];
const numberOfOptions = 4;
let questionArray = [];
let correctAnswer;
let correctAnswerIndex;
let correctAnswerArray = [];
let incorrectAnswerArray = [];
let questionCount = 1;
let score = 0;
let correctCount = 0;
let incorrectCount = 0;

function generateQuestion() {
  const maxQuestions = gameArray.length-numberOfOptions;
  if (correctAnswerArray.length === maxQuestions){
    finishGame();
  }
  for (let optionCount = 0; optionCount < numberOfOptions; optionCount++) {
    let randomCountry = gameArray[Math.floor(Math.random() * gameArray.length)];
    if (
      !questionArray.includes(randomCountry) &&
      !correctAnswerArray.includes(randomCountry)
    ) {
      questionArray.push(randomCountry);
    }else {
      optionCount -= 1;
    }
  }
  let questionArrayIndex = 0;
  for (answerButton of answerButtonArray) {
    answerButton.innerText = questionArray[questionArrayIndex];
    questionArrayIndex++;
  }
  document.getElementById(
    "question-count"
  ).innerText = `Question ${questionCount}`;
  document.getElementById("score-count").innerText = `Score ${score}`;
  correctAnswerIndex = Math.floor(Math.random() * questionArray.length);
  correctAnswer = questionArray[correctAnswerIndex];
  correctAnswerArray.push(correctAnswer);
  let answerFlag = getKeyByValue(countryCodes, correctAnswer);
  intViewportWidth = window.innerWidth;
  if (intViewportWidth < mobileScreen) {
    flagSize = "h80";
  } else if (intViewportWidth < mediumScreen) {
    flagSize = "h120";
  } else if (intViewportWidth < largeScreen) {
    flagSize = "h240";
  } else {
    flagSize = "w640";
  }
  flag.src = `https://flagcdn.com/${flagSize}/${answerFlag}.png`;
  questionArray = [];
  document.getElementById("score-count").classList.remove("flash-once");
  for (answerButton of answerButtonArray) {
    answerButton.addEventListener("click", checkAnswer);
  }
  let backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--button-background");
  for (answerButton of answerButtonArray) {
    answerButton.style.backgroundColor = backgroundColor;
  }
}
function checkAnswer(event) {
  const correctColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--correct-color");
  const incorrectColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--incorrect-color");
  if (event.target.innerText === correctAnswer) {
    event.target.style.backgroundColor = correctColor;
    let isCorrect = (country) => country === correctAnswer;
    questionCount += 1;
    correctCount += 1;
    document.getElementById("score-count").classList.add("flash-once");
    score += gameArray.findIndex(isCorrect) + 1 + difficultyMultiplier;
    for (answerButton of answerButtonArray) {
      answerButton.removeEventListener("click", checkAnswer);
      answerButton.blur();
    }
    setTimeout(generateQuestion, 1000);
  } else {
    event.target.style.backgroundColor = incorrectColor;
    document.getElementById(
      `option${correctAnswerIndex + 1}`
    ).style.backgroundColor = correctColor;
    incorrectAnswerArray.push(
      document.getElementById(`option${correctAnswerIndex + 1}`).innerText
    );
    for (answerButton of answerButtonArray) {
      answerButton.removeEventListener("click", checkAnswer);
      answerButton.blur();
    }
    questionCount += 1;
    incorrectCount +=1
    setTimeout(generateQuestion, 1000);
  }
}
const zeroPointsMessage = "Oh dear...";
const averageScoreMessage = "Not bad,";
const aboveAverageScoreMessage = "Well done,";
const perfectScoreMessage = "Outstanding!";
let message;
function finishGame() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("scorepage").classList.remove("hidden");
  if (score === 0) {
    message = zeroPointsMessage;
    document.getElementById("save-score-button").classList.add("hidden");
    document.getElementById("reset-button").removeAttribute("data-bs-target");
    document.getElementById("reset-button").removeAttribute("data-bs-toggle");
    document
      .getElementById("reset-button")
      .setAttribute("href", "./index.html");
  } else if (correctCount < incorrectAnswerArray.length) {
    message = averageScoreMessage;
  } else if (incorrectAnswerArray.length === 0) {
    message = perfectScoreMessage;
  } else {
    message = aboveAverageScoreMessage;
  }
  document.getElementById(
    "score-heading"
  ).innerText = `${message} you scored ${score} points.`;
  document.getElementById(
    "question-total"
  ).innerText = `You answered ${correctCount} questions correctly`;
  if (incorrectAnswerArray.length >= 1) {
    showMistakes();
  }
}
const mistakeGalleryHeadings = document.getElementById("mistakes");
const mistakeGallery = document.getElementById("mistake-gallery");
const showMistakesButton = document.getElementById('show-mistakes-btn')

function showMistakes() {
  if(incorrectCount ===1){document.getElementById("mistake-count").innerText=`You made 1 mistake.`}
  else{
  document.getElementById("mistake-count").innerText=`You made ${incorrectCount} mistakes.`}
  for (mistake of incorrectAnswerArray) {
    let errorFlagFigure = document.createElement("figure");
    errorFlagFigure.setAttribute("class", "figure collapse");
    errorFlagFigure.setAttribute("id", "collapse-mistakes");
    mistakeGallery.appendChild(errorFlagFigure);
    let errorFlag = document.createElement("img");
    errorFlag.src = `https://flagcdn.com/h80/${getKeyByValue(
      countryCodes,
      mistake
    )}.png`;
    errorFlag.setAttribute("class", "px-5 figure-img img-fluid");
    let flagCaption = document.createElement("figcaption");
    flagCaption.setAttribute("class", "figure-caption text-center");
    let captionText = document.createTextNode(mistake);
    flagCaption.appendChild(captionText);
    errorFlagFigure.appendChild(errorFlag);
    errorFlag.parentNode.insertBefore(flagCaption, errorFlag.nextSibling);
    
  }
  mistakeGalleryHeadings.classList.remove("hidden");
  mistakeGallery.classList.remove("hidden");
}
showMistakesButton.addEventListener('click',toggleMistakes)
function toggleMistakes(){
 if (showMistakesButton.innerText==='Hide Mistakes'){
   showMistakesButton.innerText='Show Mistakes'
 }else {showMistakesButton.innerText='Hide Mistakes'
}
}
let userName;
let uniqueID;
let newScoreIndex;
let sortedHighScores = [];
function addName() {
  document.getElementById("scoreboard").classList.remove("hidden");
  userName = document.getElementById("nameInput").value;
  const highScorePresent = window.localStorage.getItem("highScores");
  let user = { name: userName, score: score };
  if (highScorePresent === null) {
    sortedHighScores.push(user);
    window.localStorage.setItem("highScores", JSON.stringify(sortedHighScores));
    updateScoreboard();
  } else {
    let highScoreString = window.localStorage.getItem("highScores");
    uniqueID = "*" + userName;
    user = { name: uniqueID, score: score };
    let userString = JSON.stringify(user);
    let combinedStrings = joinTwoStrings(highScoreString, userString);
    //Code taken from an answer to this [stackoverflow post](https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value).//
    let jsonStr = combinedStrings.replace(
      /(\w+:)|(\w+ :)/g,
      function (matchedStr) {
        return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
      }
    );
    sortedHighScores = JSON.parse(jsonStr);
    sortedHighScores.sort(compare);
    newScoreIndex = findHighScoreIndex(sortedHighScores);
    (sortedHighScores[newScoreIndex].name = uniqueID.slice(1));
    window.localStorage.removeItem("highScores");
    window.localStorage.setItem("highScores", JSON.stringify(sortedHighScores));
    updateScoreboard();
  }
  document.getElementById("save-score-button").classList.add("hidden");
}
document.getElementById("submitName").addEventListener("click", validateName);
function updateScoreboard() {
  let rowCount = 1;
  for (x of sortedHighScores) {
    const tableBody = document.getElementById("table-body");
    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    tableBody.appendChild(tableRow);
    if (rowCount === newScoreIndex + 1) {
      tableRow.classList.add("table-danger");
      tableRow.appendChild(tableData1).innerText = `${rowCount}`;
      tableRow.appendChild(tableData2).innerText = `${x.name}`;
      tableRow.appendChild(tableData3).innerText = `${x.score}`;
    } else {
      tableRow.appendChild(tableData1).innerText = `${rowCount}`;
      tableRow.appendChild(tableData2).innerText = `${x.name}`;
      tableRow.appendChild(tableData3).innerText = `${x.score}`;
    }
    rowCount += 1;
  }
  document.getElementById("reset-button").removeAttribute("data-bs-target");
  document.getElementById("reset-button").removeAttribute("data-bs-toggle");
  document.getElementById("reset-button").setAttribute("href", "https://jameskelly33.github.io/Flag-Quiz-MSProject2/");
  document.getElementById("scoreboardHeading").classList.remove("hidden")
}
document.getElementById("closeQuiz").addEventListener("click", pauseQuiz);
document.getElementById("close-modal1").addEventListener("click", resumeQuiz);
document.getElementById("close-modal2").addEventListener("click", resumeQuiz);

function pauseQuiz() {
  clearInterval(intervalId);
}
function resumeQuiz() {
  startTimer(timeRemaining);
}
//Compare function taken from an answer to this [stackoverflow post](https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value).//
function compare(b, a) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
}
function joinTwoStrings(string1, string2) {
  return string1.slice(0, string1.length - 1) + "," + string2 + "]";
}
function findHighScoreIndex(object) {
  return object.findIndex((x) => x.name === uniqueID);
}
var myModal = new bootstrap.Modal(document.getElementById("save-score-modal"))
function hideModal(){
  myModal.hide()
}
function validateName(event){
  userName = document.getElementById("nameInput").value
  if(userName== false || userName[0]==="*"){
  event.preventDefault()
  invalidNameWarning()
}
  else{addName()
  hideModal()}
}
function invalidNameWarning(){
 document.getElementById("nameInput").classList.add("is-invalid")
}
