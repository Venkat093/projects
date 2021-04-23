package login.auth.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import login.auth.Models.AuthenticationRequest;
import login.auth.Models.AuthenticationResponse;

import login.auth.Models.UserModel;
import login.auth.Service.MyUserDetailsService;
import login.auth.Service.UserRepository;
import login.auth.Util.JwtUtil;

import login.auth.dto.RequestResponse;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {
    @Autowired
    JwtUtil JwtUtil;

    @Autowired
    MyUserDetailsService MyUserDetailsService;

    @Autowired
    AuthenticationManager authenticationManager;

    // Repositroy
    @Autowired
    private UserRepository userRepository;

    @Autowired
    RestTemplate restTemplate;

    // Home
    @RequestMapping("/")
    public String home() {
        return "<h1>Welcome to Auth-Application!</h1>";
    }

    // User Page
    @RequestMapping("/user")
    public String user() {
        return "<h1>Welcome to Auth-Application user!</h1>";
    }

    // Admin Page
    @RequestMapping("/admin")
    public String admin() {
        return "<h1>Welcome to Auth-Application admin!</h1>";
    }

    // Sign In Page
    // Let's the user to sign in
    @PostMapping("/logIn")
    public ResponseEntity<?> signIn(@RequestBody AuthenticationRequest auth) {

        String username = auth.getUsername();
        String password = auth.getPassword();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            return ResponseEntity.ok(new RequestResponse("Authentication Failed!"));
        }

        final UserDetails userDetails = MyUserDetailsService.loadUserByUsername(auth.getUsername());
        final String jwt = JwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(auth.getUsername(), "Authentication Succesful!", jwt,
                userRepository.findById(auth.getUsername()).get().getRoles()));
    }

    // Sign Up Page
    // To create new user and add it to the database
    @PostMapping("/signUp")
    public ResponseEntity<?> signUp(@RequestBody UserModel user) {

        userRepository.save(user);
        return ResponseEntity.ok("Added User to the Database with id: " + user.getUserName());

    }

    // Users List
    // List of all users in the database
    @GetMapping("/allUsers")
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    // Find the user by id
    @GetMapping("/allUsers/{username}")
    public Optional<UserModel> getUser(@PathVariable String username) {
        return userRepository.findById(username);
    }

    // To delete by id
    @GetMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) throws Exception {
        userRepository.deleteById(username);
        return ResponseEntity.ok("Added User to the Database with id: " + username);
    }
   
}
