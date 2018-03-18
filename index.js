var store = { deliveries: [], meals: [], employers: [], customers: [] };

class Delivery {
  constructor() {
    this.id = store.deliveries.length;
    store.deliveries.push(this);
  }
}

class Meal {
  constructor(name, price) {
    this.title = name;
    this.price = price;
    this.id = store.meals.length;
    store.meals.push(this);
  }

  static byPrice() {
    return store.meals.sort(function(a, b) { return a.price < b.price })
  }
}

class Employer {
  constructor(name) {
    this.name = name;
    this.id = store.employers.length;
    store.employers.push(this);
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.id = store.employers.length;
    store.employers.push(this);
  }
}
