import axios from "axios";
// Want to use async/await? Add the `async` keyword to your outer function/method.
axios.defaults.baseURL = "http://localhost:3000/";

export async function getUser() {
  try {
    const response = await axios.get("register/anonimous");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getPlaylist() {
  try {
    const response = await axios.get("playlist/update");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getCaptcha(phone) {
  try {
    const response = await axios.get(`/captcha/sent?phone=${phone}`);
    console.log("getCaptcha");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getRegister(phoneNum, pw, captcha) {
  try {
    const response = await axios.get(
      `register/cellphone?phone=${phoneNum}&password=${pw}&captcha=${captcha}&nickname=Teresa4413`
    );
    console.log("getRegister");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getLogin(phoneNum, pw) {
  try {
    const response = await axios.get(`login/cellphone?phone=${phoneNum}&password=${pw}`);
    console.log("getLogin");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getUserAcct() {
  try {
    const res: any = await axios.get("/user/account");
    console.log(res.data.account.id);
    return res.data.account.id;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserSubCount() {
  try {
    const res: any = await axios.get("/user/subcount");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

export async function getUserLevel() {
  try {
    const res: any = await axios.get("/user/level");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

// todo
// export async function getUpdate(gender, signature, city, nickname, birthday, province) {
export async function getUpdate(...args) {
  try {
    const res: any = await axios.get(`/user/update?gender=${args[0].gender}&signature=${args[0].signature}
    &city=${args[0].city}&nickname=${args[0].nickname}&birthday=${args[0].birthday}&province=${args[0].province}`);
  } catch (error) {
    console.error(error);
  }
}

export async function getUserPlaylist(uid) {
  try {
    const res: any = await axios.get(`/user/playlist?uid=${uid}`);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

export async function getBanner(type = 0) {
  try {
    const res: any = await axios.get(`/banner?type=${type}`);
    // console.log(res);
    return res.data.banners;
  } catch (error) {
    console.error(error);
  }
}

export async function getPersonalized(limit = 30) {
  try {
    const res: any = await axios.get(`/personalized?limit=${limit}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPrivateContent() {
  try {
    const res: any = await axios.get("/personalized/privatecontent");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}


export async function getDjprogramt() {
  try {
    const res: any = await axios.get("/dj/recommend");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}