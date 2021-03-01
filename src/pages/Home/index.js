import React from 'react'

import Jedi from '../../assets/anakin.png'
import './styles.css'
const Home = () =>{

    return(
        <div id='home'>
            <div className='home-content'>
                <div className='home-content-title-image'>
                    <div className='home-content-right'>
                        <p className='home-content-title'>FrameWork Padawans</p>
                        <p className='home-content-name'>Carlos Magalhães Silva</p>
                    </div>

                    <img src={Jedi} alt='jedi'/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home