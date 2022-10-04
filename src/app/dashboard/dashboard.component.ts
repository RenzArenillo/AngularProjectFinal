import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userType: string = 'Admin';

  products = [
    {
      productId: 1,
      productName: 'Luke Skywalker',
      productPrice: 1000,
      productCategory: 'Motors',
      productImage:
        'data:image/jpeg;base64,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',
    },
    {
      productId: 2,
      productName: 'Laptop',
      productPrice: 1000,
      productCategory: 'Laptop & Computers',
      productImage:
        'data:image/jpeg;base64,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',
    },
    {
      productId: 3,
      productName: 'Camera',
      productPrice: 1000,
      productCategory: 'Cameras',
      productImage:
        'https://images.unsplash.com/photo-1613235577937-9ac3eed992fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8&w=1000&q=80',
    },
    {
      productId: 4,
      productName: 'Shoes',
      productPrice: 1000,
      productCategory: "Men's Shoes",
      productImage:
        'https://media.istockphoto.com/photos/stability-and-cushion-running-shoes-new-unbranded-running-sneaker-or-picture-id1320786676?b=1&k=20&m=1320786676&s=170667a&w=0&h=qKmwIvi7qq8RBNpFzZzifpfPcZl82xlq2whbMm4W-jE=',
    },
    {
      productId: 5,
      productName: 'Ball',
      productPrice: 1000,
      productCategory: 'Sports & Travel',
      productImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKG8mKsLTQkYdsr6EFZ6h6vnU1o184ZhuFw&usqp=CAU',
    },
  ];

  categories = [
    {
      name: "Men's Apparel",
      image: 'https://cf.shopee.ph/file/2e9bfe13ce9cecfbfad8010b843651f6_tn',
    },
    {
      name: 'Mobiles & Gadgets',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Mobile Accessories',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Home Entertainment',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Babies & Kids',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Home & Living',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Groceries',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Toys, Games, & Collectibles',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: "Women's Bags",
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Women Accessories',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: "Women's Apparel",
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Health and Personal Care',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Make up and Fragrances',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Home Appliances',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Laptop & Computers',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Cameras',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Sports & Travel',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: "Men's Bags & Accessories",
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: "Men's Shoes",
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
    {
      name: 'Motors',
      image: 'https://cf.shopee.ph/file/e96e55c299602c20d369183378887a86_tn',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
