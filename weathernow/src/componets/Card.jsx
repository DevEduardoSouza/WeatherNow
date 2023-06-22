import React from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";

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
      {tempoAtual.length === 0 && <div className="loading">Carregando</div>}
      {tempoAtual.length != 0 && (
        <div className="content">
          <div className="climate-widget">
            <span className="icon">
              {" "}
              <BsFillSunFill className="largeIcon" />{" "}
            </span>

            <span className="temperature">
              {tempoAtual.data[index].temp}
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
