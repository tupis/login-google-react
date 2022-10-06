import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";

//Screens
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
