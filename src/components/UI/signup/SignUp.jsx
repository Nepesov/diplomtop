import React from 'react'

const SignUp = () => {
  return (
    <div>
      <form action="#">
    <h3>Sign in</h3>
    <label for="username" className="vhide">Username</label>
    <input id="username" name="username" type="text" placeholder="Username" required minlength="2"/>
    <label for="password" class="vhide">Password</label>
    <input id="password" name="password" type="text" placeholder="Password" required minlength="6"/>
    <input type="checkbox" name="remember" id="remember" className="vhide"/>
    <label for="remember">
      <i className="octicon octicon-check"></i> Remember me
    </label> 
    <button class="signin">Sign in</button>
  </form>
    </div>
  )
}

export default SignUp
