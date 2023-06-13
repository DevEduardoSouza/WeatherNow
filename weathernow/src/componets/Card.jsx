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

            <div className='climate-widget'>
                <span> <BsFillSunFill /> </span>
                <span className='temperature'>33°</span>
                <span className='climate'>Sunny</span>
            </div>

            <div className='daily-temperature-widget'>
                <div className='today'>
                    <span>Today</span>
                    <span>33°/25</span>
                </div>
                <div className='today+1'>
                    <span>Wednesday</span>
                    <span>33°/25</span>
                </div>
                <div className='today+2'>
                    <span>Thursday</span>
                    <span>33°/25</span>
                </div>
            </div>

        </div>
    )
}

export default card