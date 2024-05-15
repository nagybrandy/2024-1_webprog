import { useParams } from "react-router";
import { useGetHolidaysQuery } from "./services/holidaysApi";
import { useState } from "react";

export const Holidays = () => {
  const {countryCode} = useParams()
  const [year, setYear] = useState(2023)


  const {data, isLoading, error} = useGetHolidaysQuery({year, countryCode})

  console.log(data)
  if(isLoading) return "Loading..."
  return (
    <>
      <a href="/">Back</a>
      <table>
        <thead>
          <tr>
            <th>Holidays</th>
            <th>
              <input type="number" value={year} onChange={(e)=> setYear(e.target.value)} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(e=> 
          <tr>
            <td>{e.date}</td>
            <td>{e.name}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
};
