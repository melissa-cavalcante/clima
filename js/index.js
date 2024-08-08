"use strict";
// https://api.openweathermap.org/data/2.5/weather?q=rio%20de%20janeiro&appid=8dce343cf8ac54315b6dd57e0c4b552f&units=metric&lang=pt_br
// https://openweathermap.org/img/wn/10d@2x.png
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#search-form");
const input = document.querySelector("#input-localization");
const sectionInfo = document.querySelector("#weather-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionInfo)
        return;
    const localization = input.value;
    if (localization.length < 3) {
        alert("A localização precisa ter mais que dois caracteres");
        return;
    }
    const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=8dce343cf8ac54315b6dd57e0c4b552f&units=metric&lang=pt_br`);
    const dados = yield response.json();
    const infos = {
        temperature: Math.round(dados.main.temp),
        local: dados.name,
        icon: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    };
    sectionInfo.innerHTML = `
    <div class="weather-data">
                <h2>${infos.local}</h2>
    
                <span>${infos.temperature}</span>
            </div>

            <img src="${infos.icon}"/>
    `;
}));
