import './Home.css'
import React, { useEffect, useState } from 'react'

import Card from '../componets/Card.jsx'



const tempoURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {


  const [tempoInfos, setTempoInfos] = useState([]);

  const getInfoTempo = async (url) =>{
    const resposta = await fetch(url);
    const data = await resposta.json();

    setTempoInfos(data.data[0]);

    // console.log(data.data[0].city_name);
    // console.log(data.city_name);

    
  }
  

  useEffect(() => { 
    const tempoAtualURL =`${tempoURL}?lang=pt&city=Irecê&${apiKey}&include=minutely`;
    getInfoTempo(tempoAtualURL);
    // console.log(tempoInfos.weather.description);
  }, []);




  return (
    <div className='cotainerHome'>

      <Card tempoAtual={tempoInfos} />

    </div>
  )
}

export default Home