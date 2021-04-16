package com.example.Repository;

import java.util.List;

import com.example.model.cart;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepository extends MongoRepository<cart,Long> {

    List<cart> findAllbyUserId(int user_id);
    
}
