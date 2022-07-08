import axios from 'axios';
// Want to use async/await? Add the `async` keyword to your outer function/method.
axios.defaults.baseURL = 'http://localhost:3000/'
// Only the url is required.
// const instance = axios.create({
//   baseURL: 'http://localhost:3000/',
//   timeout: 10000,
//   withCredentials: true, 
// });

export async function getUser() {
  try {
    const response = await axios.get('register/anonimous');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}