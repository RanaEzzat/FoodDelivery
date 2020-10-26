export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calories: number;

  constructor(id, name, description = ' ', price = 0, image = 'https://images.deliveryhero.io/image/otlob/MenuItems/Beef_Single_Trffl_Mu_637023565226843300.jpg', calories = 0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.calories = calories;
  }
}
