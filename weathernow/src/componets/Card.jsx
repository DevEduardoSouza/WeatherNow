import React from "react";
import "./Card.css";

const card = ({ tempoAtual, index, formatDate }) => {
  //   const date = formatDate(tempoAtual.datetime);

  var date = "";
  if (tempoAtual.length != 0) {
    date = tempoAtual.data[index].datetime
      ? formatDate(tempoAtual.data[index].datetime, false)
      : "";
  }

  return (
    <div className="container">
      {tempoAtual.length === 0 && <div className="loading"></div>}
      {tempoAtual.length != 0 && (
        <div className="content">
          <div className="climate-widget">
            <div className="icon">
              {" "}
              <img
                src={`https://www.weatherbit.io/static/img/icons/${tempoAtual.data[index].weather.icon}.png`}
                alt="icon"
              />
            </div>

            <span className="temperature">
              {tempoAtual.data[index].app_max_temp}
              <sup>°</sup>{" "}
            </span>

            <span className="climate">
              {tempoAtual.data[index].weather.description}
            </span>
            <div className="dateCard">{date}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default card;
