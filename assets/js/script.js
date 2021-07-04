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
let countryStringEasy = 'Albania,Argentina,Australia,Austria,Bangladesh,Belgium,Brazil,Canada,Chile,China,Colombia,Croatia,Cuba,Cyprus,Czechia,Denmark,Egypt,Estonia,Finland,France,Georgia,Germany,Greece,Iceland,India,Iran,Iraq,Ireland,Israel,Italy,Jamaica,Japan,Kenya,Latvia,Lebanon,Malaysia,Mexico,Nepal,Netherlands,New Zealand,Nigeria,North Korea,North Macedonia,Norway,Pakistan,Poland,Portugal,Qatar,Romania,Russia,Saudi Arabia,Slovakia,Slovenia,South Africa,South Korea,Spain,Sri Lanka,Sweden,Switzerland,Turkey,Ukraine,United Kingdom,United States,Uruguay,Vatican City,Vietnam'
let countryStringMedium = 'Afghanistan,Algeria,Andorra,Angola,Armenia,Bahamas,Bahrain,Barbados,Belarus,Bhutan,Bosnia and Herzegovina,Botswana,Brunei,Bulgaria,Cambodia,Cameroon,Chad,Costa Rica,Côte d’Ivoire,Dominican Republic,Ecuador,eSwatini,Ethiopia,Fiji,Ghana,Honduras,Hungary,Indonesia,Jordan,Kazakhstan,Kosovo,Kuwait,Laos,Liberia,Liechtenstein,Lithuania,Luxembourg,Malta,Moldova,Monaco,Mongolia,Montenegro,Morocco,Niger,Panama,Papua New Guinea,Paraguay,Peru,Philippines,Saint Lucia,San Marino,Senegal,Serbia,Seychelles,Singapore,Somalia,Syria,Taiwan,Thailand,Trinidad and Tobago,Tunisia,Turkmenistan,United Arab Emirates,Uganda,Venezuela,Zimbabwe'
let countryStringHard ='Antigua and Barbuda,Azerbaijan,Belize,Benin,Bolivia,Burkina Faso,Burundi,Cape Verde,Central African Republic,Comoros,DR Congo,Djibouti,Dominica,El Salvador,Equatorial Guinea,Eritrea,Gabon,Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana,Haiti,Kiribati,Kyrgyzstan,Lesotho,Libya,Madagascar,Malawi,Maldives,Mali,Marshall Islands,Mauritania,Mauritius,Micronesia,Mozambique,Myanmar,Namibia,Nauru,Nicaragua,Oman,Palau,Palestine,Republic of the Congo,Rwanda,Samoa,São Tomé and Príncipe,Sierra Leone,Solomon Islands,South Sudan,Saint Vincent and the Grenadines,Saint Kitts and Nevis,Sudan,Suriname,Tajikistan,Tanzania,Gambia,Timor-Leste,Togo,Tonga,Tuvalu,Uzbekistan,Vanuatu,Yemen,Zambia'



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

document.getElementById('medium-btn').addEventListener('click',function getQuiz(){
  document.getElementById('quiz-container').classList.remove('hidden')
  document.getElementById('home-container').classList.add('hidden')
  gameArray = mediumArray
  generateQuestion()
})
document.getElementById('easy-btn').addEventListener('click',function getQuiz(){
  document.getElementById('quiz-container').classList.remove('hidden')
  document.getElementById('home-container').classList.add('hidden')
  gameArray = easyArray
  generateQuestion()
})
document.getElementById('difficult-btn').addEventListener('click',function getQuiz(){
  document.getElementById('quiz-container').classList.remove('hidden')
  document.getElementById('home-container').classList.add('hidden')
  gameArray = hardArray
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
flag.src = `https://flagcdn.com/w640/${answerFlag}.png`
//initialise question array ready for next question
questionArray=[]
button1.addEventListener('click', checkAnswer);
button2.addEventListener('click', checkAnswer);
button3.addEventListener('click', checkAnswer);
button4.addEventListener('click', checkAnswer);
if (questionCount===11){
  finishGame()
}



}


function checkAnswer (event){
  if (event.target.innerText === correctAnswer){ 
    console.log(`Well done!! ${correctAnswer} is correct!`);
    score +=10
    questionCount +=1
    button1.removeEventListener('click', checkAnswer);
    button2.removeEventListener('click', checkAnswer);
    button3.removeEventListener('click', checkAnswer);
    button4.removeEventListener('click', checkAnswer);
    setTimeout(generateQuestion,1000);
  }
  else{
    console.log(`Sorry ${event.target.innerText} is incorrect!`);
    button1.removeEventListener('click', checkAnswer);
    button2.removeEventListener('click', checkAnswer);
    button3.removeEventListener('click', checkAnswer);
    button4.removeEventListener('click', checkAnswer);
    questionCount +=1
    setTimeout(generateQuestion,1000);
  }}
 

document.getElementById('close').addEventListener('click', function(){alert('Do not leave')})