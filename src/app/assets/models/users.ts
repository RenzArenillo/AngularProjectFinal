export interface User {
  id?:number,
  userName: string;
  userPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNumber: number;
  email: string;
  birthdate: Date;
  interestsLists: string[];
  active: boolean
  userType: string
}
