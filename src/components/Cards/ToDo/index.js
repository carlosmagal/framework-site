import React from 'react'

import check from '../../../assets/icons/check.svg'
import x from '../../../assets/icons/x.svg'
import './styles.css'

const toDoCard = ({id, title, completed}) =>{


    return(
        <div id='card-toDos'>

            <div className='card-todos-id-check'>
                <p className='card-todos-id'>#{id}</p>
                <img src={completed ? check : x} alt='check' className='card-todos-check'/>
            </div>

            <p className='card-todos-text'>{title}</p>
            
        </div>
    )
}
export default toDoCard