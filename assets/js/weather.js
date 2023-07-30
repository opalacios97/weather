import { weather_data } from './data.js';

let loadDayForecastData = (data = weather_data, ciudad_select = "guayaquil") => {

    let data_ciudad = data.filter(e => ((e.city.toLowerCase())===(ciudad_select.toLowerCase())));
    data_ciudad = data_ciudad[0];

    let {city_code: codigo_ciudad , city: ciudad , date: fecha , maxtemperature: tempmax , mintemperature: tempmin , cloudiness: neblina , wind: viento , rainfall: lluvia , forecast_today: hoy } = data_ciudad;

    let [ciudad_tarde, ciudad_noche] = hoy;

    let {lapse: lapse_tarde , text: text_tarde , temperature: temperature_tarde , forecast: forecast_tarde , icon: icon_tarde} = ciudad_tarde;
    let {lapse: lapse_noche , text: text_noche , temperature: temperature_noche , forecast: forecast_noche , icon: icon_noche} = ciudad_noche;


    let index_ciudad = document.getElementById("city");
    let index_fecha = document.getElementById("date");
    let index_tempmax = document.getElementById("maxtemperature");
    let index_tempmin = document.getElementById("mintemperature");
    let index_neblina = document.getElementById("cloudiness");
    let index_viento = document.getElementById("wind");
    let index_lluvia = document.getElementById("rainfall");
    let index_icon_tarde = document.getElementById("late_icon");
    let index_temperature_tarde = document.getElementById("late_temperature");
    let index_forecast_tarde = document.getElementById("late_forecast");
    let index_text_tarde = document.getElementById("late_text");
    let index_icon_noche = document.getElementById("night_icon");
    let index_temperature_noche = document.getElementById("night_temperature");
    let index_forecast_noche = document.getElementById("night_forecast");
    let index_text_noche = document.getElementById("night_text");

    index_ciudad.innerHTML = ciudad;
    index_fecha.innerHTML = fecha;
    index_tempmax.innerHTML = tempmax;
    index_tempmin.innerHTML = tempmin;
    index_neblina.innerHTML = neblina;
    index_viento.innerHTML = viento;
    index_lluvia.innerHTML = lluvia;
    index_icon_tarde.innerHTML = icon_tarde;
    index_temperature_tarde.innerHTML = temperature_tarde;
    index_forecast_tarde.innerHTML = forecast_tarde;
    index_text_tarde.innerHTML = text_tarde;
    index_icon_noche.innerHTML = icon_noche;
    index_temperature_noche.innerHTML = temperature_noche;
    index_forecast_noche.innerHTML = forecast_noche;
    index_text_noche.innerHTML = text_noche;

}


let loadWeekForecastData = (data = weather_data, ciudad_select = "guayaquil") => {

    let data_ciudad = data.filter(e => ((e.city.toLowerCase())===(ciudad_select.toLowerCase())));
    data_ciudad = data_ciudad[0];

    let {forecast_week: semana_ciudad} = data_ciudad;

    let mensaje = "";

    semana_ciudad.map(dia => {
        let {day: dia_num, text: dia_letras, date: dia_fecha, temperature: dia_temperatura, icon: dia_icon} = dia;
        let {min: dia_tempmax, max: dia_tempmin} = dia_temperatura;
        mensaje = mensaje + `
        <div class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div class="d-flex flex-column">
               <h6 class="mb-1 text-dark font-weight-bold text-sm">${dia_letras}</h6>
               <span class="text-xs">${dia_fecha}</span>
            </div>
            <div class="d-flex align-items-center ">
               <span class="font-weight-bold text-dark mx-2">${dia_tempmax}</span> |  <span class="text-dark mx-2">${dia_tempmin}</span>
               <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${dia_icon}</i></div>
            </div>
        </div>`;
    })

    let mensaje_index = document.getElementsByClassName("list-group");

    mensaje_index[0].innerHTML = mensaje;
		
}


let citySelection = (data = weather_data) => {

    let opciones ="";
 
    let ciudades = data.map(e => e.city)
    
    ciudades.map(e => {
        opciones = opciones + `<option id=${e.toLowerCase()} class="dropdown-item" value=${e.toLowerCase()}>${e}</option>`;
    });

    let mensaje = `
    <select id="dropdownMenuButton" class="btn bg-gradient-primary dropdown-toggl" name="select">
      <option value="" selected disabled hidden>Seleccione una ciudad</option>
      ${opciones}
    </select>`;

    let mensaje_index = document.getElementsByClassName("dropdown");

    mensaje_index[0].innerHTML = mensaje; 

}   


document.addEventListener("DOMContentLoaded", (event) => {
    //Código a ejecutar

    loadDayForecastData();
    citySelection();
 
    let element4 = document.getElementById("dropdownMenuButton");

    element4.addEventListener('change', (event) => {
        //Código a ejecutar
        //El event contiene la información del elemento seleccionado
        let selectedValue = event.target.value 
        loadDayForecastData(weather_data,selectedValue)
        
        let element = document.getElementById("loadinfo");
        
        element.addEventListener('click', (event) => {
            //Código a ejecutar
            loadWeekForecastData(weather_data,selectedValue);
        });
    });

    
});