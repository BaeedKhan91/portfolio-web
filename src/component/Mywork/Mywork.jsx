import React from 'react'
import mywork_data from '../../assets/mywork_data'
import arrow from './../../assets/arrow_icon.svg'
import './Mywork.css'
function Mywork() {
  return (
    <div className='mywork'>
    <div className="mywork-title">
        <h1>My Latest Work</h1>
    </div>
    <div className="mywork-container">
    {mywork_data.map((work,index)=>{
        return <img className='pr-img' key={index} src={work.w_img} alt="" style={{
            width:'419px',
            height:'280pxpx',
            viewBox:"0 0 419 280", 
            fill:"none",
            objectFit:"cover",
            objectPosition:"center",
            boxSizing:'border-box',
            borderRadius:'10px',
           
        }}/>
    })}
    </div>
    <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="" />
    </div>
    </div>
  )
}

export default Mywork