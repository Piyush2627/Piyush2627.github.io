var datatable=document.getElementById("datatable")
var createbtn=document.getElementById("createbtn")
createbtn.addEventListener('click',createfunction)

function createfunction() {
    console.log("hello")
   var tr1=document.createElement('tr');
   var td1=document.createElement('td');
   td1.innerText="1"
   var td2=document.createElement('td');
   td2.innerText="213"
   var td3=document.createElement('td');
   td3.innerText="213"
   var td4=document.createElement('td');
   td4.innerText="213"
   var td5=document.createElement('td');
   td5.innerText="213"
   var td6=document.createElement('td');
    datatable.append(tr1);
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    tr1.append(td4);
    tr1.append(td5);
    tr1.append(td6);

}