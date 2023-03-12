import { weather_data } from './data.js';

let loadDayForecastData = (data = weather_data) => {

    let [gye,amb,ten] = data;

    let {city_code: codigo_ciudad1 , city: ciudad1 , date: fecha1 , maxtemperature: tempmax1 , mintemperature: tempmin1 , cloudiness: neblina1 , wind: viento1 , rainfall: lluvia1 , forecast_today: hoy1 } = gye;
    let {city_code: codigo_ciudad2 , city: ciudad2 , date: fecha2 , maxtemperature: tempmax2 , mintemperature: tempmin2 , cloudiness: neblina2 , wind: viento2 , rainfall: lluvia2 , forecast_today: hoy2 } = amb;        
    let {city_code: codigo_ciudad3 , city: ciudad3 , date: fecha3 , maxtemperature: tempmax3 , mintemperature: tempmin3 , cloudiness: neblina3 , wind: viento3 , rainfall: lluvia3 , forecast_today: hoy3 } = ten;
    
    let [gye_tarde, gye_noche] = hoy1;
    let [amb_tarde, amb_noche] = hoy2;
    let [ten_tarde, ten_noche] = hoy3;

    let {lapse: lapse_tarde1 , text: text_tarde1 , temperature: temperature_tarde1 , forecast: forecast_tarde1 , icon: icon_tarde1} = gye_tarde;
    let {lapse: lapse_noche1 , text: text_noche1 , temperature: temperature_noche1 , forecast: forecast_noche1 , icon: icon_noche1} = gye_noche;
    let {lapse: lapse_tarde2 , text: text_tarde2 , temperature: temperature_tarde2 , forecast: forecast_tarde2 , icon: icon_tarde2} = amb_tarde;
    let {lapse: lapse_noche2 , text: text_noche2 , temperature: temperature_noche2 , forecast: forecast_noche2 , icon: icon_noche2} = amb_noche;
    let {lapse: lapse_tarde3 , text: text_tarde3 , temperature: temperature_tarde3 , forecast: forecast_tarde3 , icon: icon_tarde3} = ten_tarde;
    let {lapse: lapse_noche3 , text: text_noche3 , temperature: temperature_noche3 , forecast: forecast_noche3 , icon: icon_noche3} = ten_noche;


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

    index_ciudad.innerHTML = ciudad1;
    index_fecha.innerHTML = fecha1;
    index_tempmax.innerHTML = tempmax1;
    index_tempmin.innerHTML = tempmin1;
    index_neblina.innerHTML = neblina1;
    index_viento.innerHTML = viento1;
    index_lluvia.innerHTML = lluvia1;
    index_icon_tarde.innerHTML = icon_tarde1;
    index_temperature_tarde.innerHTML = temperature_tarde1;
    index_forecast_tarde.innerHTML = forecast_tarde1;
    index_text_tarde.innerHTML = text_tarde1;
    index_icon_noche.innerHTML = icon_noche1;
    index_temperature_noche.innerHTML = temperature_noche1;
    index_forecast_noche.innerHTML = forecast_noche1;
    index_text_noche.innerHTML = text_noche1;



}

