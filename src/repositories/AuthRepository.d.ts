export interface IAuthRepository {
  signIn(data: ISignInRequest): Promise<ISignInResponce>;
  signUp(data: ISignUpRequest): Promise<void>;
  recoveryPassowrd(data: IRecoveryPasswordRequest): Promise<void>;
  resetPassword(data: IResetPasswordRequest): Promise<IResetPasswordResponse>;
  leave(): Promise<void>;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponce {
  token: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
}

export interface IRecoveryPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  token: string;
  password: string;
}

export interface IResetPasswordResponse {
  token: string;
}
