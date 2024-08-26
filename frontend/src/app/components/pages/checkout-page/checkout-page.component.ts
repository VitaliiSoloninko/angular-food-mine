import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent {
  order: Order = new Order();
}
