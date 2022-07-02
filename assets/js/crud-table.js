let userName = document.getElementById('userName')
let regEmail = document.getElementById('regEmail')
let regPassword = document.getElementById('regPassword')
let register = document.getElementById('register')
let dataTable = document.getElementById('data')
let inputs = document.getElementsByClassName('inputs');
let  currentIndex = 0;
// let clients = [];
if(localStorage.getItem("ClientList") == null){
    var clients = [];
}
else{
var clients = JSON.parse(localStorage.getItem("ClientList"));
displayData();
}


function  displayData(){
    let result = "";
    for (let i = 0; i<clients.length;i++){
        result +=`<tr>
        <td>${i}</td>
        <td>${clients[i].clientName}</td>
         <td>${clients[i].clientEmail}</td>
         <td>${clients[i].clientPassword}</td>
         
         <td><button type="button" class="btn upBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = getData(${i})>
         <i class="fa-solid fa-paintbrush"></i>
       </button></td>
         <td><button class="delBtn" onclick="deleteClient(${i})"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
         `
    }
    data.innerHTML = result;
    }

    function  getData(index){
        var client = clients[index];
        userName.value = clients.clientName;
        regEmail.value = client.clientEmail;
        regPassword.value = client.clientPassword;
         currentIndex = index;
    }
    function  updateData(){
    
        var client = {
            clientName:userName.value,
            clientEmail:regEmail.value,
            clientPassword: regPassword.value
        };
        clients[currentIndex]. clientName = client. clientName;
        clients[currentIndex].clientEmail = client.clientEmail;
        clients[currentIndex].clientPassword = client.clientPassword;
        
        localStorage.setItem("ClientList",JSON.stringify(clients));
        
    
    }
   

function deleteClient(index){
       clients.splice(index,1);
       
      localStorage.setItem("ClientList",JSON.stringify(clients))
            displayData();
          }


 document.getElementById('deleteAll').onclick = function(){
          localStorage.removeItem("ClientList");
          clients=[];
          data.innerHTML = "";
 }
