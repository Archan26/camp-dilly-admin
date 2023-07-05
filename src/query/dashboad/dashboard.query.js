import Axios from '../../axios'


export function getDahboardData() {
    
    return Axios.get('/customer/statistics', { headers: { "authorization": localStorage.getItem('token') } })
}
