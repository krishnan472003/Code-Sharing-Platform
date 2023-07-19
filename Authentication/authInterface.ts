export interface LoginData {
    email: string;
    password: string;
  }

export interface SignupData {
    email?: string;
    name?: string;
    age?: number;
    password?: string;
    conPassword?: string;
    accessToken?:string;
    projects?: Array<string>
  }
