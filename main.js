// const apikey = "61163af4f4ba3cb9e85786ec10884ca4";
// const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";

// async function checkWeather(){
//     const result = await fetch(apiUrl + `&appid=${apikey}`);
//     var data = await response.json();
//     console.log(data);
// }
// checkWeather();
const apikey = "61163af4f4ba3cb9e85786ec10884ca4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serchbox = document.querySelector(".serch input");
const srchBtn = document.querySelector(".serch button")
const icn = document.querySelector(".wethericon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();
    if(response.status == 404)
        alert("city not found")
    
    document.querySelector(".contry").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+".C";
    document.querySelector(".humadity").innerHTML=data.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        icn.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        icn.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        icn.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzles"){
        icn.src = "images/drizzles.png";
    }
    else if(data.weather[0].main == "Mist"){
        icn.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display="block"
    

}
srchBtn.addEventListener("click",()=>{
    checkWeather(serchbox.value)

})


