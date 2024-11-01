import React from 'react'
import mywork_data from '../../assets/mywork_data'
import arrow from './../../assets/arrow_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Import down arrow icon

import './Mywork.css'
function Mywork() {
  return (
    <div id='work' className='mywork'>
    <div className="mywork-title">
        <h1>My Latest Work <hr style={{
            height:'10px',
            width:'50%',
            background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
            border:'none',
            borderRadius:'10px'

        }}/></h1>
    </div>
    <div className="mywork-container">
    {mywork_data.map((work,index)=>{
        return <img className='pr-img' key={index} src={work.w_img} alt="" style={{
            width:'419px',
            height:'280px',
            viewBox:'0 0 419 280',
            fill:'none',
            objectFit:'cover',
            objectPosition:"center",
            boxSizing:'border-box',
            borderRadius:'10px'
        }}/>
    })}
    </div>
    <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
    </div>
    <AnchorLink href='#services'>
    <div className="arrows up-arrow">
                <FontAwesomeIcon icon={faArrowUp} size="lg" />
            </div>
            </AnchorLink>
            <AnchorLink href='#contact'>
            <div className="arrows down-arrow">
                <FontAwesomeIcon icon={faArrowDown} size="lg" />
            </div>
            </AnchorLink>
    </div>
  )
}

export default Mywork