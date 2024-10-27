export class OAuth {
  constructor(
    public federatedId: string,
    public providerId: string,
    public localId: string,
    public emailVerified: boolean,
    public email: string,
    public oauthIdToken: string,
    public oauthAccessToken: string,
    public oauthTokenSecret: string,
    public rawUserInfo: string,
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public displayName: string,
    public photoUrl: string,
    public idToken: string,
    public refreshToken: string,
    private _expiresIn: Date,
    public needConfirmation: boolean
  ) {}

  get token() {
    if (this._expiresIn || this._expiresIn < Date.now()){
      return null
    }

    return this.idToken
  }
}
