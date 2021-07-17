import axios from 'axios'

const baseURL = 'https://api.thecatapi.com/v1'
const KEY = sessionStorage.getItem('key')
const PAGE_LIMIT = 9
const IMAGE_ORDER = 'Desc'

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'x-api-key': KEY
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
  addFavourite(imageId) {
    return axiosInstance.post(`/favourites`, { imageId })
  },
  deleteFavourite(imageId) {
    return axiosInstance.delete(`/favourites/${imageId}`)
  },
  getAllFavourites(page) {
    const queryParams = {
      limit: PAGE_LIMIT,
      page
    }
    return axiosInstance.get(`/favourites`, { params: queryParams })
  }
}

export default apis
