package com.example.model;

public class AddtocartDto {

    private Long id;
    private int user_id;
    private Long productid;
    private int quantity;

    
    public AddtocartDto(cart Cart) {
        this.setId(Cart.getCartid());
        this.setUser_id(Cart.getUser_id());
        this.setProductid(Cart.getProductid());
        this.setQuantity(Cart.getQuantity());
    }


    public AddtocartDto(Long id, int user_id, Long productid, int quantity) {
        this.id = id;
        this.user_id = user_id;
        this.productid = productid;
        this.quantity = quantity;
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


    public Long getProductid() {
        return productid;
    }


    public void setProductid(Long productid) {
        this.productid = productid;
    }


    public int getQuantity() {
        return quantity;
    }


    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    @Override
    public String toString() {
        return "AddtocartDto [id=" + id + ", productid=" + productid + ", quantity=" + quantity + ", user_id=" + user_id
                + "]";
    }
    

}


