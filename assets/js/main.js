// start popup message
function hidePop(){
    var popup = document.getElementById('popup');
    var layout = document.getElementById('layout')
    layout.classList.add("close")
    popup.classList.add("close")
   
}

function email_subscribepopup(){
var email = document.getElementById('subscribe_pemail').value;
console.log(email)
localStorage.setItem("email",email)
hidePop()
}
function dontShowAgain(){
    var checked = JSON.parse(localStorage.getItem("ChickBox")) ;
   if (checked == true){
    $('#popupSection').hide();
   }else{
    let dontShowBox = document.getElementById('dontShowAgain');
    $('#dontShowAgain').change(function(){
        if($(this).prop('checked')){
            $('#popupSection').hide();
            dontShowBox = true;
        }
        console.log(dontShowBox)
        localStorage.setItem("ChickBox",JSON.stringify(dontShowBox))
    })
   }
   
}


// end popup mesage
// start responsive nav menu
//  function hide(){
//   $("#primary-nav").hide();
// }
// $(".bar-menue").click(function(){
// $("#primary-nav").fadeToggle();

// });
// const barMenue = document.querySelector(".bar-menue");
// const nav = document.querySelector("#primary-nav");

//   barMenue.onclick = () =>{
//       nav.classList.toggle("nav-active")
//   }


// end responsive nav menu


// satrt image slider
let  dot = document.getElementsByClassName('dot')
let slideItem = document.getElementsByClassName('slide-item')

let index = 0
let imageMax = slideItem.length-1
// console.log(imageMax)

// next.addEventListener('click',function(){
//     showslide(index+1)
// })
// prev.addEventListener('click',function(){
//     showslide(index-1)
// })


document.onkeydown = function(e){
    let keyCode = e.keyCode
    console.log(keyCode)
  if( keyCode == 39){
      next.click()
  }else if (keyCode == 37){
      prev.click()
  }
}// end image slider

// mini cart
let miniCart = document.querySelector('.minicart')
let cartLink = document.querySelector('.cart_link')
cartLink.onclick = () =>{ 
    miniCart.classList.toggle('miniCartShow')
}
//end mini cart

//start cart item remove
$(".cart_remove").click(function(){
    $(this).parent().css("display","none");
});
//end cart item remove

// weather Api
let weather = "";
let apiKey = "5d3d04d5395e36d380ac6bc1daf2302d";
async function getweather(city){
let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
 weather = await response.json()
// console.log(weather.weather)
displayWeather();
};
getweather("ramallah");

function displayWeather(){
    document.querySelector("#city").innerText= weather.name;
    document.querySelector(".temp").innerText = weather.main.temp;
    document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+weather.weather[0].icon+".png";
    document.querySelector(".description").innerText = weather.weather[0].description;
}
async function search(){
   await getweather(document.querySelector(".search-bar").value)
}
document.querySelector(".search-weather-btn").addEventListener('click',function(){
search();
});
document.querySelector(".search-bar").addEventListener('keyup',function(e){
    if(e.key == "Enter"){
        search();
    }
});
// end weather api


// login name 
var loginName= document.getElementById('login-name');
loginName.innerHTML = localStorage.getItem("loggedIn");
// login name end 


//start slick
$(document).ready(function(){
    $('.cards').slick({
      dots: true
    }); 
    console.log($('.cards'))
  
    $('.debug').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
    });
    
  
              
    $('.blog-items').slick({
      dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
      
    });
    
  });
/*slick*/