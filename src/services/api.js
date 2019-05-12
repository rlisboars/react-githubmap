import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export const getUser = user => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(user)
      resolve(data)
    } catch (err) {
      let errorMessage
      if (err.response.status === 404) errorMessage = 'Usuário não encontrado'
      else errorMessage = 'Erro ao buscar usuário'
      reject(errorMessage)
    }
  })
}

export default api
