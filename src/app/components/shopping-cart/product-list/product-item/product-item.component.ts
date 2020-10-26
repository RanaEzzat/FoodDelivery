import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 @Input() productItem: Product;

  constructor(private message: MessengerService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
    purchase() {
    // this.router.navigateByUrl('/cart');
    this.message.sendMessage(this.productItem);
  }

}
