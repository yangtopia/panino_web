export interface AuthInfo {
  user: User;
  credential: string;
  additionalUserInfo: AdditionalUserInfo;
  operationType: string;
}

export interface AdditionalUserInfo {
  providerId: string;
  isNewUser: boolean;
}

export interface User {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  isAnonymous: boolean;
  tenantId: string;
  providerData: ProviderDatum[];
  apiKey: string;
  appName: string;
  authDomain: string;
  stsTokenManager: StsTokenManager;
  redirectEventId: string;
  lastLoginAt: string;
  createdAt: string;
  multiFactor: MultiFactor;
}

export interface MultiFactor {
  enrolledFactors: any[];
}

export interface ProviderDatum {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  phoneNumber: string;
  providerId: string;
}

export interface StsTokenManager {
  apiKey: string;
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface FirebaseCustomTokenRequest {
  userId: string;
  email: string;
  photoURL: string;
  nickname: string;
}
