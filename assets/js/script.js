//--------------Country Names and Codes--------------------- //
let countryCodes = {
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
}
let countryStringEasy = 'Japan,Canada,United States,United Kingdom,South Korea,Brazil,France,Germany,Israel,China,Switzerland,Australia,Italy,Sweden,Greece,Finland,Spain,Ireland,Jamaica,South Africa,Turkey,India,Norway,New Zealand,Denmark,Argentina,Mexico,Belgium,Poland,Russia,Saudi Arabia,Portugal,Iceland,Croatia,Cyprus,Nepal,Netherlands,North Korea,Ukraine,Nigeria,Kenya,Georgia,Albania,Iraq,Czechia,Austria,Chile,Slovakia,Uruguay,North Macedonia,Estonia,Lebanon,Egypt,Vietnam,Romania,Pakistan,Qatar,Cuba,Vatican City,Iran,Sri Lanka,Slovenia,Bangladesh,Malaysia,Latvia,Colombia'
let countryStringMedium = 'Panama,Serbia,Morocco,Hungary,Venezuela,Barbados,Thailand,Algeria,Côte d’Ivoire,Syria,Kosovo,Bhutan,Malta,Indonesia,Cambodia,Bosnia and Herzegovina,Fiji,Belarus,Peru,Bulgaria,Honduras,Angola,Tunisia,Ecuador,Monaco,Bahrain,Seychelles,Afghanistan,Singapore,Uganda,Ghana,Trinidad and Tobago,Luxembourg,Liberia,Montenegro,Kazakhstan,Mongolia,Dominican Republic,Philippines,Andorra,Cameroon,Armenia,Bahamas,Somalia,United Arab Emirates,Laos,Moldova,eSwatini,Costa Rica,San Marino,Paraguay,Zimbabwe,Liechtenstein,Papua New Guinea,Jordan,Taiwan,Kuwait,Saint Lucia,Chad,Botswana,Turkmenistan,Ethiopia,Niger,Senegal,Brunei,Lithuania'
let countryStringHard ='Azerbaijan,Haiti,Tonga,Yemen,Libya,Guatemala,Uzbekistan,Central African Republic,Micronesia,Nicaragua,Togo,El Salvador,Oman,Zambia,Palestine,Lesotho,Kiribati,Palau,Dominica,Mozambique,Kyrgyzstan,Marshall Islands,Sudan,Maldives,Antigua and Barbuda,Belize,Tuvalu,South Sudan,Burundi,Grenada,Madagascar,DR Congo,Myanmar,Malawi,Saint Vincent and the Grenadines,Cape Verde,Guyana,Samoa,Tanzania,Burkina Faso,Bolivia,Mali,Benin,Mauritania,Djibouti,Tajikistan,Sierra Leone,Suriname,Timor-Leste,Gabon,Comoros,Mauritius,Eritrea,Nauru,Rwanda,Vanuatu,Saint Kitts and Nevis,Namibia,Gambia,São Tomé and Príncipe,Republic of the Congo,Guinea,Equatorial Guinea,Solomon Islands,Guinea-Bissau'



//Turning the three strings into arrays//
let easyArray = countryStringEasy.split(',')
let mediumArray = countryStringMedium.split(',')
let hardArray =countryStringHard.split(',')


//filter countries by difficulty and add country codes//

function filterCountries(countryArray){
  let objectToArray = Object.entries(countryCodes);
    for (x of countryArray){
      let filteredArray = objectToArray.filter(([key,value]) =>countryArray.includes(value));
      return Object.fromEntries(filteredArray)
    }
  
}  

 //---------Quiz----------- //

//-----------------Select Difficulty-----------//
 let gameArray =[]
 let difficultyMultiplier

document.getElementById('medium-btn').addEventListener('click',function getQuiz(){
  document.getElementById('quiz-container').classList.remove('hidden')
  document.getElementById('home-container').classList.add('hidden')
  gameArray = mediumArray
  difficultyMultiplier = 2
  generateQuestion()
})
document.getElementById('easy-btn').addEventListener('click',function getQuiz(){
  document.getElementById('quiz-container').classList.remove('hidden')
  document.getElementById('home-container').classList.add('hidden')
  gameArray = easyArray
  difficultyMultiplier = 1
  generateQuestion()
})
document.getElementById('difficult-btn').addEventListener('click',function getQuiz(){
  document.getElementById('quiz-container').classList.remove('hidden')
  document.getElementById('home-container').classList.add('hidden')
  gameArray = hardArray
  difficultyMultiplier = 3
  generateQuestion()
})

 //get the key of a value function//
