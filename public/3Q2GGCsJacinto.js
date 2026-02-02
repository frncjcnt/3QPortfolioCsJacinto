let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} }
else accountList = JSON.parse(acctString)

const form = document.getElementById("sForm");

form.addEventListener("submit", function(e){
if(!confirm("Are you sure all details in the submission are complete and true?"))
e.preventDefault();
});

function checkBlank(field){
    if(field.value.trim() === ""){
        field.classList.add("Error");
    }
    else{field.classList.remove("Error");}
}
form.addEventListener("blur", function(e){
    checkBlank(this);
})

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