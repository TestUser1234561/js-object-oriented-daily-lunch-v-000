var store = { deliveries: [], meals: [], employers: [], customers: [] };

class Delivery {
  constructor(meal, customer) {
    this.id = store.deliveries.length;
    this.mealId = meal.id;
    this.customerId = customer.id;
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
  constructor(name, employer) {
    this.name = name;
    this.employerId = employer.id
    this.id = store.customers.length;
    store.customers.push(this);
  }
}
