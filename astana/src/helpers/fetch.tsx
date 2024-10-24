import axios from 'axios';

export const fetch = (method: string, data: unknown, baseUrl: string, endPoint: string, token?: string, tag?: string, params?: string,) => {
  console.log('Data: --->', method, data, baseUrl, endPoint, 'token: ', token, params, tag)

  let url: string = ''
  // if (params) { url = `${baseUrl}/${endPoint}${params}` } else { url = `${baseUrl}/${endPoint}` }
  if (params) { url = `${baseUrl}/${endPoint}${params}` } else { url = `${baseUrl}` }

  const result = axios({
    url,
    method,
    headers: {
      // 'Authorization': token && `Bearer ${token}`,
    },
    data
  })
    .then(res => {
      return res
    }).catch(error => { return error })
  return result
}