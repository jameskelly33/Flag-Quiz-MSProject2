//--------------Country Names and Codes--------------------- //
const countryStringEasy = 'Japan,Canada,United States,United Kingdom,South Korea,Brazil,France,Germany,Israel,China,Switzerland,Australia,Italy,Sweden,Greece,Finland,Spain,Ireland,Jamaica,South Africa,Turkey,India,Norway,New Zealand,Denmark,Argentina,Mexico,Belgium,Poland,Russia,Saudi Arabia,Portugal,Iceland,Croatia,Cyprus,Nepal,Netherlands,North Korea,Ukraine,Nigeria,Kenya,Georgia,Albania,Iraq,Czechia,Austria,Chile,Slovakia,Uruguay,North Macedonia,Estonia,Lebanon,Egypt,Vietnam,Romania,Pakistan,Qatar,Cuba,Vatican City,Iran,Sri Lanka,Slovenia,Bangladesh,Malaysia,Latvia,Colombia';
const countryStringMedium = 'Panama,Serbia,Morocco,Hungary,Venezuela,Barbados,Thailand,Algeria,Côte d’Ivoire,Syria,Kosovo,Bhutan,Malta,Indonesia,Cambodia,Bosnia and Herzegovina,Fiji,Belarus,Peru,Bulgaria,Honduras,Angola,Tunisia,Ecuador,Monaco,Bahrain,Seychelles,Afghanistan,Singapore,Uganda,Ghana,Trinidad and Tobago,Luxembourg,Liberia,Montenegro,Kazakhstan,Mongolia,Dominican Republic,Philippines,Andorra,Cameroon,Armenia,Bahamas,Somalia,United Arab Emirates,Laos,Moldova,eSwatini,Costa Rica,San Marino,Paraguay,Zimbabwe,Liechtenstein,Papua New Guinea,Jordan,Taiwan,Kuwait,Saint Lucia,Chad,Botswana,Turkmenistan,Ethiopia,Niger,Senegal,Brunei,Lithuania';
const countryStringHard ='Azerbaijan,Haiti,Tonga,Yemen,Libya,Guatemala,Uzbekistan,Central African Republic,Micronesia,Nicaragua,Togo,El Salvador,Oman,Zambia,Palestine,Lesotho,Kiribati,Palau,Dominica,Mozambique,Kyrgyzstan,Marshall Islands,Sudan,Maldives,Antigua and Barbuda,Belize,Tuvalu,South Sudan,Burundi,Grenada,Madagascar,DR Congo,Myanmar,Malawi,Saint Vincent and the Grenadines,Cape Verde,Guyana,Samoa,Tanzania,Burkina Faso,Bolivia,Mali,Benin,Mauritania,Djibouti,Tajikistan,Sierra Leone,Suriname,Timor-Leste,Gabon,Comoros,Mauritius,Eritrea,Nauru,Rwanda,Vanuatu,Saint Kitts and Nevis,Namibia,Gambia,São Tomé and Príncipe,Republic of the Congo,Guinea,Equatorial Guinea,Solomon Islands,Guinea-Bissau';
//Turning the three strings into arrays//
const easyArray = countryStringEasy.split(',');
const mediumArray = countryStringMedium.split(',');
const hardArray =countryStringHard.split(',');
//Setting the flag size for different devices//
let flagSize; 
const mobileScreen = 350
const mediumScreen = 700;
const largeScreen=1200;
const gameDuration = 5
let intViewportWidth = window.innerWidth;
//---------------------------------Quiz-------------------------------------- //
//-----------------Timer -----------//
let seconds;
let intervaliId;
let timeRemaining;
function startTimer(seconds) {
 intervalId = setInterval(countDown, 1000);
 function countDown() {
     document.getElementById('timer').innerHTML=`Time: ${seconds}`;
     if (seconds ===0){
       clearInterval(intervalId);
       finishGame();
     }else if(seconds ===10){
       document.getElementById('timer').style.color='red';
       document.getElementById('timer').classList.add('flashing');
       {seconds = seconds -= 1;}
     }
     else {seconds = seconds -= 1};
     timeRemaining=seconds;
 }
} 
//--------Select Difficulty----------??
let gameArray =[];
let difficultyMultiplier;
document.getElementById('easy-btn').addEventListener('click',function(){
 gameArray=easyArray;
 difficultyMultiplier=0;
 getQuiz()
});
document.getElementById('medium-btn').addEventListener('click',function (){
 gameArray=mediumArray;
 difficultyMultiplier = gameArray.length;
 getQuiz()
});
document.getElementById('difficult-btn').addEventListener('click',function (){
 gameArray=hardArray;
 difficultyMultiplier = gameArray.length *2;
 getQuiz();
})
//--------START GAME------------//
function getQuiz(){
 document.getElementById('quiz-container').classList.remove('hidden');
 document.getElementById('home-container').classList.add('hidden');
 startTimer(gameDuration);
 generateQuestion() ;
}
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
const flag= document.getElementById('flag');
const button1 = document.getElementById('option1');
const button2 = document.getElementById('option2');
const button3 = document.getElementById('option3');
const button4 = document.getElementById('option4');
const answerButtonArray= [button1,button2,button3,button4];
const numberOfOptions = 4
let questionArray =[];
let correctAnswer;
let correctAnswerIndex;
let correctAnswerArray=[];
let incorrectAnswerArray=[];
let questionCount=1;
let score=0;
let correctCount=0;
console.log(incorrectAnswerArray.length)
function generateQuestion(){ 
 for (let i=0;i<numberOfOptions;i++){
   let randomCountry = gameArray[Math.floor(Math.random()*gameArray.length)];
   if (!questionArray.includes(randomCountry) && !correctAnswerArray.includes(randomCountry)){
     questionArray.push(randomCountry);
   }
   else{
     i-=1;
   }
 }
 let questionArrayIndex = 0;
 for (answerButton of answerButtonArray){
   answerButton.innerText=questionArray[questionArrayIndex];
   questionArrayIndex++;
 }
 document.getElementById('question-count').innerText = `Question ${questionCount}`;
 document.getElementById('score-count').innerText=`Score ${score}`;
 //set correct answer index to pick a correct answer
 correctAnswerIndex = Math.floor(Math.random()*questionArray.length);
 //set the correct answer using the index
 correctAnswer= questionArray[correctAnswerIndex];
 //push it to the correct answer array to avoid dupes and feedback at end of quiz
 correctAnswerArray.push(correctAnswer);
 //set correct answer flag
 let answerFlag= getKeyByValue(countryCodes,correctAnswer);
  intViewportWidth = window.innerWidth;
if(intViewportWidth<mobileScreen){
 flagSize ='h80';
} else if(intViewportWidth<mediumScreen){flagSize='h120';}
else if(intViewportWidth<largeScreen){flagSize='h240'}
else{flagSize ='w640';}
 flag.src = `https://flagcdn.com/${flagSize}/${answerFlag}.png`;
 //initialise question array ready for next question
 questionArray=[];
 document.getElementById('score-count').classList.remove('flash-once');
 for (answerButton of answerButtonArray){
   answerButton.addEventListener('click', checkAnswer)
 };
 let backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-background')
 for (answerButton of answerButtonArray){
   answerButton.style.backgroundColor= backgroundColor
 };
}
function checkAnswer (event){
 const correctColor = getComputedStyle(document.documentElement).getPropertyValue('--correct-color');
 const incorrectColor = getComputedStyle(document.documentElement).getPropertyValue('--incorrect-color');
 if (event.target.innerText === correctAnswer){ 
   event.target.style.backgroundColor = correctColor
   let isCorrect = (country)=> country === correctAnswer
   questionCount +=1;
   correctCount +=1;
   document.getElementById('score-count').classList.add('flash-once');
   score += (gameArray.findIndex(isCorrect) +1)+difficultyMultiplier
   for (answerButton of answerButtonArray){
       answerButton.removeEventListener('click', checkAnswer)}
   setTimeout(generateQuestion,1000);
 }
 else{
   event.target.style.backgroundColor= incorrectColor
   document.getElementById(`option${correctAnswerIndex + 1}`).style.backgroundColor=correctColor
   incorrectAnswerArray.push(document.getElementById(`option${correctAnswerIndex + 1}`).innerText) 
   for (answerButton of answerButtonArray){
     answerButton.removeEventListener('click', checkAnswer)}
   questionCount +=1;
   setTimeout(generateQuestion,1000);
 }}
