
import LoginForm, { ILoginFormProps, ActiveTabType } from '../LoginForm';

let githubLogin = () => {
    console.log('Getting logged in github');
};

let tokenLogin = (token: string) => {
    console.log('Login with this token: ', token);
};

let userPassLogin = (user: string, pass: string) => {
    console.log('Login with these credentials: ', user, pass);
};

let toggleTab = (tab: ActiveTabType) => { };

let Cases: { [id: string]: ILoginFormProps } = {};

Cases["default"] = {
    githubLogin,
    tokenLogin,
    userPassLogin,
    toggleTab,
    user: {
        isLogged: false,
        expiresAt: Date.now() + 3600000
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
        expiresAt: Date.now() + 3600000
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
        expiresAt: Date.now() + 3600000,
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
        expiresAt: Date.now() + 3600000,
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
        expiresAt: Date.now() + 3600000,
        loginError: "Token"
    },
    activeTab: 'TokenTab'
}

export default Cases