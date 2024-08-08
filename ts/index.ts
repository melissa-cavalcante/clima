// https://api.openweathermap.org/data/2.5/weather?q=rio%20de%20janeiro&appid=8dce343cf8ac54315b6dd57e0c4b552f&units=metric&lang=pt_br
// https://openweathermap.org/img/wn/10d@2x.png

const form = document.querySelector("#search-form");
const input: HTMLInputElement | null = document.querySelector("#input-localization");

const sectionInfo = document.querySelector("#weather-info")

form?.addEventListener("submit", async (event) => {
    event.preventDefault()

    if(!input || !sectionInfo) return

    const localization = input.value

    if(localization.length < 3){
        alert("A localização precisa ter mais que dois caracteres");
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=8dce343cf8ac54315b6dd57e0c4b552f&units=metric&lang=pt_br`);

    const dados = await response.json();

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
})