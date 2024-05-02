const button= document.getElementById("btn");
const input= document.getElementById("city");
const cityName= document.getElementById("cityName");
const cityTime= document.getElementById("cityTime");
const cityTemp= document.getElementById("cityTemp");
const cloudy= document.getElementById("cloudy");


 
async function weatherData(cityName){
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=332c7501d3a64104ab4101757240205&q=${cityName}&aqi=yes`);
    return await promise.json()

}

button.addEventListener("click",async()=>{
    const value= input.value;
    const result= await weatherData(value);
    cityName.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
    cityTime.innerText=`${result.location.localtime}`;
    cityTemp.innerText= result.current.temp_c;
    

})