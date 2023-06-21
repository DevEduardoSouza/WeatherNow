import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import Card from "../componets/Card.jsx";
import "./Home.css";

const tempoURL = import.meta.env.VITE_API;
const prevURL = import.meta.env.VITE_API_PREVISAO;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [tempoInfos, setTempoInfos] = useState([]);
  const [prevInfos, setPrevInfos] = useState([]);
  const [search, setSearch] = useState("irece");

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
    const tempoAtualURL = `${tempoURL}?lang=pt&city=${search}&${apiKey}&include=minutely`;
    const prevAtualURL = `${prevURL}?lang=pt&city=Irecê&${apiKey}`;
    getInfoTempo(tempoAtualURL);
    getPrevisoes(prevAtualURL);
  }, [search]);

  const formatDate = (datetime) => {
    const apiDateTime = datetime;

    // Extrair a parte da data da string
    const datePart = apiDateTime.substring(0, 10);

    // Converter a string de data em um objeto de data
    const parsedDate = parseISO(datePart);

    // Obter o nome do dia da semana em português (exemplo: "segunda-feira")
    const diaSemana = format(parsedDate, "EEEE", { locale: ptBR });

    // Obter o nome do mês em português (exemplo: "junho")
    const monthName = format(parsedDate, "MMMM", { locale: ptBR });

    // Obter o dia do mês
    const dayOfMonth = parsedDate.getDate();

    // Obter o ano
    const year = parsedDate.getFullYear();

    const formatDateString =
      diaSemana.replace("-", " ") +
      ", " +
      dayOfMonth +
      " " +
      monthName +
      " " +
      year;

    return formatDateString;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validações do search
    if (!search) return;

    setSearch(`${search}`);
  };

  console.log("TempoInfos");
  console.log(tempoInfos);

  return (
    <div className="container-home">
      {/* <Card tempoAtual={tempoInfos} prevTempo={prevInfos}/> */}
      <div className="content-home">
        {tempoInfos.length === 0 && <div className="loading">Carregando</div>}
        {tempoInfos.length != 0 && (
          <div className="tempo-hoje">
            <span className="logo">
              {" "}
              <img
                src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_summer_rain_night_sun_cloudy_cloud_icon_226606.png"
                alt="Logo nuvem"
              />
            </span>

            <div className="infos">
              <div className="name-city">{tempoInfos.city_name}</div>

              <div className="temp-icon">
                <BsFillSunFill className="large-icon" />
              </div>
              <div className="weather-description">
                {tempoInfos.weather.description}
              </div>
              <div className="temp-atual">
                {tempoInfos.temp}
                <sup>°</sup>
              </div>

              <div className="search-city">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    className="search"
                    name="search"
                    placeholder="Nome da cidade"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                  <button type="submit">
                    <BiSearch className="large-search" />
                  </button>
                </form>
              </div>
              <div className="date">{formatDate(tempoInfos.datetime)}</div>
            </div>
          </div>
        )}

        <div className="tempo-prev"></div>
      </div>
    </div>
  );
};

export default Home;
