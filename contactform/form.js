const submitBtn = document.querySelector('form button[type="submit"]');

// get data from the form
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const subjectField = document.getElementById('subject');
const messageField = document.getElementById('message');

// get error messages from each field
const nameErrorTxt = document.getElementById('name-error');
const emailErrorTxt = document.getElementById('email-error');
const subjectErrorTxt = document.getElementById('subject-error');
const messageErrorTxt = document.getElementById('message-error');

// hide form button if no value has been entered
// submitBtn.style.visibility = "hidden";

// check all fields if data has been included
submitBtn.addEventListener("click", (e) => {
  if(checkNameFieldValue() && checkEmailFieldValue() && checkSubjectFieldValue() && checkMessageFieldValue()){
    e.preventDefault();
  }
  // checkNameFieldValue();
  // checkEmailFieldValue();
  // checkSubjectFieldValue();
  // checkMessageFieldValue();
});

function checkNameFieldValue(){
  nameValue = nameField.value.trim();
  if (nameValue.length < 4){
    nameErrorTxt.style.display = "block";
    return false;
  }
      nameErrorTxt.style.display = "none";
  return true;
}

function checkEmailFieldValue(){
  emailValue = emailField.value.trim();
  if (emailValue.length < 4){
    emailErrorTxt.style.display = "block";
    return false;
  }
      emailErrorTxt.style.display = "none";
  return true;
}

function checkSubjectFieldValue(){
  subjectValue = subjectField.value.trim();
  if (subjectValue.length < 4){
    subjectErrorTxt.style.display = "block";
    return false;
  }
      subjectErrorTxt.style.display = "none";
  return true;
}

function checkMessageFieldValue(){
  messageValue = messageField.value.trim();
  if (messageValue.length < 4){
    messageErrorTxt.style.display = "block";
    return false;
  }
      messageErrorTxt.style.display = "none";
  return true;
}
