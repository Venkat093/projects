package com.example.model;

import java.util.List;

public class CartCost {

    private List<CartDTO> cartitems;
    private double total;
    public CartCost(List<CartDTO> cartitems, double total) {
        this.cartitems = cartitems;
        this.total = total;
    }
    public List<CartDTO> getCartitems() {
        return cartitems;
    }
    public void setCartitems(List<CartDTO> cartitems) {
        this.cartitems = cartitems;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
    
    
}
