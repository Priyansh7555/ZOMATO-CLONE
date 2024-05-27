import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style/Home.css';
import './Style/Filter.css';

import Wallpaper from './component/Wallpaper.js';

import Filter from './component/Filter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home.js';



import { BrowserRouter, Routes, Route } from "react-router-dom";

import Detail from './component/Detail.js';
import Header from './component/Header.js';

export default function App() {
  return (
    <BrowserRouter forceRefresh = {true}>
    <Header />
      <Routes>
        <Route path="*" element={<Header />} />
        <Route path="/" element={<Home/>} />
        <Route path='' element={<App/>} />

        {/* <Route  path="/" element={<Wallpaper />} /> */}
        {/* <Route index element={<Wallpaper />} /> */}
        
        <Route path="/filter" element={<Filter />} />
        <Route path="/detail" element={<Detail />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

