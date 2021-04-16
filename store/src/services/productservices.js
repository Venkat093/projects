import axios from 'axios';
const product_urls= "http://localhost:8082/api/allproducts";
const url ="http://localhost:8082/api/allproduct";
const url1 ="http://localhost:8082/api/addproduct";
class productservices
{
    getproducts()
      {
          return axios.get(product_urls);
      }

      getproductbyid(Id)
      {
          return axios.get(product_urls+'/'+Id);
      }
      getproductbybrand(Brand)
      {
        return axios.get(url+'/'+Brand);
      }
      addproduct(product)
      {
        return axios.post(url1,product);
      }
      updateproduct(product,productid)
      {
        return axios.put(product_urls+'/'+productid,product);
      }
     
}

export default new productservices();


