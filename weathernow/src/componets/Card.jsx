import React from 'react'
import './Card.css'
import { MdLocationOn } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillSunFill } from 'react-icons/bs';

const card = ({ tempoAtual }) => {


    return (
        <div className='container'>

            { tempoAtual.length === 0 &&
                    <div className='loading'>Carregando</div>
            }
            { tempoAtual.length != 0 &&
                <div className="content">

                    <div className="infos">
                        <MdLocationOn />
                        <div className="nameCity">
                            <span >{tempoAtual.city_name}</span>
                        </div>
                        <GiHamburgerMenu />
                    </div>
                    <div className='climate-widget'>
                        <span className='icon'> <BsFillSunFill className='largeIcon' /> </span>
                        <span className='temperature'>33°</span>
                        <span className='climate'>{tempoAtual.weather.description}</span>
                    </div>
                    <div className='daily-temperature-widget'>
                        <div className='today'>
                            <span>Today</span>
                            <span>33°/ 25°</span>
                        </div>
                        <div className='today+1'>
                            <span>Wednesday</span>
                            <span>33°/ 25°</span>
                        </div>
                        <div className='today+2'>
                            <span>Thursday</span>
                            <span>33°/ 25°</span>
                        </div>
                    </div>

                </div>         
            }

        </div>
    )
}

export default card