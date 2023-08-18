document.getElementById('submit').addEventListener('click', submitSuccess);
function submitSuccess(e) {
  const email = document.getElementsByClassName('text-and-input__inputfield');
    e.preventDefault();
    const emailInput = email[0].value;
    if( emailInput && emailInput.includes('@') && emailInput.includes('.com','.net','.edu','.biz','.xyz')){
    document.getElementById("newsletter").classList.add("hide");
    document.getElementById("successDiv").classList.add("showflex");
    
    }
    else{
      document.getElementById("inputError").classList.add("show");
      document.getElementById("inputID").style.borderColor = "#D57A7B";
      document.getElementById("inputID").style.color = "#D57A7B";
    }
    
  }
  document.getElementById('dismiss').addEventListener('click', Dismissfunc);
  function Dismissfunc(e) {
    document.getElementById("successDiv").style.display = "none";
    location.reload();
    document.getElementById("newsletter").classList.add("showgrid");
  }
  