export interface User {
  id?:number,
  userType: string;
  userName: string;
  userPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  birthdate: Date;
  interestsLists: string[]

  active: boolean
}
