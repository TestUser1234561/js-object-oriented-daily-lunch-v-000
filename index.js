var store = { deliveries: [], meals: [], employers: [] };

class Delivery {
  constructor() {
    this.id = store.deliveries.length;
    store.deliveries.push(this);
  }
}
