import { Route, Routes } from 'react-router-dom';
import HomeLogin from '../../pages/Home/HomeLogin';
import Feed from '../../pages/Feed/Feed';
import Friends from '../../pages/Friends/Friends';
import Register from '../../pages/Register/Register';
import PublicFeed from '../../pages/PublicFeed/PublicFeed';
import Profile from '../../pages/Profile/Profile';
import ScrollToTop from '../ScrollToTop';

import "./App.css";
import "./responsive.css";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<HomeLogin />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/register" element={<Register />} />
          <Route path="/public" element={<PublicFeed />} />
          <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </>
  );
}

export default App;