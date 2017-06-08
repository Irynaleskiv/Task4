var applyLanguage = function (lang) {
  alert('Now language is: ' + lang);
};

// getting a current language 'ua', 'ru' or 'en'
var getCurrentLanguage = function () {
  var defaultLanguage = 'ua';
  if ( document.querySelector('input[type="radio"]:checked') == null ) {
    defaultLanguage;
  }
  else {
    var defaultLanguage = document.querySelector('input[type="radio"]:checked').dataset.lang;
  }
  return defaultLanguage;
}

// check a radio button
function check() { 
    var checkLang = "[data-lang='"+currentLang+"']";
    document.querySelector(checkLang).checked = true;
    localStorage.save = true;
} 
// choose language feom LocalStorage or by getCurrentLanguage()
var currentLang = localStorage.language || getCurrentLanguage();
if (localStorage.save) {
check();
}
// added  a greeting Message according to choosen language    
greetingMessage(); 


var checkbox = document.getElementById('languages');
checkbox.onchange = function(){
  currentLang = getCurrentLanguage();
  greetingMessage();
  check();
}


// remove all text inside spans with class 'lang' 
function greetingMessage(){ 
  var langEls = document.getElementsByClassName('lang');
  for (var i=0; i<langEls.length; i++) {
    var langEl = langEls[i];
    langEl.classList.remove('visible');
  }
// added the text from span with 'lang-*'
  var langEls = document.getElementsByClassName('lang-' + currentLang);
  for (var i=0; i<langEls.length; i++) {
    var langEl = langEls[i];
    // langEl.style.display = 'inline';
    langEl.classList.add('visible');

  }
} 

// save current language in localstorage by clicking 'save' button
var $save = document.querySelector('html body button#save')
$save.addEventListener('click', function(){
  localStorage.setItem('language', currentLang);
  applyLanguage(currentLang);
});

