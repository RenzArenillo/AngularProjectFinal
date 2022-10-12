// import { Injectable } from '@angular/core';
// import { AsyncValidator, FormControl } from '@angular/forms';
// import { map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { UserService } from './user.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class UniqueUsername implements AsyncValidator {
//   constructor(private userService: UserService) {}

  


//   validate = (control: FormControl) => {
//     const { value } = control;
//     return this.userService.userNameAvailable(value).pipe(
//       map(() => {
//         return null;
//       }),
//       catchError((err) => {
//         console.log(err);
 
//         if (err.error.username) {

//            return of({ nonUniqueUsername: true });
//         }
//         return of({ noConnection: true });
//       })
//     );
//   };
//     }