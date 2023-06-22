import React from "react";
import "./Card.css";
import { MdLocationOn } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";

const card = ({ tempoAtual }) => {
  return (
    <div className="container">
      {tempoAtual.length === 0 && <div className="loading">Carregando</div>}
      {tempoAtual.length != 0 && (
        <div className="content">
          <div className="infos"></div>

          <div className="climate-widget">
            <span className="icon">
              {" "}
              <BsFillSunFill className="largeIcon" />{" "}
            </span>

            <span className="temperature">
              {tempoAtual.temp}
              <sup>°</sup>{" "}
            </span>

            <span className="climate">{tempoAtual.weather.description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default card;
