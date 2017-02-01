
import  LoginForm, { ILoginFormProps, ActiveTab } from '../LoginForm';

let githubLogin = () => {
    console.log('Getting logged in github');
};

let tokenLogin = (token: string) => {
    console.log('Login with this token: ', token);
};

let userPassLogin = (user: string, pass: string) => {
    console.log('Login with these credentials: ', user, pass);
};

let toggleTab = (tab:ActiveTab) => {};

let Cases: {[id: string]: ILoginFormProps} = {};

Cases["default"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    toggleTab,
    user: {
        isLogged: false,
        expiresAt: 1485770407948
    },
    activeTab: 'UserPassTab'
}

Cases["User is logged"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    toggleTab,
    user: {
        isLogged: true,
        expiresAt: 1485770407948
    },
    activeTab: 'UserPassTab'
}

Cases["Github error"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    toggleTab,
    user: {
        isLogged: false,
        expiresAt: 1485770407948,
        loginError: "Github"
    },
    activeTab: 'UserPassTab'
}

Cases["Username error"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    toggleTab,
    user: {
        isLogged: false,
        expiresAt: 1485770407948,
        loginError: "Username/Password"
    },
    activeTab: 'UserPassTab'
}

Cases["Token error"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    toggleTab,
    user: {
        isLogged: false,
        expiresAt: 1485770407948,
        loginError: "Token"
    },
    activeTab: 'TokenTab'
}

export default Cases