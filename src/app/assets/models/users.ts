export interface User {
  id?:number,
  userType: string;
  userName: string;
  userPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNumber: number;
  email: string;
  birthdate: Date;
  interestsLists: string[]
  // interestsLists: {
  //   clothes: boolean,
  //   bagsAndAccessories: boolean,
  //   shoes: boolean,
  //   technology: boolean,
  //   appliances: boolean,
  //   sports: boolean
  // };
  active: boolean
}
