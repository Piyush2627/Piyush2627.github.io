const mydi = document.getElementById("mydiv");
const mybtns = document.querySelectorAll(".keys");
var text = document.getElementById("inputfild");
var numberbtn=document.querySelectorAll(".isnumb");
numberbtn.forEach((e) =>{
  e.addEventListener("click", ()=>{
    text.value+=e.innerHTML
  })
})

mybtns.forEach((button) => {
  button.addEventListener("click", () => {
      
    if (button.innerHTML == "+"){
       text.value +="+"
    }
    else if(button.innerHTML =="-"){
      text.value+="-"
    }
    else if(button.innerHTML == "x"){
      text.value+="*"
    }
    else if(button.innerHTML =="/"){
      text.value+="/"
    }
    else if (button.innerHTML == "="){
      var textvalue = text.value;
      var ans = eval(textvalue);
      text.value=ans;
    }
    else if (button.innerHTML =="AC"){
      text.value=""
    }
    else if(button.innerHTML== "DEL"){
    var textsrting = text.value.length;
      var newstring= text.value.slice(0,textsrting -1);
      text.value=newstring;
     }







  }
  
  );
});

// console.log(numb)s
// function one(){
// if (textvalue.value ==""){
//     console.log("no");
//         //   alert("NO value");
//           }
//             else {
//             console.log(textvalue.value);

//             }
//       for (let index = 0; index < mybtns.length; index++) {
//             console.log(mybtns[index])

//       }
//     }
