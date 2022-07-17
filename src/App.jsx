import React from 'react';
import Main from './pages/Main';
import Imgpre from './pages/Imgpre';
import Deleted from './pages/Deleted';
import './style/Style.css';
import './style/Animation.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
const App = () => {
    /*jshint ignore: start */
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="view_img" element={<Imgpre/>}/>
                <Route path="del_img" element={<Deleted/>}/>
            </Routes>
         </BrowserRouter>
        )
    /*jshint ignore: end */
};

export default App;
