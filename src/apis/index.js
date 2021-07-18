import axios from 'axios'

const baseURL = 'https://api.thecatapi.com/v1'
const PAGE_LIMIT = 9
const IMAGE_ORDER = 'Desc'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    const key = localStorage.getItem('key')
    if (key) {
      config.headers['x-api-key'] = key
    }
    return config
  },
  err => Promise.reject(err)
)

const apis = {
  // ---------- images ----------
  getAllImages(page) {
    const queryParams = {
      limit: PAGE_LIMIT,
      order: IMAGE_ORDER,
      page
    }
    return axiosInstance.get(`/images/search`, { params: queryParams })
  },
  getUploadImages(page) {
    const queryParams = {
      limit: PAGE_LIMIT,
      order: IMAGE_ORDER,
      page
    }
    return axiosInstance.get(`/images`, { params: queryParams })
  },
  uploadImage(formData) {
    return axiosInstance.post(`/images/upload`, formData, { headers: { 'Content-Type':'multipart/form-data' } })
  },
  // ---------- favourites ----------
  addFavourite(image_id) {
    return axiosInstance.post(`/favourites`, { image_id })
  },
  deleteFavourite(favouriteId) {
    return axiosInstance.delete(`/favourites/${favouriteId}`)
  },
  getAllFavourites(page) {
    if (page !== undefined) {
      const queryParams = {
        limit: PAGE_LIMIT,
        order: IMAGE_ORDER,
        page
      }
      return axiosInstance.get(`/favourites`, { params: queryParams })
    }
    return axiosInstance.get(`/favourites`)
  }
}

export default apis
