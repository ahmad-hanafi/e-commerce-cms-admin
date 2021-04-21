import axios from 'axios'
// const baseURL = 'http://localhost:3000/'
const baseURL = 'https://ecommerce-toko-beras.herokuapp.com/'

export function login ({commit}, {email, password, router}) {
    const data = { email, password}
    axios
    .post(`${baseURL}login`, data)
    .then((response) => {
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/')
    })
    .catch((error) => {
        console.log(error)
    })
}

export function getProducts({ commit }) {
    axios
    .get(`${baseURL}products`)
    .then((response) => {
        commit('SET_PRODUCTS', response.data)
    })
    .catch((error) => console.log(error))
}

export function getProductById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}products/${id}`)
    .then((response) => {
        commit('SET_PRODUCTBYID', response.data)
        router.push('/products/update')
    })
}

export function addProduct ({commit}, {name, image, category, price, stock, router}) {
    const addData = {
        name: name,
        image_url: image,
        category: category,
        price: price,
        stock: stock
      }
    axios
    .post(`${baseURL}products`, addData, {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(response => {
      router.push('/')
    })
    .catch(error => console.log(error))
}

export function updateProduct({ state, dispatch }, {id, router}) {
    const dataUpdate = {
        name: state.item.name,
        image_url: state.item.image,
        category: state.item.category,
        price: state.item.price,
        stock: state.item.stock
    }
    axios
    .put(`${baseURL}products/${id}`, dataUpdate, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getProducts')
        router.push('/')
    })
    .catch((error) => console.log(error))
}

export function deleteProduct ({dispatch}, {id}) {
    axios
    .delete(`${baseURL}products/${id}`, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getProducts')
    })
    .catch((error) => console.log(error))
}