package com.example.model;

public class CartDTO {


    private Long id;
    private int user_id;
    private int quantity;
    private products product;
    public CartDTO() {
    }
    public CartDTO(cart Cart) {
        this.setId(Cart.getCartid());
        this.setUser_id(Cart.getUser_id());
        this.setQuantity(Cart.getQuantity());
        this.setProduct(Cart.getProduct());
    }
    
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public products getProduct() {
        return product;
    }
    public void setProduct(products product) {
        this.product = product;
    }
    @Override
    public String toString() {
        return "CartDTO [id=" + id + ", product=" + product + ", quantity=" + quantity + ", user_id=" + user_id + "]";
    }
    
    
}
