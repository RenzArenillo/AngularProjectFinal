import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/assets/models/product';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {
  transform(product: Product[], searchInput: string): any[]{     
    if(!searchInput) {
        return product;
    }
   searchInput = searchInput.toLowerCase();
   return product.filter(
       x => {return x.productName.toLowerCase().includes(searchInput)
    }
   )
 }
}