const zeroPointsMessage = "Oh dear..."
const averageScoreMessage = 'Not bad,'
const aboveAverageScoreMessage = 'Well done,'
const perfectScoreMessage = 'Outstanding!'
let message
function finishGame(){
 document.getElementById('quiz-container').classList.add('hidden');
 document.getElementById('scorepage').classList.remove('hidden');
 if (score ===0){
   message = zeroPointsMessage;
   document.getElementById('save-score-button').classList.add('hidden')
   document.getElementById('reset-button').removeAttribute('data-bs-target')
   document.getElementById('reset-button').removeAttribute('data-bs-toggle')
   document.getElementById('reset-button').setAttribute('href',"./index.html")}
   else if( correctCount<incorrectAnswerArray.length){
     message = averageScoreMessage
    }
    else if(incorrectAnswerArray.length ===0){
      message = perfectScoreMessage
    }
     else {message = aboveAverageScoreMessage;}
 document.getElementById('score-heading').innerText=`${message} you scored ${score} points.`;
 document.getElementById('question-total').innerText=`You answered ${correctCount} out of ${questionCount} questions correctly`;
 if (incorrectAnswerArray.length>=1){
 showMistakes()}
}
const mistakeFlags = document.getElementById('mistakes');
function showMistakes(){
 mistakeFlags.classList.remove('hidden')
 for (x of incorrectAnswerArray){
   let errorFlagFigure = document.createElement('figure');
   errorFlagFigure.setAttribute('class', 'figure');
   mistakeFlags.appendChild(errorFlagFigure);
   let errorFlag = document.createElement('img');
   errorFlag.src= `https://flagcdn.com/h80/${getKeyByValue(countryCodes,x)}.png`;
   errorFlag.setAttribute('class', 'px-5 figure-img img-fluid');
   let flagCaption = document.createElement('figcaption');
   flagCaption.setAttribute('class', 'figure-caption text-center');
   let captionText = document.createTextNode(x);
   flagCaption.appendChild(captionText);
   errorFlagFigure.appendChild(errorFlag);
   errorFlag.parentNode.insertBefore(flagCaption,errorFlag.nextSibling);
 } 
}
let userName
let uniqueID
let newScoreIndex
let sortedHighScores=[]
function addName(){
 document.getElementById('scoreboard').classList.remove('hidden')
 userName = document.getElementById('nameInput').value;
 if (userName===''){
   userName='Anonymous'};
 const highScorePresent =  (window.localStorage.getItem('highScores'));
 let user = {name:userName,score:score}
 if (highScorePresent===null){
    sortedHighScores.push(user)
    window.localStorage.setItem('highScores',JSON.stringify(sortedHighScores))
    updateScoreboard()
 }
 else{
   let highScoreString =(window.localStorage.getItem('highScores'))
   uniqueID = "*"+userName 
   user ={name:uniqueID,score:score}
   let userString = JSON.stringify(user)
   let combinedStrings = joinTwoStrings(highScoreString,userString)
   let jsonStr = combinedStrings.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
    return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
  });
  sortedHighScores=JSON.parse(jsonStr)
  sortedHighScores.sort(compare)
  newScoreIndex= findHighScoreIndex(sortedHighScores)
  console.log(sortedHighScores[newScoreIndex].name=uniqueID.slice(1))
  window.localStorage.removeItem('highScores')
  window.localStorage.setItem('highScores',JSON.stringify(sortedHighScores))
  updateScoreboard()
 }
 document.getElementById('save-score-button').classList.add('hidden');
}
document.getElementById('submitName').addEventListener('click',addName);
function updateScoreboard (){   
 let rowCount=1;
 for (x of sortedHighScores){
   const tableBody = document.getElementById('table-body');
   const tableRow = document.createElement('tr');
   const tableData1 = document.createElement('td');
   const tableData2 = document.createElement('td');
   const tableData3 = document.createElement('td');
   tableBody.appendChild(tableRow);
    if (rowCount===newScoreIndex+1){
      tableRow.classList.add('table-danger')
      tableRow.appendChild(tableData1).innerText=`${rowCount}`;
      tableRow.appendChild(tableData2).innerText= `${x.name}`;
      tableRow.appendChild(tableData3).innerText=`${x.score}`;
    }
    else{
      tableRow.appendChild(tableData1).innerText=`${rowCount}`;
      tableRow.appendChild(tableData2).innerText= `${x.name}`;
      tableRow.appendChild(tableData3).innerText=`${x.score}`;}
  rowCount+=1;
 }
 document.getElementById('reset-button').removeAttribute('data-bs-target')
 document.getElementById('reset-button').removeAttribute('data-bs-toggle')
 document.getElementById('reset-button').setAttribute('href',"/index.html")
 }
 document.getElementById('closeQuiz').addEventListener('click',pauseQuiz);
 document.getElementById('close-modal1').addEventListener('click',resumeQuiz);
 document.getElementById('close-modal2').addEventListener('click',resumeQuiz);
 
 function pauseQuiz(){
   clearInterval(intervalId)
 };
 function resumeQuiz(){
   startTimer(timeRemaining)
 };
function compare( b, a ) {
  if ( a.score < b.score ){
    return -1;
  }
  if ( a.score > b.score ){
    return 1;
  }
  return 0;
}
function joinTwoStrings(string1,string2){
  return string1.slice(0,string1.length-1)+','+string2+']'
}
function findHighScoreIndex(object){
    return object.findIndex(x => x.name ===uniqueID)
}



    
