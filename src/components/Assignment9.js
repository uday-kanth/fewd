import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import A9About from './A9About';
import A9Contact from './A9Contact';
import A9Home from './A9Home';
const Assignment9= () => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<A9About/>}></Route>
        <Route path="/" element={<A9Home/>}></Route>
        <Route path="/contact" element={<A9Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Assignment9;