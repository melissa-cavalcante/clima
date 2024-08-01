// https://api.openweathermap.org/data/2.5/weather?q=rio%20de%20janeiro&appid=8dce343cf8ac54315b6dd57e0c4b552f&units=metric&lang=pt_br
// https://openweathermap.org/img/wn/10d@2x.png

const form = document.querySelector("#search-form");
const input: HTMLInputElement | null = document.querySelector("#input-localization");

form?.addEventListener("submit", async (event) => {
    event.preventDefault()

    if(!input) return

    const localization = input.value

    if(localization.length < 3){
        alert("A localização precisa ter mais que dois caracteres");
        return;
    }

    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=8dce343cf8ac54315b6dd57e0c4b552f&units=metric&lang=pt_br")
})