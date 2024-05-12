
import Loading from "../../components/Loading";
import { useAddPuzzleMutation, useGetOnePuzzleQuery, useGetPuzzlesQuery } from "../../store/graphilogicsApiSlice";
import { useGetPokemonByNameQuery } from "../../store/pokemonApiSlice";

const newp = {
  "title": "Jármű",
  "puzzle": "[\" ###  ###  \",\"  ### ### \",\"  ### ### \",\"   #   #  \", \" ### #### \",\" ### #### \",\"   #   #  \", \"### ### ##\",\" #########\",\"  ####### \"]"
}
export const GraphiLogics = () => {
  // const {data, isLoading} = useGetPokemonByNameQuery("bulbasaur");
  const {data, isLoading} = useGetPuzzlesQuery();
  const {data : puzzle, isLoading :isLoading2} = useGetOnePuzzleQuery(5);
  const  [addPuzzle, {isLoading3, isError,}] = useAddPuzzleMutation();
  console.log(data, isLoading)
  console.log(puzzle, isLoading2)
  if (isLoading) return <Loading />
  return (
    <div>
      <button onClick={()=> addPuzzle(newp)}>Adj hozzá egy feladványt!</button>
      <div>{data.total}</div>
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
