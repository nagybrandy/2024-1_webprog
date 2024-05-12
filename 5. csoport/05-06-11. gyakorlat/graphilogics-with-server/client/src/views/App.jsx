import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { GraphiLogics } from "./graphilogics/Graphilogics";
import Login from "./Auth/Login";
import UseAuth from "./Auth/UseAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <h1>GraphiLogics</h1>
          <Routes>
            <Route path="/game" element={<UseAuth><GraphiLogics /></UseAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
