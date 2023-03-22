import {
  IRecoveryPasswordRequest,
  IResetPasswordRequest,
  ISignInRequest,
  ISignUpRequest,
} from "@/repositories/AuthRepository.d";

export interface IAuthService {
  signIn(data: ISignInRequest): Promise<void>;
  signUp(data: ISignUpRequest): Promise<void>;
  passwordRecovery(data: IRecoveryPasswordRequest): Promise<void>;
  resetPassword(data: IResetPasswordRequest): Promise<void>;
  leave(): Promise<void>;
}
