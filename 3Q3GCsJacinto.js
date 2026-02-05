let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} }
else accountList = JSON.parse(acctString)

const form = document.getElementById("s");
const storageKey = "clubSignUps";

function confirmSubmit() {
    return confirm("Are you sure you want to submit this application?");
}

function confirmReset() {
    return confirm("Are you sure you want to reset the form?");
}

/*form.addEventListener("submit", function(e){
if(!confirm(confirmSubmit()))
e.preventDefault();
});
*/
function checkBlank(field){
    if(field.value.trim() === ""){
        field.classList.add("Error");
    }
    else{field.classList.remove("Error");}
}
form.addEventListener("blur", function(e){
    checkBlank(this);
})
/*
form.addEventListener("reset", function(e) {
    if (!confirm(confirmReset())) {
      e.preventDefault(); 
    }
  });
  */
  function changeColor(ele) {
    console.log(ele);
    ele.style.backgroundColor = "blue";
  } 

function saveSignup(event){
  event.preventDefault();

  if(!confirmSubmit()){
    return;
  }

  const signUp = {
    studentID: form.studentID.value,
    userName: form.userName.value,
    birthDay: form.birthDay.value,
    eMail: form.eMail.value,
    mobilePhone: form.mobilePhone.value,
    gradeLevel: form.gradeLevel.value,
    residencyType: form.residencyType.value,
    preferredEC: form.preferredEC.value,
    club: form.preferredEC.value,
    reason: form.reason.value
  };

  let signups = localStorage.getItem(storageKey);

    if (signups) {signups = JSON.parse(signups);}
    else{signups = [];}
   
    signups.push(signUp);
 
    localStorage.setItem(storageKey, JSON.stringify(signups));
    alert("Successful sign-up!");
    form.reset();
}

function goToView() {
    window.location.href = "viewSignUps.html";
}


