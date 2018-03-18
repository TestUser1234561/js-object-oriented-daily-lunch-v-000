var store = { deliveries: [], meals: [], employers: [] };

class Delivery {
  constructor() {
    this.id = store.deliveries.length;
    store.deliveries.push(this);
  }
}

class Meal {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = store.meals.length;
    store.meals.push(this);
  }
}
