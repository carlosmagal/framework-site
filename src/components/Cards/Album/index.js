import React from 'react'

import './styles.css'
const AlbumCard = ({id, image, title}) =>{

    return(
        <div id='card-album'>
            <div className='card-album-content'>
                <img src={image} alt='albuns' className='card-album-image'/>

                <div className='card-album-id-title'>
                    <p className='card-todos-id'>#{id}</p><br/>
                    <p className='card-albuns-id'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard