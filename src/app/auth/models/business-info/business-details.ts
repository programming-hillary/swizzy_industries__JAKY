export interface IBusinessDetails {
  businessName: string;
  category: string;
  location: [{ latitude: number; longitude: number }];
  phone: string;
  popularName: string;
  socialMediaArray: [{ linkType: string; socialMediaLink: string }];
}
