import { useState } from "react";
import Forecast from "./Forecast";
import CitiesList from "./CitiesList";
import { weatherList } from "./data/weather";
function App() {
   // TODO: Cseréld le ezt a változót, hogy a beimportált listára hivatkozzon
  const [selectedCity, setSelectedCity] = useState(weatherList[0]); // TODO: Cseréld le ezt a változót, hogy a komponens belső állapotára hivatkozzon
  const handleCityChange = (id) => {
    setSelectedCity(weatherList.find(city => city.id === id))
  };
  return (
    <div className="flex flex-col items-center  w-full">
      <h1 className="text-5xl text-blue-700">Időjárás</h1>
      <CitiesList
        weatherList={weatherList}
        handleCityChange={handleCityChange}
      />
      <Forecast cityData={selectedCity} />
    </div>
  );
}

export default App;
