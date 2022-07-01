import axios from "axios"
import { agregado } from "../components/sweetAlerts/alert"
import { BASE_URL } from "./URL"

export const deleteSlider = async (path, setImgsSlider) => {
    try {
        const response = await axios.delete(`${BASE_URL}/upload/slider/${path}`)
        const slider = await response.data.registros

        if (response.status === 200) {
            setImgsSlider(slider)
        }

        if (response.status === 304) {
            //mensaje sweetalert2
            agregado('Ha ocurrido un error')
        }
    } catch (error) {
        console.log(error)
    }
}