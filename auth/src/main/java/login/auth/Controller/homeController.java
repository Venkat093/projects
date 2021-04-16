package login.auth.Controller;

import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import login.auth.Models.AuthenticationRequest;
import login.auth.Models.UserModel;
import login.auth.Service.UserRepository;
import login.auth.dto.cartdto;

@RestController
public class homeController {

    @Autowired
    AuthenticationManager authenticationManager;

    // Home
    @RequestMapping("/")
    public String home() {
        return "<h1>Welcome!</h1>";
    }

    // User Page
    @RequestMapping("/user")
    public String user() {
        return "<h1>Welcome user!</h1>";
    }

    // Admin Page
    @RequestMapping("/admin")
    public String admin() {
        return "<h1>Welcome admin!</h1>";
    }

    // Repositroy
    @Autowired
    private UserRepository repository;

    // Sign In Page
    // Let's the user to sign in
    @PostMapping("/signIn")
    public ResponseEntity<?> signIn(@RequestBody AuthenticationRequest auth) {

        String username = auth.getUsername();
        String password = auth.getPassword();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            return ResponseEntity.ok("Authentication Failed! " + e);
        }
        return ResponseEntity.ok("Authentication Succesful! " + username);
    }
    @Autowired
  private RestTemplate resttemplate;
    // Sign Up Page
    // To create new user and add it to the database
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signUp")
    public ResponseEntity<?> signUp(@RequestBody UserModel user) {
   
        repository.save(user);
        resttemplate.postForLocation("http://localhost:8085/addcart",new cartdto(user.getUsername()));
        return ResponseEntity.ok("Added User to the Database with id: " + user.getId());

    }

    // Users List
    // List of all users in the database
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user/allUsers")
    public List<UserModel> getAllUsers() {
        return repository.findAll();
    }

    // Find the user by id
    @GetMapping("/allUsers/{id}")
    public Optional<UserModel> getUser(@PathVariable int id) {
        return repository.findById(id);
    }

    // To delete by id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable int id) throws Exception {
        repository.deleteById(id);
        return ResponseEntity.ok("Added User to the Database with id: " + id);
    }
     
    



}
