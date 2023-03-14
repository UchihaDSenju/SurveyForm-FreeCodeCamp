// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4XPF0Zsgs2BRWkzRSSCoqlZE5U7dvXZc",
  authDomain: "file-upload-b719e.firebaseapp.com",
  databaseURL: "https://file-upload-b719e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "file-upload-b719e",
  storageBucket: "file-upload-b719e.appspot.com",
  messagingSenderId: "4691657595",
  appId: "1:4691657595:web:8e5af1616bf2e9fd03f3de"
};

// Initializing the firebase app
firebase.initializeApp(firebaseConfig);

// Database reference 
var surveyFormDB = firebase.database().ref('surveyForm');
var checkbox = document.querySelectorAll('.improve');
var radio = document.querySelectorAll('.recommend');
var form = document.getElementById('survey-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    var name = getElementValue('#name');
    var email = getElementValue('#email');
    var age = getElementValue('#age');
    var role = getElementValue('#role');
    var willRecommend = getCheckboxValue(radio);
    var favFeature = getElementValue('#favFeature');
    var checkboxValue = getCheckboxValue(checkbox);
    var comments = getElementValue('#comments');
    
    console.log(name, email, age, role, willRecommend, favFeature, checkboxValue, comments);
})

const getElementValue = function(val){
    return document.querySelector(val).value;
}

const getCheckboxValue = function(elem){
  let val = "";
  for(let i =0; i<elem.length; i++){
    if(elem[i].checked){
      val += elem[i].value + " ";
    }
  }
  return val;
}


