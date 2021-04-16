import axios from 'axios';

const user_urls= "http://localhost:8081/user/allUsers";
const signup_url="http://localhost:8081/signUp";
class userservice
{

      getusers()
      {
          return axios.get(user_urls);
      }
      createuser(user)
      {
       return axios.post(signup_url,user);
     }
}

export default new userservice();