const API_KEY="9b0b2a19e41eef0cbc7f3b3388674014";

function onGeoOk(position){
    const lon=position.coords.longitude;
    const lat=position.coords.latitude;

    console.log(lon,lat);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    fetch(url).then(response=> response.json()).then(data=>{
        console.log(data.name, data.weather[0].main);
        
        const weather=document.querySelector('#weather span:first-child' );
        const city=document.querySelector('#weather span:last-child' );

        city.innerText=data.name;
        weather.innerText=data.weather[0].main;
        const celcius=data.main.temp;
    });




}

function onGeoError(){
    alert("Can't find your location, No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);