import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

import Card from '../Cards/Comments/index'
import './styles.css'

const CommentsModal = ({comments, showModal, setShowModal}) =>{

    return(
        <Dialog
                open={showModal} 
                aria-labelledby="draggable-dialog-title" 
                maxWidth='md'
                onClose={()=>setShowModal(false)}
                // scroll='body'
            >
                <DialogContent>
                    <div className='modal-comments'>
                        {
                            comments.map(item=>(
                                <Card key={item.id} name={item.name} body={item.body} email={item.email}/>
                            ))
                        }
                        <DialogActions>
                            <p className ='button-modal'onClick={()=>setShowModal(false)}>Fechar</p>
                        
                        </DialogActions>
                    </div>
                </DialogContent>
            </Dialog>
    )
}

export default CommentsModal