import { Route, Routes } from 'react-router-dom';
import HomeLogin from '../../pages/Home/HomeLogin';
import Feed from '../../pages/Feed/Feed';


import "./App.css";
import "./responsive.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;