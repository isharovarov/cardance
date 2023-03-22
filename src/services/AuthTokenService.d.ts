export interface IAuthTokenService {
  set(token: string, remember?: boolean): void;
  get(): string | null;
  remove(): void;
}
