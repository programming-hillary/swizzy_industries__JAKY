export class BusinessDetailsModel {
  constructor(
    public businessName: string,
    public category: string,
    public location: [{ latitude: number; longitude: number }],
    public phone: string,
    public popularName: string,
    public socialMediaArray: [{ linkType: string; socialMediaLink: string }]
  ) {}
}
