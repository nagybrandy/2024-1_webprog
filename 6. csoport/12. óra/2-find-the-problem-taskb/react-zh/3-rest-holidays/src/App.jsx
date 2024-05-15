import { Provider } from "react-redux";
import "./App.css";
import { Holidays } from "./Holidays";
import { store } from "./services/store";
import { useGetCountriesQuery } from "./services/holidaysApi";
import { Link } from "react-router-dom";

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
             <tr key={e.countryCode}>
                <td>
                  <Link to={`/${e.countryCode}`}>{e.name} ({e.countryCode})</Link>
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>

        <div>
          <Holidays />
        </div>
      </>
  );
}

export default App;
