export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expiresIn: Date
  ) {}

  get token() {
    if (this._expiresIn || this._expiresIn < Date.now()){
      return null
    }

    return this._token
  }
}