let loadWeekForecastData = (data = weather_data) => {

    let [gye,amb,ten] = data;

    let {forecast_week: semana_gye} = gye;
    let {forecast_week: semana_amb} = amb;
    let {forecast_week: semana_ten} = ten;  
   
    let [dia1_gye, dia2_gye, dia3_gye, dia4_gye, dia5_gye, dia6_gye, dia7_gye] = semana_gye;
    let [dia1_amb, dia2_amb, dia3_amb, dia4_amb, dia5_amb, dia6_amb, dia7_amb] = semana_amb;
    let [dia1_ten, dia2_ten, dia3_ten, dia4_ten, dia5_ten, dia6_ten, dia7_ten] = semana_ten;

    let {day: dia1_numG, text: dia1_letrasG, date: dia1_fechaG, temperature: dia1_temperaturaG, icon: dia1_iconG} = dia1_gye;
    let {min: dia1_tempmaxG, max: dia1_tempminG} = dia1_temperaturaG;
    let {day: dia2_numG, text: dia2_letrasG, date: dia2_fechaG, temperature: dia2_temperatureG, icon: dia2_iconG} = dia2_gye;
    let {min: dia2_tempmaxG, max: dia2_tempminG} = dia2_temperatureG;
    let {day: dia3_numG, text: dia3_letrasG, date: dia3_fechaG, temperature: dia3_temperatureG, icon: dia3_iconG} = dia3_gye;
    let {min: dia3_tempmaxG, max: dia3_tempminG} = dia3_temperatureG;
    let {day: dia4_numG, text: dia4_letrasG, date: dia4_fechaG, temperature: dia4_temperatureG, icon: dia4_iconG} = dia4_gye;
    let {min: dia4_tempmaxG, max: dia4_tempminG} = dia4_temperatureG;
    let {day: dia5_numG, text: dia5_letrasG, date: dia5_fechaG, temperature: dia5_temperatureG, icon: dia5_iconG} = dia5_gye;
    let {min: dia5_tempmaxG, max: dia5_tempminG} = dia5_temperatureG;
    let {day: dia6_numG, text: dia6_letrasG, date: dia6_fechaG, temperature: dia6_temperatureG, icon: dia6_iconG} = dia6_gye;
    let {min: dia6_tempmaxG, max: dia6_tempminG} = dia6_temperatureG;
    let {day: dia7_numG, text: dia7_letrasG, date: dia7_fechaG, temperature: dia7_temperatureG, icon: dia7_iconG} = dia7_gye;
    let {min: dia7_tempmaxG, max: dia7_tempminG} = dia7_temperatureG;

    let {day: dia1_numA, text: dia1_letrasA, date: dia1_fechaA, temperature: dia1_temperaturaA, icon: dia1_iconA} = dia1_amb;
    let {min: dia1_tempmaxA, max: dia1_tempminA} = dia1_temperaturaA;
    let {day: dia2_numA, text: dia2_letrasA, date: dia2_fechaA, temperature: dia2_temperatureA, icon: dia2_iconA} = dia2_amb;
    let {min: dia2_tempmaxA, max: dia2_tempminA} = dia2_temperatureA;
    let {day: dia3_numA, text: dia3_letrasA, date: dia3_fechaA, temperature: dia3_temperatureA, icon: dia3_iconA} = dia3_amb;
    let {min: dia3_tempmaxA, max: dia3_tempminA} = dia3_temperatureA;
    let {day: dia4_numA, text: dia4_letrasA, date: dia4_fechaA, temperature: dia4_temperatureA, icon: dia4_iconA} = dia4_amb;
    let {min: dia4_tempmaxA, max: dia4_tempminA} = dia4_temperatureA;
    let {day: dia5_numA, text: dia5_letrasA, date: dia5_fechaA, temperature: dia5_temperatureA, icon: dia5_iconA} = dia5_amb;
    let {min: dia5_tempmaxA, max: dia5_tempminA} = dia5_temperatureA;
    let {day: dia6_numA, text: dia6_letrasA, date: dia6_fechaA, temperature: dia6_temperatureA, icon: dia6_iconA} = dia6_amb;
    let {min: dia6_tempmaxA, max: dia6_tempminA} = dia6_temperatureA;
    let {day: dia7_numA, text: dia7_letrasA, date: dia7_fechaA, temperature: dia7_temperatureA, icon: dia7_iconA} = dia7_amb;
    let {min: dia7_tempmaxA, max: dia7_tempminA} = dia7_temperatureA;

    let {day: dia1_numT, text: dia1_letrasT, date: dia1_fechaT, temperature: dia1_temperaturaT, icon: dia1_iconT} = dia1_ten;
    let {min: dia1_tempmaxT, max: dia1_tempminT} = dia1_temperaturaT;
    let {day: dia2_numT, text: dia2_letrasT, date: dia2_fechaT, temperature: dia2_temperatureT, icon: dia2_iconT} = dia2_ten;
    let {min: dia2_tempmaxT, max: dia2_tempminT} = dia2_temperatureT;
    let {day: dia3_numT, text: dia3_letrasT, date: dia3_fechaT, temperature: dia3_temperatureT, icon: dia3_iconT} = dia3_ten;
    let {min: dia3_tempmaxT, max: dia3_tempminT} = dia3_temperatureT;
    let {day: dia4_numT, text: dia4_letrasT, date: dia4_fechaT, temperature: dia4_temperatureT, icon: dia4_iconT} = dia4_ten;
    let {min: dia4_tempmaxT, max: dia4_tempminT} = dia4_temperatureT;
    let {day: dia5_numT, text: dia5_letrasT, date: dia5_fechaT, temperature: dia5_temperatureT, icon: dia5_iconT} = dia5_ten;
    let {min: dia5_tempmaxT, max: dia5_tempminT} = dia5_temperatureT;
    let {day: dia6_numT, text: dia6_letrasT, date: dia6_fechaT, temperature: dia6_temperatureT, icon: dia6_iconT} = dia6_ten;
    let {min: dia6_tempmaxT, max: dia6_tempminT} = dia6_temperatureT;
    let {day: dia7_numT, text: dia7_letrasT, date: dia7_fechaT, temperature: dia7_temperatureT, icon: dia7_iconT} = dia7_ten;
    let {min: dia7_tempmaxT, max: dia7_tempminT} = dia7_temperatureT;



    let mensaje = `
    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
           <h6 class="mb-1 text-dark font-weight-bold text-sm">${dia1_letrasG}</h6>
           <span class="text-xs">${dia1_fechaG}</span>
        </div>
        <div class="d-flex align-items-center ">
           <span class="font-weight-bold text-dark mx-2">${dia1_tempmaxG}</span> |  <span class="text-dark mx-2">${dia1_tempminG}</span>
           <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${dia1_iconG}</i></div>
        </div>
    </li>`;

    let mensaje_index = document.getElementsByClassName("list-group");

    mensaje_index[0].innerHTML = mensaje;

	
	
}


loadDayForecastData();
loadWeekForecastData();