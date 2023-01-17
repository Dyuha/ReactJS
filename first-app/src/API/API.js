import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, pageSize){
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowUser(userID){
    return instance
      .delete(`follow/${userID}`)
      .then(response => response.data);
  },
  followUser(userID){
    return instance
      .post(`follow/${userID}`)
      .then(response => response.data);
  },
  getUserProfile(userID){
    console.warn('Obsolete method. Please use profileAPI method')
    return profileAPI.getUserProfile(userID);
  },
};

export const authAPI = {
  getAuth(){
    return instance
      .get(`auth/me`)
      .then(response => response.data);
  },
  login(email, password, rememberMe=false, captcha){
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha})
      .then(response => response.data);
  },
  logout(){
    return instance
      .delete(`/auth/login`)
      .then(response => response.data);
  }
};

export const profileAPI = {
  getUserProfile(userID){
    return instance
      .get(`profile/${userID}`)
      .then(response => response.data);
  },
  getStatus(userID){
    return instance
      .get(`profile/status/${userID}`)
      .then(response => response.data);
  },
  updateStatus(status){
    return instance
      .put(`profile/status`, {status: status})
      .then(response => response.data)
  },
  savePhoto(photo){
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => response.data)
  }
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
    .get(`security/get-captcha-url`)
    .then(response => response.data)
  }
}