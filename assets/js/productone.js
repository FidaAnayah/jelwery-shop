var  productName=document.getElementById('productName');
var imgSource=document.getElementById('addfile');
var productPrice=document.getElementById('productPrice');
var addCart=document.getElementById('click');
var data=document.getElementById('data');
var inputs=document.getElementsByClassName('inputs');
var productOne=document.getElementById('productOne');
var currentindex=0;
if(localStorage.getItem("productList")==null){
    var products=[];
}
else{
    var products=JSON.parse(localStorage.getItem("productList"));
    displayData()
    
}

addCart.onclick = function(){
    if(addCart.innerHTML=="ADD PRODUCT"){
loadImageAsBase64(function(base64){
    addProduct(base64);
    clearForm();
    displayData()
   
  
})
     
    }

    else{
        loadImageAsBase64(function(base64){
            updateProduct(base64);
            displayData();
            clearForm();

    
        });
         
      
       
}

}
function clearForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";

    }
    addCart.innerHTML="ADD PRODUCT"
}

function addProduct(imgBase64){
    var product={
        source:imgBase64,
        name:productName.value,
        price:productPrice.value,
    };
    products.push(product);
    localStorage.setItem("productList",JSON.stringify(products));

}


function displayData(){
    var result="";
    for(var i=0;i<products.length;i++ ){

        result+=`<tr>
        <td>${i}</td>
        <td><img src="${products[i].source} "class="w-25"></td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td><button class="btn btn-success" onclick=getProductData(${i})>update</button></td>
        <td> <button class="btn btn-danger" onclick=deleteProduct(${i})> delete </button> </td>
        </tr>`;
    }
data.innerHTML=result;
}
 
function deleteProduct(index){
products.splice(index,1);
localStorage.setItem("productList",JSON.stringify(products));
displayData();
}

function getProductData(index){
var poduct=products[index];
productName.value=poduct.name;
imgSource.imgBase64=poduct.source;
productPrice.value=poduct.price;
addCart.innerHTML="update product";
currentindex=index;
console.log(products);
}

function updateProduct(base64){
    var product={
        source:base64 || products[currentindex].source,
        name:productName.value,
        price:productPrice.value,
    };
    products[currentindex].source=product.source;
    products[currentindex].name=product.name;
    products[currentindex].price=product.price;
localStorage.setItem("productList",JSON.stringify(products));

}

function loadImageAsBase64(onLoadSuccess){
    const file=imgSource.files[0];
    const reader=new FileReader();
    reader.addEventListener("load", function(){
        onLoadSuccess(reader.result);
    
    },
    false
    );
    if(file){
        reader.readAsDataURL(file);
}
else{
    onLoadSuccess();
}
}

function search(searchText){
    var result="";
    for(i=0;i<products.length;i++ ){
        if(products[i].name.toLowerCase().includes(searchText.toLowerCase())){

      
           

                result+=`<tr>
                <td>${i}</td>
                <td><img src="${products[i].source} "class="w-25"></td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td><button class="btn btn-success" onclick=getProductData(${i})>update</button></td>
                <td> <button class="btn btn-danger" onclick=deleteProduct(${i})> delete </button> </td>
                </tr>`;
            }
    }
    data.innerHTML=result;
    
}

function displayProductData(){
    var resultone="";
    console.log(products);
    for(var i=0;i<products.length;i++ ){
    console.log(products);

        resultone+=`
        <div class="product-item col-md-2 ">
      <div class="item">
<div class="item-content">
  <div class="item-img-discription ">
  <div class="item-img">
    <img src="${products[i].source}" alt="" class="primary-img w-100" id="img">
    <img src="assets/img/product12.webp" alt="" class="secondary-img  w-100">
    <div>
      <button type="button" class=" quick_button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Quick View
         </button>
   </div>
  </div>
  <div class="product-description text-center pt-3">
    <h4>${products[i].name}</h4>
    <p>aliquam furniture</p>
    </div>
    <div class="line"></div>
    <div class="product-description-two d-flex flex-wrap  text-center justify-content-center pt-3">
      <span class="price-one   me-2"  >$89.00</span>
      <span class="price-two text-warning "id="priceOne">${products[i].price}</span>
    </div>
  </div>
    <div class="shipping-description text-center pt-3">
       <div class="stars text-warning text-center">
        <i class="fa-light fa-star"></i>
        <i class="fa-light fa-star"></i>
        <i class="fa-light fa-star"></i>
        <i class="fa-light fa-star"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus!</p>
      <div class="line"></div>
  
      <div class="add-buttons d-flex pt-4 text-light">
        
      
        <button class="second-btn m-1 text-capitalize"> add to chart</button>
    
    
     
    </div>
    
      </div>
  
</div>
 

</div>
</div>

        `;
    }
    console.log(resultone);
    productOne.innerHTML=resultone;
    
}



