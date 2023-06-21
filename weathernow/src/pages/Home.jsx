import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import Card from "../componets/Card.jsx";
import "./Home.css";

const tempoURL = import.meta.env.VITE_API;
const prevURL = import.meta.env.VITE_API_PREVISAO;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [tempoInfos, setTempoInfos] = useState([]);
  const [prevInfos, setPrevInfos] = useState([]);

  const getInfoTempo = async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const temperatura = data.data[0].temp;
    data.data[0].temp = parseInt(temperatura.toFixed());
    setTempoInfos(data.data[0]);

    // console.log(data.data[0].city_name);
    // console.log(data.city_name);
  };

  const getPrevisoes = async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    setPrevInfos(data.data[0]);
    // console.log(data);
    // console.log(data.data[0].app_max_temp);
  };

  useEffect(() => {
    const tempoAtualURL = `${tempoURL}?lang=pt&city=Irecê&${apiKey}&include=minutely`;
    const prevAtualURL = `${prevURL}?lang=pt&city=Irecê&${apiKey}`;
    getInfoTempo(tempoAtualURL);
    getPrevisoes(prevAtualURL);
  }, []);

  // console.log("TempoInfos");
  // console.log(tempoInfos);

  return (
    <div className="container-home">
      {/* <Card tempoAtual={tempoInfos} prevTempo={prevInfos}/> */}
      <div className="content-home">
        {tempoInfos.length === 0 && <div className="loading">Carregando</div>}
        {tempoInfos.length != 0 && (
          <div className="tempo-hoje">
            <span className="logo">Logo</span>

            <div className="infos">
              <div className="temp-icon">
                <BsFillSunFill className="large-icon" />
              </div>
              <div className="weather-description">
                {tempoInfos.weather.description}
              </div>
              <div className="temp-atual">
                {tempoInfos.temp}
                <sup>°c</sup>
              </div>

              <div className="search-city">
                <form>
                  <input
                    type="search"
                    className="search"
                    name="search"
                    placeholder="Nome da cidade"
                  />
                  <button type="submit">
                    <BiSearch className="large-search" />
                  </button>
                </form>
              </div>
              <div className="date"></div>
              <div className="name-city">{tempoInfos.city_name}</div>
            </div>
          </div>
        )}

        <div className="tempo-prev"></div>
      </div>
    </div>
  );
};

export default Home;
