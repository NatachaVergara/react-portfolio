import Swal from 'sweetalert2'
import { deleteProyect, postProyect, updateProyect } from '../../Utils/CRUD'

export const successTimeout = async (title, html) => {
    let timerInterval
  await  Swal.fire({
        title:` ${title}`,
        html: `${html}`,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })

}

export const deleteFile =async ({id}) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

   await swalWithBootstrapButtons.fire({
        title: '¿Está seguro/a que quiere borrar el archivo?',
        text: "¡No Podrá revertirlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Borrar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Borrado!',
                'Su archivo ha sido borrado exitosamente',
                deleteProyect({id})
                
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Su archivo no ha sido eliminado',
               
            )
        }
    })

    
}


export const addProyect = async (titulo, link, logo, img, tec, resetForm) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

  await  swalWithBootstrapButtons.fire({
        title: '¿Está segura/o de que quiere agregar el archivo?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Agregado!',
                'Su archivo ha sido agregado exitosamente',
                'success',
                postProyect( titulo, link, logo, img, tec ),
                resetForm()
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'El proyecto no ha sido agregado',
                'error'
            )
        }
    })


}


