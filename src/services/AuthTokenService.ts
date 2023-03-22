import { IAuthTokenService } from "@/services/AuthTokenService.d";

export default class AuthTokenService implements IAuthTokenService {
  private tokenName = "auth_token";

  set(token: string, remember?: boolean | undefined): void {
    if (remember) {
      localStorage.setItem(this.tokenName, token);
      return;
    }

    sessionStorage.setItem(this.tokenName, token);
  }

  get(): string | null {
    return (
      localStorage.getItem(this.tokenName) ||
      sessionStorage.getItem(this.tokenName)
    );
  }

  remove(): void {
    localStorage.removeItem(this.tokenName);
    sessionStorage.removeItem(this.tokenName);
  }
}
