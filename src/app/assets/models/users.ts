export interface User {
  id?:number,
  userType: string,
  userName: string,
  userPassword: string,
  firstName: string,
  middleName: string,
  lastName: string,
  mobileNumber: number,
  email: string,
  birthdate: Date,
  interestsLists: string[],
  active: boolean
}
