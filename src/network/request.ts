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

export async function getPlaylist() {
  try {
    const response = await axios.get('playlist/update');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getCaptcha(phone) {
  try {
    const response = await axios.get(`/captcha/sent?phone=${phone}`);
    console.log('getCaptcha');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getRegister(phoneNum, pw, captcha) {
  try {
    const response = await axios.get(`register/cellphone?phone=${phoneNum}&password=${pw}&captcha=${captcha}&nickname=Teresa4413`);
    console.log('getRegister');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getLogin(phoneNum, pw) {
  try {
    const response = await axios.get(`login/cellphone?phone=${phoneNum}&password=${pw}`);
    console.log('getLogin');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
