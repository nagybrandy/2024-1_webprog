import Loading from "../../components/Loading";
import { useAddPuzzleMutation, useGetOnePuzzleQuery, useGetPuzzlesQuery } from "../../state/graphilogicsApiSlice";

const newp = {
  "title": "Jármű",
  "puzzle": "[\" ###  ###  \",\"  ### ### \",\"  ### ### \",\"   #   #  \", \" ### #### \",\" ### #### \",\"   #   #  \", \"### ### ##\",\" #########\",\"  ####### \"]"
}
export const GraphiLogics = () => {
  const {data, isLoading} = useGetPuzzlesQuery();
  const {data : data2, isLoading: isLoading2} = useGetOnePuzzleQuery(2);
  const [addPuzzle, {isLoading : isFetching, isError  }] = useAddPuzzleMutation();
  console.log(isError)
  console.log(data)
  if(isLoading) return <Loading />
  return (
      <div>
        <h1>GraphiLogics</h1>
        <button onClick={() => addPuzzle(newp).then(e => console.log(e))}>Új elem hozzáadása</button>
            <table id="layout">
        <tbody>
          <tr>
            <td></td>
            <td>
              <table id="felso">
                <tbody>
                  <tr>
                    <td>
                      <span>1</span>
                      <span>2</span>
                    </td>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <span>1</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table id="bal">
                <tbody>
                  <tr>
                    <td>
                      <span>1</span>
                      <span>1</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>2</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table id="tabla">
                <tbody>
                  <tr>
                    <td className="feher"></td>
                    <td className="szurke"></td>
                    <td className="fekete"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
            </table>
      </div>
  );
};
