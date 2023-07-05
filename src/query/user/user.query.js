import Axios from '../../axios'

export function getCustomer() {
    return Axios.get('/customer/getFormData', { headers: { "authorization": localStorage.getItem('token') } })
}

export function getCustomerByID(id) {
    return Axios.get(`/customer/getCustomerById/${id}`, { headers: { "authorization": localStorage.getItem('token') } })
}