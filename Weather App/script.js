const apiKey="34c98dcb71f0f754f715f653ef4fc3d8"

const weatherdataele=document.querySelector(".weather-data")

const cityName=document.querySelector("#city-name")

const formele=document.querySelector("form")

const imageicon=document.querySelector(".icon")

formele.addEventListener("submit",(e)=>{
    e.preventDefault()  //we don't need to submit
    // console.log(cityName.value)
    const cityVal=cityName.value

    getweatherData(cityVal)
})    //to get city name

async function getweatherData(cityVal){
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKey}&units=metric`)

        //wait till the we get data ->await the promise
        if(!response.ok){
            throw new Error("Wrong Output/Result")
        }

        //convert response to json
        const data=await response.json()
        // console.log(data)

        //accessing values
        const temperature=Math.floor(data.main.temp)
        const description=data.weather[0].description
        const icon1=data.weather[0].icon

        const details=[
            `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
            `Humidity:${data.main.humidity} %`,
            `Wind Speed:${data.wind.speed} m/s`
        ]
        weatherdataele.querySelector(".temperature").textContent=`${temperature}°C`
        weatherdataele.querySelector(".description").textContent=`${description}`

        imageicon.innerHTML=`<img src="https://openweathermap.org/img/wn/${icon1}.png" alt="">`

        weatherdataele.querySelector(".details").innerHTML=details.map((detail)=>{
            return `<div>${detail}</div>`
        }).join("")
    }
    catch(err){
        weatherdataele.querySelector(".temperature").textContent=""
        weatherdataele.querySelector(".description").textContent="An Error Occurred"

        imageicon.innerHTML=""
    }
}