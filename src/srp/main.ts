import { Cart } from './entities/cart';
import { Order } from './entities/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import Product from './entities/product';

const cart = new Cart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItems(new Product('Camiseta', 240.23), new Product('Calça', 2340.23));

console.log(cart.items);
console.log(cart.total());

order.checkout();
console.log(cart.items);
