export const baseApiUrl = './employeesMock.json'

export default {
    get: (url) => fetch(url)
        .then(response => response.json())
        .then(result => { console.info('HTTP get success', result); return result.data; })
        .catch(error => console.log('HTTP get failed', { url, error })),

    post: (url, payload) => fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
    })
        .then(response => response.json())
        .then(result => { console.info('HTTP post success', result); return result.data; })
        .catch(error => console.log('HTTP post failed', { url, error })),
}