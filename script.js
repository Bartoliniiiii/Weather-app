
 const input =document.querySelector('input')
 const button =document.querySelector('button')
 const cityName =document.querySelector('.city-name')
 const warning =document.querySelector('.warning')
 const photo =document.querySelector('.photo')
 const weather =document.querySelector('.weather')
 const temperature =document.querySelector('.temperature')
 const humidity =document.querySelector('.humidity')
 
 const API_LINK='https://api.openweathermap.org/data/2.5/weather?q='
 const API_KEY='&appid=b656c53fdda5fa7d1d00de14c21e6522'
 const API_UNITS='&units=metric'

 const getWeather = () => {
    const city= input.value || 'Warsaw' 
    const URL=API_LINK + city + API_KEY + API_UNITS

    
 axios.get(URL)
 .then(res=>{
    console.log(res.data)
    const temp=res.data.main.temp
    const hum=res.data.main.humidity
    const status=res.data.weather[0].main
    const idStatus=res.data.weather[0].id
    
    
    cityName.textContent=res.data.name

    temperature.textContent=Math.floor(temp) +'°C'
    humidity.textContent=hum+'%'
    weather.textContent=status

    input.value=''

    if(idStatus >=200 && idStatus<300 ){
        photo.setAttribute('src', './img_projekt weather app/thunderstorm.png')
    } else if(idStatus >=300 && idStatus<400){
        photo.setAttribute('src', './img_projekt weather app/drizzle.png')
    } else if (idStatus >=500 && idStatus<600){
        photo.setAttribute('src', './img_projekt weather app/rain.png')
    } else if (idStatus >=600 && idStatus<700){
        photo.setAttribute('src', './img_projekt weather app/ice.png')
    } else if (idStatus >=701 && idStatus<800){
        photo.setAttribute('src', './img_projekt weather app/fog.png')
    } else if (idStatus === 800){
        photo.setAttribute('src', './img_projekt weather app/sun.png')
    } else if(idStatus >=801 && idStatus<900){
        photo.setAttribute('src', './img_projekt weather app/cloud.png')
    } else {
        photo.setAttribute('src', "./img_projekt weather app/unknown.png")

    }
    
 }).catch(() => { 
    warning.textContent='Wpisz poprawną nazwę miasta'
 })
 }

const enterCheck= (e)=>{
    if(e.key==='Enter'){
        getWeather()
    }
}

 getWeather()
 input.addEventListener('keyup', enterCheck)
 button.addEventListener('click',getWeather)

