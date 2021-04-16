package com.example.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
public class products
{
    @Id
    private Long id;
    private String Productname;
    private String brand;
    private String Ram;
    private String Rom;
    private String Weight;
    private String Publisher;
    private double Listprice;
    private String img;
    private String discription;
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getProductname() {
        return Productname;
    }
    public void setProductname(String productname) {
        Productname = productname;
    }
 
    public String getRam() {
        return Ram;
    }
    public void setRam(String ram) {
        Ram = ram;
    }
    public String getRom() {
        return Rom;
    }
    public void setRom(String rom) {
        Rom = rom;
    }
    public String getWeight() {
        return Weight;
    }
    public void setWeight(String weight) {
        Weight = weight;
    }
    public String getPublisher() {
        return Publisher;
    }
    public void setPublisher(String publisher) {
        Publisher = publisher;
    }
    public double getListprice() {
        return Listprice;
    }
    public void setListprice(double listprice) {
        Listprice = listprice;
    }
    public String getImg() {
        return img;
    }
    public void setImg(String img) {
        this.img = img;
    }
    public String getDiscription() {
        return discription;
    }
    public void setDiscription(String discription) {
        this.discription = discription;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getBrand() {
        return brand;
    } 
  
}