
import LoginForm, { ILoginFormProps, ActiveTabType } from '../LoginForm';

let toggleTab = (tab: ActiveTabType) => { };

let Cases: { [id: string]: ILoginFormProps } = {};

Cases["default"] = {
    toggleTab,
    status: {
        isLogged: false,
        sessionExpiresAt: Date.now() + 3600000
    },
    activeTab: 'UserPassTab'
}

Cases["User is logged"] = {
    toggleTab,
    status: {
        isLogged: true,
        sessionExpiresAt: Date.now() + 3600000
    },
    activeTab: 'UserPassTab'
}

Cases["Github error"] = {
    toggleTab,
    status: {
        isLogged: false,
        sessionExpiresAt: Date.now() + 3600000,
    },
    error: "Github",
    activeTab: 'UserPassTab'
}

Cases["Username error"] = {
    toggleTab,
    status: {
        isLogged: false,
        sessionExpiresAt: Date.now() + 3600000,
    },
    error: "Username/Password",
    activeTab: 'UserPassTab'
}

Cases["Token error"] = {
    toggleTab,
    status: {
        isLogged: false,
        sessionExpiresAt: Date.now() + 3600000,
    },
    error: "Token",
    activeTab: 'TokenTab'
}

export default Cases