function getKeyByValue(object, value) {
   return Object.keys(object).find(key => object[key] === value);
   
 }



const flag= document.getElementById('flag')
const button1 = document.getElementById('option1')
const button2 = document.getElementById('option2')
const button3 = document.getElementById('option3')
const button4 = document.getElementById('option4')
let questionArray =[]
let correctAnswer 
let correctAnswerIndex
let correctAnswerArray=[]
let incorrectAnswerArray=[]
let questionCount = 1
let score = 0

function generateQuestion(){ 
  
 
for (let i =0;i<4;i++){
  let randomCountry = gameArray[Math.floor(Math.random()*gameArray.length)]
  if (!questionArray.includes(randomCountry) && !correctAnswerArray.includes(randomCountry)){
    questionArray.push(randomCountry)
  }
  else{
    i-=1
   
  }
}

button1.innerText =questionArray[0];
button2.innerText =questionArray[1];
button3.innerText =questionArray[2];
button4.innerText =questionArray[3];
document.getElementById('question-count').innerText = `Question ${questionCount}/10`;
document.getElementById('score-count').innerText=`Score ${score}`;
//set correct answer index to pick a correct answer
correctAnswerIndex = Math.floor(Math.random()*questionArray.length);
//set the correct answer using the index
correctAnswer= questionArray[correctAnswerIndex]
//push it to the correct answer array to avoid dupes and feedback at end of quiz
correctAnswerArray.push(correctAnswer)
//set correct answer flag
let answerFlag= getKeyByValue(countryCodes,correctAnswer)
flag.src = `https://flagcdn.com/w320/${answerFlag}.png`
//initialise question array ready for next question
questionArray=[]
button1.addEventListener('click', checkAnswer);
button2.addEventListener('click', checkAnswer);
button3.addEventListener('click', checkAnswer);
button4.addEventListener('click', checkAnswer);
if (questionCount===15){
  finishGame()
}

button1.style.backgroundColor='#1e44a4'
button2.style.backgroundColor='#1e44a4'
button3.style.backgroundColor='#1e44a4'
button4.style.backgroundColor='#1e44a4'

}


function checkAnswer (event){
  if (event.target.innerText === correctAnswer){ 
    event.target.style.backgroundColor = 'green'
    console.log(`Well done!! ${correctAnswer} is correct!`);
    let isCorrect = (country)=> country === correctAnswer
    questionCount +=1
    score += (gameArray.findIndex(isCorrect) +1)*difficultyMultiplier
    button1.removeEventListener('click', checkAnswer);
    button2.removeEventListener('click', checkAnswer);
    button3.removeEventListener('click', checkAnswer);
    button4.removeEventListener('click', checkAnswer);
    setTimeout(generateQuestion,1000);
  }
  else{
    event.target.style.backgroundColor='red';
    
    document.getElementById(`option${correctAnswerIndex + 1}`).style.backgroundColor='green'
    incorrectAnswerArray.push(document.getElementById(`option${correctAnswerIndex + 1}`).innerText)
    console.log(`Sorry ${event.target.innerText} is incorrect!`);
    button1.removeEventListener('click', checkAnswer);
    button2.removeEventListener('click', checkAnswer);
    button3.removeEventListener('click', checkAnswer);
    button4.removeEventListener('click', checkAnswer);
    questionCount +=1
    setTimeout(generateQuestion,1000);
  }}
 

function finishGame(){
  document.getElementById('quiz-container').classList.add('hidden')
  document.getElementById('scorepage').classList.remove('hidden')
  document.getElementById('score-heading').innerText=`Congratulations you scored ${score} points. Your mistakes were ${incorrectAnswerArray}`
  
}
document.getElementById('save-score-btn').addEventListener('click', function saveScore(){
  let name = document.getElementById('name').value
  console.log(name, score)
  
  
})




