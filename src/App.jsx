import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Questions from "./Components/Questions";
import Help from "./Components/Help";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//This is where we put all our components and routing is done.
