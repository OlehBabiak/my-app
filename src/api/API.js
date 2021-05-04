import axios from 'axios'
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

})

const getUsers = async () => {
    let {data} = await  axiosInstance('/users')
    return data
}
const getPosts = async () => {
    let {data} = await  axiosInstance('/posts')
    return data
}
const getComments = async () => {
    let {data} = await  axiosInstance('/comments')
    return data
}
const getAlbums = async () => {
    let {data} = await  axiosInstance('/albums')
    return data
}
const getPhotos = async () => {
    let {data} = await  axiosInstance('/photos')
    return data
}
const getTodos = async () => {
    let {data} = await  axiosInstance('/todos')
    return data
}

// const getUser = async (id) => {
//     let {data} = await  axiosInstance(`/users/${id}`)
//     return data
// }

export {getUsers, getPosts, getComments, getAlbums, getPhotos, getTodos}
