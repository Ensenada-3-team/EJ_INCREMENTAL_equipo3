import { Route, Routes } from 'react-router-dom';
import HomeLogin from '../../pages/Home/HomeLogin';
import Feed from '../../pages/Feed/Feed';
import Friends from '../../pages/Friends/Friends';
import Register from '../../pages/Register/Register';


import "./App.css";
import "./responsive.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;