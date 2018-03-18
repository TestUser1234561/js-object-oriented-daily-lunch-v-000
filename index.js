store = { deliveries = [], meals = [], employers = [] };

class delivery {
  constructor() {
    this.id = store.deliveries.length;
    store.deliveries.push(this);
  }
}
