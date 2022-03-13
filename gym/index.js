let btnn=document.getElementById("btnn");
function pass(){
  let password = document.getElementById('passwordid').value;
    console.log(password);
  if (password== 'shiv')
  {
      console.log("pass")
      location.href = "login.html"
    } else {
    console.log("fail")
  }
}