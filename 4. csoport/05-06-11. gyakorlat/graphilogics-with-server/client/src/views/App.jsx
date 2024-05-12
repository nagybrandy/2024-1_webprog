import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { GraphiLogics } from "./graphilogics/Graphilogics";
import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Layout>
          <h1>GraphiLogics</h1>
          <Routes>
            <Route path="/game" element={
              <ProtectedRoute>
                <GraphiLogics />
              </ProtectedRoute>
            }/>
            <Route path="/" element={<Login />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
