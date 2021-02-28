import React , { useState } from 'react'

import CommentsModal from '../../Modal/index'

import api from '../../../services/api'
import './styles.css'

const PostsCard = ({title, body, id}) =>{

    const[showModal, setShowModal] = useState(false)
    const[comments, setComments] = useState([])

    const showComments = async() =>{

        await api.get(`/posts/${id}/comments`)
        .then(response=>{
            setComments(response.data)//dados do modal
            setShowModal(true)//carrega o modal
            
            console.log(response)
        }).catch(error=>{

        })
    }

    return(
        <div id='card-posts'>

            <p className='card-posts-title'>{title}</p>
            <p className='card-posts-body'>{body}</p>
            <button className='card-posts-button' onClick={showComments}> Ver comentários</button>
            
            <CommentsModal 
                showModal={showModal} 
                setShowModal={setShowModal}
                comments={comments}
            />
        </div>
    )
}

export default PostsCard