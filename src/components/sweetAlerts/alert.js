import Swal from 'sweetalert2'


export const successTimeout = async (title, html) => {
    let timerInterval
    await Swal.fire({
        title: ` ${title}`,
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



export const errorLogin = (message) => {
    Swal.fire(`${message}`)
}