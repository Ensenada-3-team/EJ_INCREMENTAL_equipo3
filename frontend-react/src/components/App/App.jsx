import { Route, Routes } from 'react-router-dom';
import HomeLogin from '../../pages/Home/HomeLogin';
import Feed from '../../pages/Feed/Feed';


import "./App.css";
import "./responsive.css";

function App() {

  // useEffect(() => {
  //   document.body.classList.add("background-contain"); // Agregamos la clase "background-contain" al body
  //   return () => {
  //     document.body.classList.remove("background-contain"); // Removemos la clase "background-contain" del body al desmontar el componente
  //   }
  // }, []);

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