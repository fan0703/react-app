import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NewsList from "./components/newslist/NewsList";
import SearchBar from "./components/searchbar/SearchBar";
import Nav from "./components/nav/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [articles, setArticles] = useState([]);
  const getAriticles = async (searchterm) => {
    try {
      const response = await axios.get(
        // `https://newsapi.org/v2/everything?q=${searchterm}&sortBy=publishedAt&apiKey=535a69a0088740faa020385828cb6d70`
       `https://gnews.io/api/v4/search?q=${searchterm}&lang=en&country=us&max=10&apikey=4e160165584709bc7c2a7ea70810028e`
      );
      console.log(response);
      setArticles(response.data.articles);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAriticles("fun");
  }, []);

  return (
    <div className=" App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Sign_in" element={<Dashboard />} />
      </Routes>
      <SearchBar articlesearch={getAriticles} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;


