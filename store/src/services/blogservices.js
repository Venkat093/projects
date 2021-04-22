import axios from 'axios';
const url1 ="http://localhost:8090/addblog";
const url="http://localhost:8090/allblogs";
class blogservices
{
    addproduct(product)
      {
        return axios.post(url1,product);
      }
      getproducts()
      {
          return axios.get(url);
      }
}

export default new blogservices();