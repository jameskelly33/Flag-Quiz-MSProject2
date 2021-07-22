//--------------Country Names and Codes--------------------- //
const countryCodes = {
  "ad": "Andorra",
  "ae": "United Arab Emirates",
  "af": "Afghanistan",
  "ag": "Antigua and Barbuda",
  "ai": "Anguilla",
  "al": "Albania",
  "am": "Armenia",
  "ao": "Angola",
  "aq": "Antarctica",
  "ar": "Argentina",
  "as": "American Samoa",
  "at": "Austria",
  "au": "Australia",
  "aw": "Aruba",
  "ax": "Åland Islands",
  "az": "Azerbaijan",
  "ba": "Bosnia and Herzegovina",
  "bb": "Barbados",
  "bd": "Bangladesh",
  "be": "Belgium",
  "bf": "Burkina Faso",
  "bg": "Bulgaria",
  "bh": "Bahrain",
  "bi": "Burundi",
  "bj": "Benin",
  "bl": "Saint Barthélemy",
  "bm": "Bermuda",
  "bn": "Brunei",
  "bo": "Bolivia",
  "bq": "Caribbean Netherlands",
  "br": "Brazil",
  "bs": "Bahamas",
  "bt": "Bhutan",
  "bv": "Bouvet Island",
  "bw": "Botswana",
  "by": "Belarus",
  "bz": "Belize",
  "ca": "Canada",
  "cc": "Cocos (Keeling) Islands",
  "cd": "DR Congo",
  "cf": "Central African Republic",
  "cg": "Republic of the Congo",
  "ch": "Switzerland",
  "ci": "Côte d’Ivoire",
  "ck": "Cook Islands",
  "cl": "Chile",
  "cm": "Cameroon",
  "cn": "China",
  "co": "Colombia",
  "cr": "Costa Rica",
  "cu": "Cuba",
  "cv": "Cape Verde",
  "cw": "Curaçao",
  "cx": "Christmas Island",
  "cy": "Cyprus",
  "cz": "Czechia",
  "de": "Germany",
  "dj": "Djibouti",
  "dk": "Denmark",
  "dm": "Dominica",
  "do": "Dominican Republic",
  "dz": "Algeria",
  "ec": "Ecuador",
  "ee": "Estonia",
  "eg": "Egypt",
  "eh": "Western Sahara",
  "er": "Eritrea",
  "es": "Spain",
  "et": "Ethiopia",
  "eu": "European Union",
  "fi": "Finland",
  "fj": "Fiji",
  "fk": "Falkland Islands",
  "fm": "Micronesia",
  "fo": "Faroe Islands",
  "fr": "France",
  "ga": "Gabon",
  "gb": "United Kingdom",
  "gb-eng": "England",
  "gb-nir": "Northern Ireland",
  "gb-sct": "Scotland",
  "gb-wls": "Wales",
  "gd": "Grenada",
  "ge": "Georgia",
  "gf": "French Guiana",
  "gg": "Guernsey",
  "gh": "Ghana",
  "gi": "Gibraltar",
  "gl": "Greenland",
  "gm": "Gambia",
  "gn": "Guinea",
  "gp": "Guadeloupe",
  "gq": "Equatorial Guinea",
  "gr": "Greece",
  "gs": "South Georgia",
  "gt": "Guatemala",
  "gu": "Guam",
  "gw": "Guinea-Bissau",
  "gy": "Guyana",
  "hk": "Hong Kong",
  "hm": "Heard Island and McDonald Islands",
  "hn": "Honduras",
  "hr": "Croatia",
  "ht": "Haiti",
  "hu": "Hungary",
  "id": "Indonesia",
  "ie": "Ireland",
  "il": "Israel",
  "im": "Isle of Man",
  "in": "India",
  "io": "British Indian Ocean Territory",
  "iq": "Iraq",
  "ir": "Iran",
  "is": "Iceland",
  "it": "Italy",
  "je": "Jersey",
  "jm": "Jamaica",
  "jo": "Jordan",
  "jp": "Japan",
  "ke": "Kenya",
  "kg": "Kyrgyzstan",
  "kh": "Cambodia",
  "ki": "Kiribati",
  "km": "Comoros",
  "kn": "Saint Kitts and Nevis",
  "kp": "North Korea",
  "kr": "South Korea",
  "kw": "Kuwait",
  "ky": "Cayman Islands",
  "kz": "Kazakhstan",
  "la": "Laos",
  "lb": "Lebanon",
  "lc": "Saint Lucia",
  "li": "Liechtenstein",
  "lk": "Sri Lanka",
  "lr": "Liberia",
  "ls": "Lesotho",
  "lt": "Lithuania",
  "lu": "Luxembourg",
  "lv": "Latvia",
  "ly": "Libya",
  "ma": "Morocco",
  "mc": "Monaco",
  "md": "Moldova",
  "me": "Montenegro",
  "mf": "Saint Martin",
  "mg": "Madagascar",
  "mh": "Marshall Islands",
  "mk": "North Macedonia",
  "ml": "Mali",
  "mm": "Myanmar",
  "mn": "Mongolia",
  "mo": "Macau",
  "mp": "Northern Mariana Islands",
  "mq": "Martinique",
  "mr": "Mauritania",
  "ms": "Montserrat",
  "mt": "Malta",
  "mu": "Mauritius",
  "mv": "Maldives",
  "mw": "Malawi",
  "mx": "Mexico",
  "my": "Malaysia",
  "mz": "Mozambique",
  "na": "Namibia",
  "nc": "New Caledonia",
  "ne": "Niger",
  "nf": "Norfolk Island",
  "ng": "Nigeria",
  "ni": "Nicaragua",
  "nl": "Netherlands",
  "no": "Norway",
  "np": "Nepal",
  "nr": "Nauru",
  "nu": "Niue",
  "nz": "New Zealand",
  "om": "Oman",
  "pa": "Panama",
  "pe": "Peru",
  "pf": "French Polynesia",
  "pg": "Papua New Guinea",
  "ph": "Philippines",
  "pk": "Pakistan",
  "pl": "Poland",
  "pm": "Saint Pierre and Miquelon",
  "pn": "Pitcairn Islands",
  "pr": "Puerto Rico",
  "ps": "Palestine",
  "pt": "Portugal",
  "pw": "Palau",
  "py": "Paraguay",
  "qa": "Qatar",
  "re": "Réunion",
  "ro": "Romania",
  "rs": "Serbia",
  "ru": "Russia",
  "rw": "Rwanda",
  "sa": "Saudi Arabia",
  "sb": "Solomon Islands",
  "sc": "Seychelles",
  "sd": "Sudan",
  "se": "Sweden",
  "sg": "Singapore",
  "sh": "Saint Helena, Ascension and Tristan da Cunha",
  "si": "Slovenia",
  "sj": "Svalbard and Jan Mayen",
  "sk": "Slovakia",
  "sl": "Sierra Leone",
  "sm": "San Marino",
  "sn": "Senegal",
  "so": "Somalia",
  "sr": "Suriname",
  "ss": "South Sudan",
  "st": "São Tomé and Príncipe",
  "sv": "El Salvador",
  "sx": "Sint Maarten",
  "sy": "Syria",
  "sz": "eSwatini",
  "tc": "Turks and Caicos Islands",
  "td": "Chad",
  "tf": "French Southern and Antarctic Lands",
  "tg": "Togo",
  "th": "Thailand",
  "tj": "Tajikistan",
  "tk": "Tokelau",
  "tl": "Timor-Leste",
  "tm": "Turkmenistan",
  "tn": "Tunisia",
  "to": "Tonga",
  "tr": "Turkey",
  "tt": "Trinidad and Tobago",
  "tv": "Tuvalu",
  "tw": "Taiwan",
  "tz": "Tanzania",
  "ua": "Ukraine",
  "ug": "Uganda",
  "um": "United States Minor Outlying Islands",
  "un": "United Nations",
  "us": "United States",
  "us-ak": "Alaska",
  "us-al": "Alabama",
  "us-ar": "Arkansas",
  "us-az": "Arizona",
  "us-ca": "California",
  "us-co": "Colorado",
  "us-ct": "Connecticut",
  "us-de": "Delaware",
  "us-fl": "Florida",
  "us-ga": "Georgia",
  "us-hi": "Hawaii",
  "us-ia": "Iowa",
  "us-id": "Idaho",
  "us-il": "Illinois",
  "us-in": "Indiana",
  "us-ks": "Kansas",
  "us-ky": "Kentucky",
  "us-la": "Louisiana",
  "us-ma": "Massachusetts",
  "us-md": "Maryland",
  "us-me": "Maine",
  "us-mi": "Michigan",
  "us-mn": "Minnesota",
  "us-mo": "Missouri",
  "us-ms": "Mississippi",
  "us-mt": "Montana",
  "us-nc": "North Carolina",
  "us-nd": "North Dakota",
  "us-ne": "Nebraska",
  "us-nh": "New Hampshire",
  "us-nj": "New Jersey",
  "us-nm": "New Mexico",
  "us-nv": "Nevada",
  "us-ny": "New York",
  "us-oh": "Ohio",
  "us-ok": "Oklahoma",
  "us-or": "Oregon",
  "us-pa": "Pennsylvania",
  "us-ri": "Rhode Island",
  "us-sc": "South Carolina",
  "us-sd": "South Dakota",
  "us-tn": "Tennessee",
  "us-tx": "Texas",
  "us-ut": "Utah",
  "us-va": "Virginia",
  "us-vt": "Vermont",
  "us-wa": "Washington",
  "us-wi": "Wisconsin",
  "us-wv": "West Virginia",
  "us-wy": "Wyoming",
  "uy": "Uruguay",
  "uz": "Uzbekistan",
  "va": "Vatican City",
  "vc": "Saint Vincent and the Grenadines",
  "ve": "Venezuela",
  "vg": "British Virgin Islands",
  "vi": "United States Virgin Islands",
  "vn": "Vietnam",
  "vu": "Vanuatu",
  "wf": "Wallis and Futuna",
  "ws": "Samoa",
  "xk": "Kosovo",
  "ye": "Yemen",
  "yt": "Mayotte",
  "za": "South Africa",
  "zm": "Zambia",
  "zw": "Zimbabwe"
};
let countryStringEasy = 'Japan,Canada,United States,United Kingdom,South Korea,Brazil,France,Germany,Israel,China,Switzerland,Australia,Italy,Sweden,Greece,Finland,Spain,Ireland,Jamaica,South Africa,Turkey,India,Norway,New Zealand,Denmark,Argentina,Mexico,Belgium,Poland,Russia,Saudi Arabia,Portugal,Iceland,Croatia,Cyprus,Nepal,Netherlands,North Korea,Ukraine,Nigeria,Kenya,Georgia,Albania,Iraq,Czechia,Austria,Chile,Slovakia,Uruguay,North Macedonia,Estonia,Lebanon,Egypt,Vietnam,Romania,Pakistan,Qatar,Cuba,Vatican City,Iran,Sri Lanka,Slovenia,Bangladesh,Malaysia,Latvia,Colombia';
let countryStringMedium = 'Panama,Serbia,Morocco,Hungary,Venezuela,Barbados,Thailand,Algeria,Côte d’Ivoire,Syria,Kosovo,Bhutan,Malta,Indonesia,Cambodia,Bosnia and Herzegovina,Fiji,Belarus,Peru,Bulgaria,Honduras,Angola,Tunisia,Ecuador,Monaco,Bahrain,Seychelles,Afghanistan,Singapore,Uganda,Ghana,Trinidad and Tobago,Luxembourg,Liberia,Montenegro,Kazakhstan,Mongolia,Dominican Republic,Philippines,Andorra,Cameroon,Armenia,Bahamas,Somalia,United Arab Emirates,Laos,Moldova,eSwatini,Costa Rica,San Marino,Paraguay,Zimbabwe,Liechtenstein,Papua New Guinea,Jordan,Taiwan,Kuwait,Saint Lucia,Chad,Botswana,Turkmenistan,Ethiopia,Niger,Senegal,Brunei,Lithuania';
let countryStringHard ='Azerbaijan,Haiti,Tonga,Yemen,Libya,Guatemala,Uzbekistan,Central African Republic,Micronesia,Nicaragua,Togo,El Salvador,Oman,Zambia,Palestine,Lesotho,Kiribati,Palau,Dominica,Mozambique,Kyrgyzstan,Marshall Islands,Sudan,Maldives,Antigua and Barbuda,Belize,Tuvalu,South Sudan,Burundi,Grenada,Madagascar,DR Congo,Myanmar,Malawi,Saint Vincent and the Grenadines,Cape Verde,Guyana,Samoa,Tanzania,Burkina Faso,Bolivia,Mali,Benin,Mauritania,Djibouti,Tajikistan,Sierra Leone,Suriname,Timor-Leste,Gabon,Comoros,Mauritius,Eritrea,Nauru,Rwanda,Vanuatu,Saint Kitts and Nevis,Namibia,Gambia,São Tomé and Príncipe,Republic of the Congo,Guinea,Equatorial Guinea,Solomon Islands,Guinea-Bissau';
//Turning the three strings into arrays//
const easyArray = countryStringEasy.split(',');
const mediumArray = countryStringMedium.split(',');
const hardArray =countryStringHard.split(',');
//Setting the flag size for different devices//
let flagHeight;
const smallScreen = 350;
const medScreen = 900;
let intViewportWidth = window.innerWidth;
if(intViewportWidth <smallScreen){
 flagHeight =120;
} else if(intViewportWidth<medScreen){flagHeight=120;}
else{flagHeight =240;}
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
 startTimer(29);
 generateQuestion() ;
}
//get the key of a value function//
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
const flag= document.getElementById('flag');
const button1 = document.getElementById('option1');
const button2 = document.getElementById('option2');
const button3 = document.getElementById('option3');
const button4 = document.getElementById('option4');
const answerButtonArray= [button1,button2,button3,button4];
let questionArray =[];
let correctAnswer;
let correctAnswerIndex;
let correctAnswerArray=[];
let incorrectAnswerArray=[];
let questionCount=1;
let score=0;
let correctCount=0;

