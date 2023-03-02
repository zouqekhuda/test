import axios from 'axios'
export const getCartData = async () => {
    return await axios.get('https://dummyjson.com/carts')
}