import React, { useEffect, useState, useCallback } from 'react'
import Pagination from '@material-ui/lab/Pagination'

import Card from '../../components/Cards/Album/index'

import api from '../../services/api'
import './styles.css'

const Albuns = ()=> {

    const[items, setItems] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[disable, setDisable] = useState(false)
    const[showPagination, setShowPagination] = useState(false)
    
    const pages = 10
    const getItems = useCallback( async() => {

        await api.get(`/albums/${currentPage}/photos`)
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
        <div className='album-container'>
            <div id='album-container-cards'>
                {items ? 
                    items.map((item)=>(
                        <Card key={item.id} image={item.thumbnailUrl} title={item.title} id={item.id}/>
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

export default Albuns