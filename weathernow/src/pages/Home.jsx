import "./Home.css";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import Card from "../componets/Card.jsx";

const prevURL = import.meta.env.VITE_API_PREVISAO;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [tempoInfos, setTempoInfos] = useState([]);
  const [search, setSearch] = useState("São Paulo");

  const getPrevisoes = async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const temperatura = data.data[0].temp;

    data.data[0].temp = parseInt(temperatura.toFixed());

    setTempoInfos(data);
    console.log(data);
  };

  useEffect(() => {
    const tempoAtualURL = `${prevURL}?lang=pt&city=${search}&country=BR&${apiKey}&include=minutely`;
    getPrevisoes(tempoAtualURL);
  }, [search]);

  // Date
  const formatDate = (datetime, yearV) => {
    const apiDateTime = datetime;

    // Extrair a parte da data da string
    const datePart = apiDateTime.substring(0, 10);

    // Converter a string de data em um objeto de data
    const parsedDate = parseISO(datePart);

    // Obter o nome do dia da semana em português (exemplo: "segunda-feira")
    var diaSemana = format(parsedDate, "EEEE", { locale: ptBR });

    // Obter o nome do mês em português (exemplo: "junho")
    const monthName = format(parsedDate, "MMMM", { locale: ptBR });

    // Obter o dia do mês
    const dayOfMonth = parsedDate.getDate();

    // Um formato diferente para o card
    var year = parsedDate.getFullYear();
    if (!yearV) {
      year = "";
      diaSemana = diaSemana.substring(0, 3);
    }

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

  const [valueInput, setValueInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getInput = () => {
    setSearch(valueInput);
  };

  // const limitedData = tempoInfos.data.slice(0, 6); // Limite para 6 elementos

  return (
    <div className="container-home">
      {/* <Card tempoAtual={tempoInfos} prevTempo={prevInfos}/> */}
      <div className="content-home">
        {tempoInfos.length === 0 && <div className="loading"></div>}
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
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${tempoInfos.data[0].weather.icon}.png`}
                  alt="icon"
                />
              </div>
              <div className="weather-description">
                {tempoInfos.data[0].weather.description}
              </div>
              <div className="temp-atual">
                {tempoInfos.data[0].temp}
                <sup>°</sup>
              </div>

              <div className="search-city">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    className="search"
                    name="search"
                    placeholder="Nome da cidade"
                    onChange={(e) => setValueInput(e.target.value)}
                    autoComplete="off"

                    // value={search}
                  />
                  <button type="submit" onClick={getInput}>
                    <BiSearch className="large-search" />
                  </button>
                </form>
              </div>
              <div className="date">
                {formatDate(tempoInfos.data[0].datetime, true)}
              </div>
            </div>
          </div>
        )}

        <div className="tempo-prev">
          <span className="logo">
            {" "}
            <img
              src="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_summer_rain_night_sun_cloudy_cloud_icon_226606.png"
              alt="Logo nuvem"
            />
          </span>

          <div className="tempo-prev-cards">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                tempoAtual={tempoInfos}
                index={index + 1}
                formatDate={formatDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
