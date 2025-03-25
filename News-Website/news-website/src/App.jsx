import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home_Page.jsx';
import NewsPage from "./Components/National_International_page.jsx";
import Sports from './Components/Sports_news.jsx';
import Entertainment from './Components/Entertainment_news.jsx';
import Business from "./Components/Business_news.jsx";






function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<NewsPage />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </>
  );
}

export default App;
