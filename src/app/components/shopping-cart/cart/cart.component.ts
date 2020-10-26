import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from '../../../models/product';
import { AlertifyService } from '../../../services/alertify.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    ];

  cartTotal = 0;


  constructor(private message: MessengerService, private alertify: AlertifyService) { }

  ngOnInit(): void {
   this.message.getMessage().subscribe((product: Product) => {
   this.purchase(product);
   });
  }

  // tslint:disable-next-line:typedef
  purchase(product: Product) {
   let flag = false;

   // tslint:disable-next-line:prefer-const
   for (let i in this.cartItems) {
    if (this.cartItems[i].productId === product.id) {
      this.cartItems[i].quantity++;
      flag = true;
      // console.log('Hi');
      break;
    }
  }

   if (!flag) {
    console.log(product);
    this.cartItems.push({
    productName: product.name,
    quantity: 1,
    price: product.price,
    productId: product.id
    });
  }

   this.cartTotal = 0;
   this.cartItems.forEach(item => {
   this.cartTotal += (item.quantity * item.price);
   });
  }

  // tslint:disable-next-line:typedef
  checkout() {
    this.alertify.success('Thank you for using our service! \n Your total is ' + this.cartTotal );
    this.cartItems = [];
  }

}
