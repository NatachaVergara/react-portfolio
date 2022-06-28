import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'

import InputFile from '../Inputs/InputFile'



const ModalEditImg = (props) => {
 
  

  let oldPath = props.path

  const onHandleSubmit = (file) =>{

    Swal.fire({
      title: '¿Está seguro que quiere actualizar la imagen?',
       imageUrl: `${props.imgurl}`,        
       imageWidth: 100,
       imageHeight: 100,
       imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, actualizar!'
  }).then((result) => {
      if (result.isConfirmed) {
        props.update(file, oldPath)
          Swal.fire({
              title: 'Imagen actualizada',

            })
      }
  })
    console.log(file)
    props.handleclose()



  }
  


  return (
    <Modal  {...props} >   
    <Modal.Body>
    <InputFile   
    onHandleSubmit={onHandleSubmit}
    
    />




    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleclose}>
        Close
      </Button>
      {/* <Button variant="primary" onClick={props.onHandleclick}>
        Save Changes
      </Button> */}
    </Modal.Footer>
  </Modal>
  )
}

export default ModalEditImg