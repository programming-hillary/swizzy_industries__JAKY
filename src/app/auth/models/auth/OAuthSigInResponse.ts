export interface IOAuthSignInResponse {
  federatedId?: string;
  providerId?: string;
  localId?: string;
  emailVerified: boolean;
  email?: string;
  oauthIdToken?: string;
  oauthAccessToken?: string;
  oauthTokenSecret?: string;
  rawUserInfo?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  displayName?: string;
  photoUrl?: string;
  idToken?: string;
  refreshToken?: string;
  expiresIn?: string;
  needConfirmation?: boolean;
}
