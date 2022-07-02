
let inputs = document.getElementsByClassName('inputs');
let loginName = document.getElementById('login-name')
var loginUserName= document.getElementById('loginUserName');
var loginPassword = document.getElementById('loginPassword');
let forgetPass = document.getElementById('forget-pass');
let loginUserNameModel = document.getElementById('loginUserNameModel');
let loginPasswordModel = document.getElementById('loginPasswordModel');
let  currentIndex = 0;
if(localStorage.getItem("ClientList") == null){
    var clients = [];
}
else{
var clients = JSON.parse(localStorage.getItem("ClientList"));
}

function signup(e){
    event.preventDefault();
    // console.log("working")
    var userName = document.getElementById('userName').value;
    var regEmail = document.getElementById('regEmail').value;
    var regPassword = document.getElementById('regPassword').value;
    
    var client = {
            clientName:userName,
            clientEmail:regEmail,
            clientPassword: regPassword
         };
  clients.push(client);
 localStorage.setItem("ClientList",JSON.stringify(clients))
 localStorage.setItem("loggedIn",JSON.stringify(client.clientName))
//  console.log("user add")
 clearForm();
}
function loginFun(e){
    event.preventDefault();
     var result = "";

     var loginUserName= document.getElementById('loginUserName').value;
     var loginPassword = document.getElementById('loginPassword').value;
     var loginResult = document.getElementById('loginResult');

    var user = localStorage.getItem("ClientList");
    var data = JSON.parse(user);
//  console.log(data);
for(var i=0; i<data.length; i++){
    
    if(data[i].clientName.includes(loginUserName) && data[i].clientPassword.includes(loginPassword)){
        result ={
            resultName:data[i].clientName,
            resultPassword:data[i].clientPassword
        } ; 
    }
    // console.log(result)
   if(user == null){
    loginResult.innerHTML = "*Wrong user name";
   }else if(loginUserName == result.resultName && loginPassword == result.resultPassword ){
    loginResult.innerHTML = "logged in";
    localStorage.setItem("loggedIn",JSON.stringify(result.resultName))
   }else{
    loginResult.innerHTML = "Wrong password or user name";
   }
}
}



function clearForm(){
    for(var i = 0 ; i< inputs.length;i++){
        inputs[i].value= "" ;
    }
}
forgetPass.addEventListener("click",function(e){
    var client = clients[e.target];
    loginUserNameModel.value = client.clientName;
    loginPasswordModel.value = client.clientPassword;
     currentIndex = index;

})

function  updateData(){
    
        var client = {
        clientName:loginUserNameModel.value,
        clientPassword: loginPasswordModel.value 
    };
    clients[currentIndex].clientName = client.clientName;
    clients[currentIndex].clientEmail = client.clientEmail;
    clients[currentIndex].clientPassword = client.clientPassword;
    
    localStorage.setItem("ClientList",JSON.stringify(clients));
    
}

// start responsive nav menu
// function hide(){
//     $("#primary-nav").hide();
//   }
  $(".bar-menue").click(function(){
  $("#primary-nav").fadeToggle();
  
  });
   
  // end responsive nav menu

