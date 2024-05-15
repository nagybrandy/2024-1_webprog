import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Holidays } from "./Holidays";
import { useGetCountriesQuery } from "./services/holidaysApi";

function App() {
  const {data, isLoading, error} = useGetCountriesQuery()
  console.log(data)
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {!isLoading && data.map(e=> 
          <tr>
              <td>
                <Link to={`/${e.countryCode}`}>{e.name} ({e.countryCode})</Link>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>

      <div>
        <Routes>
          <Route path="/:countryCode" element={<Holidays />} />
          <Route path="*" element={<div>Nincs kiválasztott ország</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
