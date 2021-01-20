class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}


class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountToDollars) {
    this.stripe.makePayment(amountToDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made a payment of $${amountInCents} with Stripe`);
  }
}


class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new PayPal();
  }

  pay(amountToDollars) {
    this.paypal.makePayment(this.user, amountToDollars)
  }
}


class PayPal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made a payment of $${amountInDollars} with Paypal`);
  }
}


const store = new Store(new PaypalPaymentProcessor('Ichigo'));
const store2 = new Store(new StripePaymentProcessor('Naruto'));
store.purchaseBike(2);
store.purchaseHelmet(2);
store2.purchaseBike(2);
store2.purchaseHelmet(2);
