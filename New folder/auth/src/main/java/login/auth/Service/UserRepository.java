package login.auth.Service;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import login.auth.Models.*;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {

}
