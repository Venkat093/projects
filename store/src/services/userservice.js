import axios from 'axios';

const user_urls= "http://localhost:8086/allUsers";
const signup_url="http://localhost:8086/signUp";
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