package com.example.Services;

import com.example.Repository.CartRepository;
import com.example.model.AddtocartDto;
import com.example.model.cart;

public class cartService {

    private CartRepository repo;

    /* public void addToCart(AddToCartDto addToCartDto,int userId){
        Cart cart = getAddToCartFromDto(addToCartDto,userId);
        cartRepository.save(cart);
    }
     */

      public void addtocartDto(AddtocartDto addToCartDto,int user_id)
      {
          cart Cart=getAddToCartFromDto(addToCartDto,user_id);
          repo.save(Cart);
      }

    private cart getAddToCartFromDto(AddtocartDto addToCartDto, int user_id) {
        cart Cart=new cart(addToCartDto,user_id);
        return Cart;
    }



}
