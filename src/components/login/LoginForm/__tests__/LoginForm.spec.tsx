import { ILoginFormProps } from '../LoginForm';

interface Cases{
  [id:string]:ILoginFormProps
}

let githubLogin = () => {
  console.log('Getting logged in github');
};

let tokenLogin = (token:string) => {
  console.log('Login with this token: ', token);
};

let userPassLogin = (user:string, pass:string) => {
  console.log('Login with these credentials: ', user, pass);
};

let cases : Cases;

cases["default"] = {
  githubLogin,
  tokenLogin,
  userPassLogin,
  user:{
    isLogged: false,
    expiresAt: 1485770407948
  }
}

cases["User is logged"] = {
  githubLogin,
  tokenLogin,
  userPassLogin,
  user:{
    isLogged: true,
    expiresAt: 1485770407948
  }
}

cases["Github error"] = {
  githubLogin,
  tokenLogin,
  userPassLogin,
  user:{
    isLogged: false,
    expiresAt: 1485770407948,
    loginError: "Github"
  }
}

cases["Username error"] = {
  githubLogin,
  tokenLogin,
  userPassLogin,
  user:{
    isLogged: false,
    expiresAt: 1485770407948,
    loginError: "Username/Password" 
  }
}

cases["Token error"] = {
  githubLogin,
  tokenLogin,
  userPassLogin,
  user:{
    isLogged: false,
    expiresAt: 1485770407948,
    loginError: "Token"
  }
}