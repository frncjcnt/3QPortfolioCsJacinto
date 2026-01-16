let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} }
else accountList = JSON.parse(acctString)

const form = document.getElementById("sForm");

form.addEventListener("submit", function(e){
e.preventDefault();
});
/*
function confirmSubmission(){
    confirm("Are you sure all details in the submission are complete and true?");
    return 1;
}
function confirmReset(){
    confirm("Are you sure you want to reset this form?");
    return 1;
}
function checkBlank(field){
    if(field.value.trim() === ""){
        field.classList.add("Error");
    }
    else{field.classList.remove("Error");}
}

function errorColor(ele){
    ele.style.backgroundColor = "#ff0000";
}*/

form.addEventListener("reset", function(e) { // 
    // Ask for confirmation before clearing
    if (!confirm("Sure you want to clear your data?")) {
      e.preventDefault(); // cancel the reset if user clicks "Cancel"
    }
  });
  
  // called when user is on the input field
  function changeColor(ele) {
    console.log(ele);
    ele.style.backgroundColor = "blue";
  } 