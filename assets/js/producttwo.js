var  productName2=document.getElementById('productName2');
var imgSource2=document.getElementById('addfile2');
var productPrice2=document.getElementById('productPrice2');
var addCart2=document.getElementById('click2');
var data2=document.getElementById('data2');
var inputs2=document.getElementsByClassName('inputs2');
var productTwo=document.getElementById('productTwo');
var currentindex2=0;
if(localStorage.getItem("productList2")==null){
    var products2=[];
}
else{
    var products2=JSON.parse(localStorage.getItem("productList2"));
    displayData2()
    
}

addCart2.onclick = function(){
    if(addCart2.innerHTML=="ADD PRODUCT"){
loadImageAsBase64(function(base64){
    addProduct2(base64);
        clearForm2();
    displayData2()
   

})
     
    }

    else{
        loadImageAsBase64(function(base64){
            updateProduct2(base64);
            clearForm2();
            displayData2();
            addCart2.innerHTML="ADD PRODUCT"

    
        });
         
       
}

}
function clearForm2(){
    for(var i=0;i<inputs2.length;i++){
        inputs2[i].value="";

    }
    addCart2.innerHTML="ADD PRODUCT"
}

function addProduct2(imgBase64){
    var product2={
        source2:imgBase64,
        name2:productName2.value,
        price2:productPrice2.value,
    };
    products2.push(product2);
    localStorage.setItem("productList2",JSON.stringify(products2));

}


function displayData2(){
    var result2="";
    for(var i=0;i<products2.length;i++ ){

        result2+=`<tr>
        <td>${i}</td>
        <td><img src="${products2[i].source2} "class="w-25"></td>
        <td>${products2[i].name2}</td>
        <td>${products2[i].price2}</td>
        <td><button class="btn btn-success" onclick=getProductData2(${i})>update</button></td>
        <td> <button class="btn btn-danger" onclick=deleteProduct2(${i})> delete </button> </td>
        </tr>`;
    }
data2.innerHTML=result2;
}
 
function deleteProduct2(index){
products2.splice(index,1);
localStorage.setItem("productList2",JSON.stringify(products2));
displayData2();
}

function getProductData2(index2){
var poduct2=products2[index2];
productName2.value=poduct2.name2;
imgSource2.imgBase64=poduct2.source2;
productPrice2.value=poduct2.price2;
addCart2.innerHTML="update product2";
currentindex2=index2;
console.log(products2);
}

function updateProduct2(base64){
    var product2={
        source2:base64 || products2[currentindex2].source2,
        name2:productName2.value,
        price2:productPrice2.value,
    };
    products2[currentindex2].source2=product2.source2;
    products2[currentindex2].name2=product2.name2;
    products2[currentindex2].price2=product2.price2;
localStorage.setItem("productList2",JSON.stringify(products2));

}

function loadImageAsBase64(onLoadSuccess){
    const file=imgSource2.files[0];
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

function search2(searchText){
    var result2="";
    for(i=0;i<products2.length;i++ ){
        if(products2[i].name2.toLowerCase().includes(searchText.toLowerCase())){

      
           

                result2+=`<tr>
                <td>${i}</td>
                <td><img src="${products2[i].source2} "class="w-25"></td>
                <td>${products2[i].name2}</td>
                <td>${products2[i].price2}</td>
                <td><button class="btn btn-success" onclick=getProductData2(${i})>update</button></td>
                <td> <button class="btn btn-danger" onclick=deleteProduct2(${i})> delete </button> </td>
                </tr>`;
            }
    }
    data2.innerHTML=result2;
    
}


function displayProductData2(){
    var resulttwo="";
    console.log(products2);
    for(var i=0;i<products2.length;i++ ){
    console.log(products2);

        resulttwo+=`
        <div class="product-item col-md-2 ">
      <div class="item">
<div class="item-content">
  <div class="item-img-discription ">
  <div class="item-img">
    <img src="${products2[i].source2}" alt="" class="primary-img w-100" id="img">
    <img src="assets/img/product12.webp" alt="" class="secondary-img  w-100">
    <div>
      <button type="button" class=" quick_button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Quick View
         </button>
   </div>
  </div>
  <div class="product-description text-center pt-3">
    <h4>${products2[i].name2}</h4>
    <p>aliquam furniture</p>
    </div>
    <div class="line"></div>
    <div class="product-description-two d-flex flex-wrap  text-center justify-content-center pt-3">
      <span class="price-one   me-2"  >$89.00</span>
      <span class="price-two text-warning "id="priceOne">${products2[i].price2}</span>
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
        
      
        <button class="second-btn m-1 text-capitalize "> add to chart</button>
    
    
     
    </div>
    
      </div>
  
</div>
 

</div>
</div>

        `;
    }
    productTwo.innerHTML=resulttwo;
}

var itemi= document.getElementsByClassName("item{i}");

itemi.onclick=function(){
    displayData3();
}
function displayData3(){
   
        var result2="";
        for(var i=0;i<products2.length;i++ ){
    
            result2+=`<tr>
            <td>${i}</td>
            <td><img src="${products2[i].source2} "class="w-25"></td>
            <td>${products2[i].name2}</td>
            <td>${products2[i].price2}</td>
            <td><label>Quantity</label><input min="0" max="100" value="1" type="number"></td>
            <td> <button class="btn btn-danger" onclick=deleteProduct2(${i})> delete </button> </td>
            </tr>`;
        }
    data2.innerHTML=result2;
    }
