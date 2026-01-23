import axios from 'axios'

class AxiosClient {
  constructor({ baseURL, headers } = {}) {
    this.instance = axios.create({
      baseURL,
      headers,
    })
  }

  async get(path, config = {}) {
    const response = await this.instance.get(path, config)
    return response.data
  }
}

export default AxiosClient
