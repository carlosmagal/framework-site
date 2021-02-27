import React, { useEffect, useState, useCallback } from 'react'
import Pagination from '@material-ui/lab/Pagination'

import Card from '../../components/Cards/ToDo/index'

import api from '../../services/api'
import './styles.css'

const ToDos = ()=> {

    const[items, setItems] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[disable, setDisable] = useState(false)
    
    const pages = 10
    const getItems = useCallback( async() => {

        await api.get(`/todos?userId=${currentPage}`)
        .then(response=>{
            setItems(response.data)
            console.log(response)
            // setPages(response.data.length)
            setDisable(false)
        }).catch(error=>{

        })

    }, [ setItems, currentPage])

    useEffect(()=>{
        getItems()
    },[currentPage, getItems])
    // CORRIGIR RESPONSIVIDADE***********************************
    return (
        <div className='todos-container'>
            <div id='todos-container-cards'>
                {items ? 
                    items.map((item)=>(
                        <Card key={item.id} completed={item.completed} title={item.title} id={item.id}/>
                        )
                    )
                    :
                    <></>
                }
                <br/>
                
                
            </div> 

                <div className='container-pagination'>
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
                    />
                    <br/>
                </div> 
        </div>
    )
}

export default ToDos