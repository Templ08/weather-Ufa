const url = `https://api.open-meteo.com/v1/forecast?
latitude=54.74306&longitude=55.96779&
current=temperature_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m`

axios.get(url).then((data) => {
    renderWeather(data.data.current)
})

function renderWeather(data) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class='temperature'>Температура: ${data.temperature_2m}℃<br></div>
    <div class='wind_speed'>Скорость ветра: ${data.wind_speed_10m} м/с<br> </div>
    <div class='is_day'>Сейчас в Уфе: ${data.is_day? 'Ночь' : 'День'}<br> </div>
    <div class='precipitation'>${data.precipitation? 'Осадки в Уфе'  : 'Солнечно'}</div>`;


    document.body.append(div);
}
//fetch(url).then((data) => {
 //   return data.json
//}).then((info) => {
//    console.log(info.current)
//})
