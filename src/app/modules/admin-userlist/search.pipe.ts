import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/users';
@Pipe({
    name:'searchUser'
})
export class SearchPipe implements PipeTransform {
    transform(user: User[], searchInput: string): any[]{     
        if(!searchInput) {
            return user;
        }

       return user.filter(
           x => {return x.userName.includes(searchInput) 
        }
       )
     }
}