

function App() {
  return (
    <>
      <form>
        <div class="main-container">
          <div class="container-signup"> 
          <h1>Welcome To Flew!</h1>
          <p>Create your account</p>
          <hr></hr>


          <label for="email"><strong>Email</strong></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

          <label for="psw"><strong>Password</strong></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

          <label for="psw-repeat"><strong>Repeat Password</strong></label>
          <input type="text" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
          
          <label for="mobile-no"><strong>Mobile Number</strong></label>
          <input type="text" placeholder="Mobile Number" name="mobile-no" id="mobile-no" required></input>

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn">Create Your Account</button>

        </div>

          <hr></hr>


        <div class="container-social">
          <p>Sign Up with</p>
          <i class="fa-brands fa-google"></i>
          <a></a>
          <i class="fa-brands fa-apple"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>

        <div class="container-signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
        </div>
      </form>

    </>
  );
}

export default App;
