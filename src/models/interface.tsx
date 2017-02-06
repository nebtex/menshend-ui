type LoginErrorType = "Username/Password" | "Token" | "Github" | void
type BackendErrorType = "PermissionError" | "NotResponseError" | void

export interface IUser {
    isLogged: boolean; //tell if the user is logged or not
    loginError?: LoginErrorType;
    expiresAt: number; // Timestamp
    isAdmin?: boolean;
	canImpersonate?: boolean;
}

//Space help to separate section in an organization
export interface ISpace {
    name: string;  //kuper environment name (default is kuper)
    short_description: string; //kuper environment short description (default is the kuper short description)
    long_description: string; //kuper environment short description (default is the kuper long description)
    logo: string; // kuper environment logo (default is the kuper logo)
}

export interface IService {
    name: string; // name of the service
    short_description: string; // short description of the service
    long_description: string; // service long description
    logo: string; // service logo
    subDomain?: string;
    rule?: string;
    error?: BackendErrorType;
	roles?: string[];
}