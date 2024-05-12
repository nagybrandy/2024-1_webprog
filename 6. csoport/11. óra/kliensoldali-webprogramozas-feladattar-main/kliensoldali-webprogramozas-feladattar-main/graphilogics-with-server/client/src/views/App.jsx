import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { GraphiLogics } from "./graphilogics/Graphilogics";
import Auth from "./Auth/Auth";
import ProtectedRoute from "./Auth/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
          
          <Route path="/game" element={
            <ProtectedRoute>
              <GraphiLogics />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Auth />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
