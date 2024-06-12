import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  // constructor(cartService: CartService, private userService: UserService) {}
  // ============ Cart Quantity in Header not work
  // cartQuantity = 0;
  // constructor(cartService: CartService) {
  //   cartService.getCartObservable().subscribe((newCart) => {
  //     this.cartQuantity = newCart.totalCount;
  //   });
  // }

  user!: User;
  // constructor(userService: UserService) {
  //   userService.userObservable.subscribe((newUser) => {
  //     this.user = newUser;
  //   });
  // }
  ngOnInit(): void {}

  // logout() {
  //   this.userService.logout();
  // }
}
