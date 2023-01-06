import Game from "./Pages/Game-page";
import Login from "./Pages/login-page";
import Register from "./Pages/sign-page";
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Games" element={<Game/>} />
      </Routes>
    </div>
  );
}

export default App;
