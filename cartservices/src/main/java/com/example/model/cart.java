package com.example.model;

import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection="cart")
public class cart {
    
    @Id
    private Long cartid;
    private int user_id;
    private Long productid;
    private products product;
    private int quantity;


    public cart(Long cartid, int user_id, Long productid, products product, int quantity) {
        this.cartid = cartid;
        this.user_id = user_id;
        this.productid = productid;
        this.product = product;
        this.quantity = quantity;
    }
    
   
    public cart(AddtocartDto addToCartDto, int user_id2) {
    }


    public Long getCartid() {
        return cartid;
    }
    public void setCartid(Long cartid) {
        this.cartid = cartid;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public Long getProductid() {
        return productid;
    }
    public void setProductid(Long productid) {
        this.productid = productid;
    }
    public products getProduct() {
        return product;
    }
    public void setProduct(products product) {
        this.product = product;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    
   
}
