import { Cart } from './classes/cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { FiftyPercentDiscount } from './classes/discounts';
import Product from './classes/product';

/* const tenPercentDiscount = new TenPercentDiscount(); */
const fiftyPercentDiscount = new FiftyPercentDiscount();

const cart = new Cart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItems(new Product('Camiseta', 240.23), new Product('Calça', 2340.23));

console.log(cart.items);
console.log(cart.totalWithDiscount());

order.checkout();
console.log(cart.items);
