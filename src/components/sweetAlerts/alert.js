import Swal from 'sweetalert2'
import { BASE_URL } from '../../Utils/URL'


export const onDeleteAlert = (path) => {
    Swal.fire({
        title: '¿Está seguro que quiere eliminar?',
        text: "Una vez eliminado no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                `Deleted! ${path} `,                
                'Su imagen ha sido eliminada.',
                'success'
            )
        }
    })
}

export const agregado = (texto) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${texto}`,
        showConfirmButton: false,
        timer: 1500
      })
}


export const onEditAlert = (path) => {
    Swal.fire({
        title: 'Su nueva imagen',
        text: 'Ha sido actualizada',
        imageUrl: `${BASE_URL}/upload/slider/${path}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}


export const errorLogin = (message) => {
    Swal.fire(`${message}`)
}