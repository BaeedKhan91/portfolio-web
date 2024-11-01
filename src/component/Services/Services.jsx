import React from 'react'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Import down arrow icon

import './Services.css'
function Services() {
  return (
    <div id='services' className='services'>
    <div className="services-title">
        <h1>MY Services <hr style={{
            height:'10px',
            width:'50%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/></h1>
    </div>
    <div className="services-container">
    {Services_Data.map((service,index)=>{
        return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    })}
    </div>
    <AnchorLink href='#about'>
    <div className="arrows up-arrow">
                <FontAwesomeIcon icon={faArrowUp} size="lg" />
            </div>
            </AnchorLink>
            <AnchorLink href='#work'>
            <div className="arrows down-arrow">
                <FontAwesomeIcon icon={faArrowDown} size="lg" />
            </div>
            </AnchorLink>
    </div>
  )
}

export default Services