
import  LoginForm, { ILoginFormProps } from '../LoginForm';

let githubLogin = () => {
    console.log('Getting logged in github');
};

let tokenLogin = (token: string) => {
    console.log('Login with this token: ', token);
};

let userPassLogin = (user: string, pass: string) => {
    console.log('Login with these credentials: ', user, pass);
};

let Cases: {[id: string]: ILoginFormProps} = {};

Cases["default"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    user: {
        isLogged: false,
        expiresAt: 1485770407948
    }
}

Cases["User is logged"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    user: {
        isLogged: true,
        expiresAt: 1485770407948
    }
}

Cases["Github error"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    user: {
        isLogged: false,
        expiresAt: 1485770407948,
        loginError: "Github"
    }
}

Cases["Username error"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    user: {
        isLogged: false,
        expiresAt: 1485770407948,
        loginError: "Username/Password"
    }
}

Cases["Token error"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    user: {
        isLogged: false,
        expiresAt: 1485770407948,
        loginError: "Token"
    }
}

export default Cases