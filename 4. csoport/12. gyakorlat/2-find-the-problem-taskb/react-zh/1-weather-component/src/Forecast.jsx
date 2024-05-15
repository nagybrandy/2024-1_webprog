import { useState } from "react";

const Forecast = ({ cityData }) => {

  const [tempUnit, setTempUnit] = useState("C"); // ["C", "F"]
  const handleUnitChange = (e) => {
    setTempUnit(e.target.value)
  };

  return (
    <div className="rounded-lg shadow-lg bg-white p-10 flex items-center justify-center scale-125 mt-20">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h2 className="text-2xl font-medium text-blue-500">
            {cityData.name}
          </h2>
          <div id="tempUnitChanger" className="ml-auto">
            <div className="inline-flex">
              <div className="switch-field">
                <input
                  type="radio"
                  id="radio-one"
                  name="tempUnitChanger"
                  value="F"
                  checked={
                    tempUnit === "F" /* TODO: Alakítsd át, hogy ha F a kiválasztott mértékegység, legyen "true" */
                  }
                  onChange={handleUnitChange}
                />
                <label htmlFor="radio-one">F</label>
                <input
                  type="radio"
                  id="radio-two"
                  name="tempUnitChanger"
                  checked={
                    tempUnit === "C"  /* TODO: Alakítsd át, hogy ha C a kiválasztott mértékegység, legyen "true" */
                  }
                  value="C"
                  onChange={handleUnitChange}
                />
                <label htmlFor="radio-two">C</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-20">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-5">
              <img
                src={
                  cityData.iconURL /* TODO: Jelenítsd meg a választott város ikonját */
                }
                alt="weathericon"
                className="w-20"
              />
              <span className="text-9xl text-blue-400">
                {tempUnit === "C" ? cityData.temp.celsius : cityData.temp.fahrenheit /* TODO: Jelenítsd meg a választott város hőmérsékletét */}
                °
              </span>
            </div>
          </div>
          <table className="text-blue-400 w-1/2">
            <tbody>
              <tr>
                <td>Wind:</td>
                <td className="text-right">
                  {cityData.details.wind} km/h
                </td>
              </tr>
              <tr>
                <td>Humidity:</td>
                <td className="text-right">
                  {cityData.details.humidity}%
                </td>
              </tr>
              <tr>
                <td>Condition:</td>
                <td className="text-right">
                  {
                    cityData.details.condition /* TODO: Jelenítsd meg a választott város időjárását */
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
