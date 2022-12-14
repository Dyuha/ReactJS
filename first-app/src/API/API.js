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
      .then(response => response.data)
  },
  followUser(userID){
    return instance
      .post(`follow/${userID}`)
      .then(response => response.data)
  },
  getAuth(){
    return instance
      .get(`auth/me`)
      .then(response => response.data)
  },
  getUserProfile(userID){
    return instance
      .get(`profile/${userID}`)
      .then(response => response.data)
  },
};