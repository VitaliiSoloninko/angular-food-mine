import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  // ============ Cart Quantity in Header not work
  // cartQuantity = 0;
  // constructor(cartService: CartService) {
  //   cartService.getCartObservable().subscribe((newCart) => {
  //     this.cartQuantity = newCart.totalCount;
  //   });
  // }
  ngOnInit(): void {}
}
