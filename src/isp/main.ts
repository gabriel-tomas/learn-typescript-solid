import { Cart } from './classes/cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { FiftyPercentDiscount } from './classes/discounts';
import Product from './classes/product';
import { CompanyCustomer, IndividualCustomer } from './classes/customer';

/* const tenPercentDiscount = new TenPercentDiscount(); */
const fiftyPercentDiscount = new FiftyPercentDiscount();

const cart = new Cart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer1 = new IndividualCustomer('Gabriel', 'Tomás', '000.000.000-00');
const customer2 = new CompanyCustomer(
  'Udemy Inc',
  'Udemy',
  'XX. XXX. XXX/0001-XX',
);
const order = new Order(cart, messaging, persistency, customer1);

cart.addItems(new Product('Camiseta', 240.23), new Product('Calça', 2340.23));

console.log(cart.items);
console.log(cart.totalWithDiscount());

order.checkout();
console.log(cart.items);
