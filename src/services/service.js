// Ajax 処理があるならここに追加する　たぶんないと思う

// const service = {
//     getUserDetailed
// };

// function getUserDetailed(userId) {
//     const requestOptions = {
//         method: 'GET',
//     };

//     return fetch(`http://localhost:7777/user/find/${userId}`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//           const error = (data && data.message) || response.statusText;
//           return Promise.reject(error);
//         }

//         return data;
//     });
// }

// export default service;