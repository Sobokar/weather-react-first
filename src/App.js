import React from "react";
import CitySearchForm from "./CitySearchForm";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="appHeader">Weather App for Any Place</h1>
      <div className="appBody">
        <CitySearchForm />
        <footer>
          This project was coded by
          <a
            href="https://github.com/Sobokar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yevheniia Sobokar
          </a>
          and is on
          <a
            href="https://github.com/Sobokar/weather-react-first"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          and hosted
          <a
            href="https://weather-react-app-step1.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
