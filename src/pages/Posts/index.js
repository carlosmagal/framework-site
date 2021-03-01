import React, { useEffect, useState, useCallback } from 'react'
import Pagination from '@material-ui/lab/Pagination'

import Card from '../../components/Cards/Post/index'

import api from '../../services/api'
import './styles.css'

const Posts = ()=> {

    const[items, setItems] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[disable, setDisable] = useState(false)
    const[showPagination, setShowPagination] = useState(false)
    
    const pages = 10
    const getItems = useCallback( async() => {

        await api.get(`/posts?userId=${currentPage}`)
        .then(response=>{
            setItems(response.data)
            setDisable(false)
            setShowPagination(true)
            
            // console.log(response)
        }).catch(error=>{

        })

    }, [ setItems, currentPage])

    useEffect(()=>{
        getItems()
    },[currentPage, getItems])

    return (
        <div className='posts-container'>
            <div id='posts-container-cards'>
                {items ? 
                    items.map((item)=>(
                        <Card key={item.id} body={item.body} title={item.title} id={item.id}/>
                        )
                    )
                    :
                    <></>
                }
                <br/>
                
                
            </div> 

                <div className='container-pagination'>
                    
                    {showPagination? 
                        <Pagination 
                            count={pages}
                            page={parseInt(currentPage)}
                            onChange={(event,value) => {
                                value === currentPage ? setDisable(false) : setDisable(true)
                                setCurrentPage(value)
                                window.scrollTo(0, 0)
                                
                            }}
                            color='primary'
                            // size='large'
                            disabled={disable}
                        /> : <></>
                    }
                    <br/>
                </div> 
        </div>
    )
}

export default Posts