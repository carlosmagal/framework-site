import React from 'react'

import './styles.css'

const CommentsCard = ({name, body, email}) =>{

    return(
        <div id='card-comments'>

            <div className='card-comments-name-email'>

                <p className='card-comments-name'>{name}</p>
                <p className='card-comments-email'>{email}</p>
            </div>

            <hr/>

            <p className='card-comments-body'>{body}</p>
            
        </div>
    )
}

export default CommentsCard