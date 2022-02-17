 var radioon = document.getElementById("on");
 var radioff = document.getElementById("off");
 var btn=document.getElementById("btn");
 var tabone = document.getElementById("tabone");
var chackbox=document.getElementById("checkbox");
var chackeboxc=document.getElementById("checkbox").value;
console.log(chackeboxc);

function fun(){
  // if(chackbox=chackeboxc){
  //   console.log("hello");
    
  // }
  // else
  // {
  //   console.log("no");
  // }
}
  
//  $('checkbox').click(function(){
//     if ($('checkbox').attr('checked')) {
//         console.log("hello");
//     }
// }) 
 
//   console.log(radioon);
//  function prop(){
// var tab= document.getElementById("tabone");
// tab.disabled=true;
//  }
// var btn = document.getElementById("disable");
function enable_text(status)
{
status=!status;	
	document.f1.other_text.disabled = status;
}