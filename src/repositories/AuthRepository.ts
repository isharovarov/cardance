import {
  IAuthRepository,
  IRecoveryPasswordRequest,
  IResetPasswordRequest,
  IResetPasswordResponse,
  ISignInRequest,
  ISignInResponce,
  ISignUpRequest,
} from "@/repositories/AuthRepository.d";

export default class AuthRepository implements IAuthRepository {
  async signIn(data: ISignInRequest): Promise<ISignInResponce> {
    const responce = await fetch("/auth", data);
    return responce.data;
  }

  async signUp(data: ISignUpRequest): Promise<void> {
    await fetch.post("/auth/registration", data);
  }

  async recoveryPassowrd(data: IRecoveryPasswordRequest): Promise<void> {
    await fetch.post("/auth/password-recovery", data);
  }

  async resetPassword(
    data: IResetPasswordRequest
  ): Promise<IResetPasswordResponse> {
    await fetch.post("/auth/password-recovery/confirm", data);
  }

  async leave(): Promise<void> {
    await fetch.delete("/auth");
  }
}
