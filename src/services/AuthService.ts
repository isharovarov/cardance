import AuthRepository from "@/repositories/AuthRepository";
import {
  IRecoveryPasswordRequest,
  IResetPasswordRequest,
  ISignInRequest,
  ISignUpRequest,
} from "@/repositories/AuthRepository.d";
import { IAuthService } from "@/services/AuthService.d";
import AuthTokenService from "./AuthTokenService";

export default class AuthService implements IAuthService {
  private authRepository: AuthRepository;
  private authTokenService: AuthTokenService;

  constructor() {
    this.authRepository = new AuthRepository();
    this.authTokenService = new AuthTokenService();
  }

  async signIn(data: ISignInRequest): Promise<void> {
    const response = await this.authRepository.signIn(data);
    this.authTokenService.set(response.token, true);
  }

  async signUp(data: ISignUpRequest): Promise<void> {
    await this.authRepository.signUp(data);
    await this.signIn({
      email: data.email,
      password: data.password,
    });
  }

  async passwordRecovery(data: IRecoveryPasswordRequest): Promise<void> {
    await this.authRepository.recoveryPassowrd(data);
  }

  async resetPassword(data: IResetPasswordRequest): Promise<void> {
    const response = await this.authRepository.resetPassword(data);
    this.authTokenService.set(response.token, true);
  }

  async leave(): Promise<void> {
    await this.authRepository.leave();
    this.authTokenService.remove();
  }
}
