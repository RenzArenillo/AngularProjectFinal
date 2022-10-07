import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-confirmed',
  templateUrl: './checkout-confirmed.component.html',
  styleUrls: ['./checkout-confirmed.component.scss']
})
export class CheckoutConfirmedComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
