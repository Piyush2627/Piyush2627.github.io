let btnn=document.getElementById("btnn");
function pass(){
  let password = document.getElementById('passwordid').value;
    console.log(password);
  if (password== 'shiv')
  {

      location.href = "login.html"
    } else {
      alert("wrong");
    console.log("fail")
  }
}