function generateQuestion(){ 
 for (let i=0;i<4;i++){
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
 flag.src = `https://flagcdn.com/h${flagHeight}/${answerFlag}.png`;
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
function finishGame(){
 document.getElementById('quiz-container').classList.add('hidden');
 document.getElementById('scorepage').classList.remove('hidden');
 document.getElementById('score-heading').innerText=`Congratulations you scored ${score} points.`;
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
let sortedHighScores={};
function addName(){
 document.getElementById('scoreboard').classList.remove('hidden')
 let userName = document.getElementById('nameInput').value;
 if (userName===''){
   userName='Anonymous'};
 const highScorePresent =  (window.localStorage.getItem('highScores'));
 let user ={[userName]:score};
 if (highScorePresent===null){
   let user ={[userName]:score}
   window.localStorage.setItem('highScores',JSON.stringify(user))
   sortedHighScores=user;
 }
 else{
   let highScoreObject = JSON.parse(window.localStorage.getItem('highScores'))
   highScoreObject[userName] = score;
   sortedHighScores =sortObject(highScoreObject)
   window.localStorage.removeItem('highScores')
   window.localStorage.setItem('highScores', JSON.stringify(sortedHighScores))
   updateScoreboard(sortedHighScores)
 }
 document.getElementById('save-score-button').classList.add('hidden');
}
document.getElementById('submitName').addEventListener('click',addName);
function sortObject(object){
 return Object.fromEntries(
   Object.entries(object).sort(([,a],[,b]) => b-a))
};
function updateScoreboard (userScores){   
 let rowCount=1;
 for (x of Object.values(userScores)){
   const tableBody = document.getElementById('table-body');
   const tableRow = document.createElement('tr');
   const tableData1 = document.createElement('td');
   const tableData2 = document.createElement('td');
   const tableData3 = document.createElement('td');
   tableBody.appendChild(tableRow);
   tableRow.appendChild(tableData1).innerText=`${rowCount}`;
   tableRow.appendChild(tableData2).innerText= `${getKeyByValue(userScores,x)}`;
   tableRow.appendChild(tableData3).innerText=`${x}`;
   rowCount+=1;
 }
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