import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>ThaparGenie</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some fields of engineering</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Computer Engineering</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Hostels at Thapar University</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Sodexo cafes in TIET</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter your question here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    ThaparGenie may display some old information, so double check with the helpline number if you have any queries related to fees structure.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main