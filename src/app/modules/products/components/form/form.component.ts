import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  productsForm: FormGroup
  categories: String[] = ["All", "Clothes", "Bags", "Accessories", "Shoes", "Technology", "Appliances", "Sports",
    "Furniture", "Pets", "Beauty", "Home Decors"]  
  params:boolean = true
  unitsSold:number = 0;
  productId:string | null= "";

  constructor(fb:FormBuilder, private productService: ProductsService, private router: Router, 
    private route: ActivatedRoute) {
    this.productsForm = fb.group({
      productId: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productPrice: ['', [Validators.required]],
      productCategory: ['', [Validators.required]],
      productImage: ['', [Validators.required]],

    })

   }

  changeCategory(e:any) {
    console.log(e.value)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) {
        this.getProduct(parseInt(this.productId))
      } else {
        this.params = false
      }
    })
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(product => this.editProduct(product))
  }

  editProduct(product:Product) {
    this.productsForm.patchValue({
      productId: product.productId,
      productName: product.productName,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
      productImage: product.productImage,
    })
    this.unitsSold = product.unitsSold
  }

  submit() {
    const product = {
      productId: this.productsForm.get('productId')?.value,
      productName: this.productsForm.get('productName')?.value,
      productPrice: this.productsForm.get('productPrice')?.value,
      productCategory: this.productsForm.get('productCategory')?.value,
      productImage: this.productsForm.get('productImage')?.value,
      unitsSold: this.unitsSold,
    }
    
    if (this.params) {
      this.productService.update(product, this.productId)
    } else {
      this.productService.create(product)
    }
    this.router.navigate(['product'])

  }

  goBack() {
    this.router.navigate(['product'])
  }


}
