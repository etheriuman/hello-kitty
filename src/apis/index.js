import axios from 'axios'

const baseURL = 'https://api.thecatapi.com/v1'
const PAGE_LIMIT = 9
const IMAGE_ORDER = 'Desc'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'x-api-key': sessionStorage.getItem('key')
  }
})

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
  getAllFavourites() {
    return axiosInstance.get(`/favourites`)
  }
}

export default apis
