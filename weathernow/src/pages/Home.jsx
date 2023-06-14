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

    setTempoInfos(data);
    console.log(data);

  }


  useEffect(() => { 

    const tempoAtualURL =`${tempoURL}?city=Irecê&${apiKey}`;
    getInfoTempo(tempoAtualURL);
  }, []);




  return (
    <div className='cotainerHome'>

      <Card tempoAtual={tempoInfos} />

    </div>
  )
}

export default Home