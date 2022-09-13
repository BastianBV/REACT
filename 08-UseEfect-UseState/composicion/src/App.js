import LocationPage from "./pages/Location";
import CharacterPage from "./pages/Character";
import EpisodePage from "./pages/Episode";
import Navbar from "./Components/NavBar/Navbar";
import { Routes, Route} from "react-router-dom";
// import React, { useEffect, useState } from "react";

const App = () => {

  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="location" element={<LocationPage/>}/>
            <Route path="character" element={<CharacterPage/>}/>
            <Route path="episode" element={<EpisodePage/>}/>
        </Routes>
    </div>
  );
};

export default App;
