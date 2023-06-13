import React from 'react'
import './Card.css'
import { MdLocationOn } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillSunFill } from 'react-icons/bs';

const card = () => {
    return (
        <div className='container'>
            <div className="infos"> 

                <MdLocationOn />
                <div className="nameCity">
                    <span>Irecê</span>
                </div>
                <GiHamburgerMenu />

            </div>

            <div className='box-img-atual'>
                <span> <BsFillSunFill /> </span>
                
                <span className='celsius'>33°</span>
                <span className='tempo'>Sunny</span>
            </div>

            <div className='previsoes'>
                
            </div>

        </div>
    )
}

export default card