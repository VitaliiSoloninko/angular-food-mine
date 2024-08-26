import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { Order } from '../../../shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent {
  order: Order = new Order();
  checkoutForm!: FormGroup;

  constructor(
    cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {}
}
