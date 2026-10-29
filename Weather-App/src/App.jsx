import './App.css';
import { useState, useEffect } from 'react';
function App(){
  const [city,setCity]=useState('');
  const [searchedCity, setSearchedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
  console.log('Weather App started');
}, [searchedCity]);

  

 async function handleSearch(){
    if(city.trim()===''){
      return;
    }
    setSearchedCity(city.trim());
    setError('');
    await findCity();
  }

  

async function findCity() {
  setIsLoading(true);
  try {
    // Step 1: Search for the city entered by the user
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );

    const data = await response.json();

    // Step 2: Check whether the city exists
   if (!data.results || data.results.length === 0) {
  setError('City not found. Please enter a valid city name.');
  setWeatherData(null);

  setIsLoading(false);
  return;
}

    // Step 3: Get the city's latitude and longitude
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;

    // Step 4: Request the actual weather
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
    );

    // Step 5: Convert the response into JavaScript data
    const result = await weatherResponse.json();
    setWeatherData(result);
   
    setIsLoading(false);

  } catch (error) {
    console.log('Something went wrong:', error.message);
    setError(error.message);
    setIsLoading(false);
  }
}


function getWeatherCondition(code) {
  if (code === 0) {
    return 'Clear sky';
  }

  if (code === 1 || code === 2 || code === 3) {
    return 'Partly cloudy';
  }

  if (code === 45 || code === 48) {
    return 'Foggy';
  }

  if (code >= 51 && code <= 67) {
    return 'Rain';
  }

  if (code >= 71 && code <= 77) {
    return 'Snow';
  }

  if (code >= 80 && code <= 82) {
    return 'Rain showers';
  }

  if (code >= 95) {
    return 'Thunderstorm';
  }

  return 'Unknown condition';
}





  return (
    <div className='app'>
      <h1>Weather App</h1>
      <p>Find the Weather in Your City</p>

      <div className='search'>
        <input type="text" placeholder='Enter Your City Name....'
        value={city}
        onChange={(event)=>setCity(event.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>


      {isLoading && <p>Loading weather...</p>}
      {error && <p>{error}</p>}


      {searchedCity !== '' && searchedCity !== '' &&(
      <div className="weather-card">
      <h2>Weather in {searchedCity}</h2>

      <h3>
      {weatherData ? weatherData.current.temperature_2m : '--'}°C
      </h3>

      <p>
        {weatherData
          ? getWeatherCondition(weatherData.current.weather_code)
          : '--'}
      </p>


      <p>
      Humidity: {weatherData ? weatherData.current.relative_humidity_2m : '--'}%
      </p>
      <p>
      Wind Speed: {weatherData ? weatherData.current.wind_speed_10m : '--'} km/h
     </p>
      </div>
)}
        
    </div>
  );
}
export default App;