const body = document.body
const apiKey = 'f8405371caa97acde0975598fbe73fab'
const input = document.getElementById('cityinput')
const button = document.getElementById('search__button')

button.addEventListener('click', function(){
    let location = input.value
    if (location == '') {
        window.alert("Well? Enter a city.");
    }
    let fetchWeather = (location) => fetch('api.openweathermap.org/data/2.5/forecast?q='+location+'&appid='+apiKey+'&units=metric')

    document.getElementsByClassName('city')[0].innerHTML = location;

    fetchWeather(location)
    .then((response => response.json()))
    .then((json) => {
        localStorage.setItem("data", JSON.stringify(json))
        document.getElementById('temp1').textContent = json.main.temp;
        /*
        document.getElementById('temp1').textContent = json.main.temp;
        document.getElementById('feelslike1').innerHTML = data.main.feels_like;
        document.getElementById('tempmin1').innerHTML = data.main.temp_min;
        document.getElementById('tempmax1').innerHTML = data.main.temp_max;
        document.getElementById('weather1').innerHTML = data.weather.main;
        document.getElementById('weatherdesc1').innerHTML = data.weather.description;
        document.getElementById('windspeed1').innerHTML = data.wind.speed;*/
    });
})

/*
- date
- temp
- feels like
- temp min
- temp max
- weather.main
- weather.description
- icon
(- wind speed?)
(- sunrise?)
(- sunset?)
*/


/*apparently geocoding is still built-in, but no longer updated
-> use geocoding api first?*/
/**/