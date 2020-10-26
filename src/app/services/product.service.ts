import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [] = [
  new Product(1, 'Burger', 'Grilled beef patty with Mayo, Ketchup and fresh lettuce.',
  50, 'https://i.pinimg.com/originals/c0/45/99/c04599f05e5f30e6fc69b3b7a66a10d7.jpg', 800),
  new Product(2, 'Pizza', 'Italian pizza topped with pepperoni and mozzarella!',
  150, 'https://cdn.shopify.com/s/files/1/0248/2411/9343/products/Pepperoni_1024x1024.png?v=1574684715', 1500),
  new Product(3, 'Fried Chicken', 'Freshly fried chicken with the best combination of spices!',
  80, 'https://gcs.thesouthafrican.com/2020/04/b25c2198-kfc.jpeg', 800),
  new Product(4, 'Icecream', 'Dairy Vanilla icecream topped with sprinkles and chocolate syrup!',
  40, 'https://www.rachaelraymag.com/.image/t_share/MTU2NDI2NTg2MjAyMDU2NTc0/crunchy-chocolate-topping-9fcd8d16.jpg', 400),
  new Product(5, 'Milkshake', 'Milkshake made using fresh strawberries and vanilla icecream!',
  40, 'https://artzyfoodie.com/wp-content/uploads/2017/07/Strawberry-Milkshake-6.jpg', 500),
  new Product(6, 'Cookie', 'Freshly baked cookies topped with creamy chocolate chips',
  20, 'https://www.handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg', 450),




  new Product(7, 'Onion Rings', 'Deep fried onion rings served with mayo and ketchup.',
  25, 'https://content-prod.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15310/crispyair-friedonionrings.jpg?v=1&mode=crop&width=800&height=640&upscale=false', 250),

  new Product(8, 'Caeser Salad', 'Fresh caeser salad with chicken and parmesan cheese!',
  50, 'https://www.thecheesecakefactory.com/assets/images/Menu-Import/960x720-CCF_CaesarSalad.jpg', 400),

  new Product(9, 'Pancakes', 'Pancakes with maple syrup and butter!',
  70, 'https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg', 800),

  new Product(10, 'Burrito', 'Burrito filled with beans, rice and much more!',
  50, 'https://realfood.tesco.com/media/images/1400x919-TurkeyBurrito-9bf7db5d-c5c1-4ea3-b0c8-000d1539b0a1-0-1400x919.jpg', 720),

  new Product(11, 'Burrito Bowl', 'Burrito bowl topped with lettuce and cheese!',
  70, 'https://g6t8s5u9.rocketcdn.me/wp-content/uploads/2016/01/Vegan-Burrito-Bowl-5.jpg', 900),

  new Product(12, 'Chocolate Cake', 'Chocolate cake filled with chocolate buttercream.',
  40, 'https://img2.pngio.com/png-slice-of-cake-transparent-slice-of-cakepng-images-pluspng-piece-of-cake-png-1326_1036.png', 520),


  ];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
