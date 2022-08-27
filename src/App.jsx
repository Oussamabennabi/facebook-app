
import { Route, Routes,  useLocation } from "react-router-dom";
import { Messenger } from "./features/messenger";

import Bookmarks from "./pages/Bookmarks";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Watch from "./pages/Watch";

function App() {
  const location = useLocation();
  
  return (
    <div className="">
      { location.pathname!=='/' && <Messenger/> }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/marketplace" element={<Marketplace />} />

      </Routes>

    </div>
  );
}

export default App;
