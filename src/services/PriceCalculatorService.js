import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:8080/v1/api'
})

class PriceCalculatorService {


    getPriceList(){
        return api.get('/pricelist');
    }

    calculateCost(body){
        return api.post('/calculator',body)
    }

}

export default new PriceCalculatorService()