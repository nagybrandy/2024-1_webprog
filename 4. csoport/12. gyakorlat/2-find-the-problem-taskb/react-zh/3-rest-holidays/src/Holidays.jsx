import { useParams, useResolvedPath } from "react-router";
import { useGetOneContryByYearQuery } from "./services/holidaysApi";
import { useState } from "react";

export const Holidays = () => {
  const params = useParams();
  const [year, setYear] = useState(2023);
  const {data, isLoading, error} = useGetOneContryByYearQuery({year: year, countryCode:params.countryCode});
  return (
    <>
      <a href="/">Back</a>
      <table>
        <thead>
          <tr>
            <th>Holidays</th>
            <th>
              <input type="number" value={year} onChange={(e)=> setYear(e.target.value)}/>
            </th>
          </tr>
        </thead>
        <tbody>
         {!isLoading && data && data.map(e => 
         <tr>
            <td>{e.date}</td>
            <td>{e.name}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
};
