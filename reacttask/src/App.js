import "./App.css";
import Home from "./components/Home";
import Login from './components/Login';
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
