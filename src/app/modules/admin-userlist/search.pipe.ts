import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/assets/models/users';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(user: User[], searchInput: string): any[]{     
        if(!searchInput) {
            return user;
        }
       searchInput = searchInput.toLowerCase();
       return user.filter(
           x => {return x.userName.toLowerCase().includes(searchInput) ||
             x.firstName.toLowerCase().includes(searchInput) ||
             x.lastName.toLowerCase().includes(searchInput)
        }
       )
     }
}