import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import Deshboard from './pages/Deshboard/Deshboard'
import ContractDetail from "./ContractDetails/ContractDetail";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Deshboard />} />
      <Route path="/contract" element={<ContractDetail />} /> 
      </Routes>
    </> 
  )
}
export default App;
