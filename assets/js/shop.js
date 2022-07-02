let productId = document.getElementsByClassName('productId');
let productName = document.getElementsByClassName('productName');
let productPrice = document.getElementsByClassName('productPrice');
let productqty = document.getElementsByClassName('productqty');
let shopCart = document.getElementsByClassName('shop-cart');
let index = "";

if(localStorage.getItem("RINGS") == null){
    var ringProducts =[];
}else{
var ringProducts = JSON.parse(localStorage.getItem("RINGS"));
displayproduct();
}

function addproduct(){
    var product = {
        id:productId.value,
        name: productName.value,
        price: productPrice.value,
        qty: productqty.value
    };
    ringProducts.push(product);
   
   localStorage.setItem("RINGS",JSON.stringify(ringProducts));
}
function displayproduct(){
    var result = "";
    for(var i=0; i< ringProducts.length; i++){
        result+=`<tr>
       
        <td>${ ringProducts[i].id}</td>
        <td>${ ringProducts[i].name}</td>
        <td>${ ringProducts[i].price}</td>
        <td>${ ringProducts[i].qyt}</td>
       
        </tr>`;
    
    }
    data.innerHTML = result;
    }