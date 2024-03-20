import OrderStatus from './contracts/OrderStatus';
import { Cart } from './cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './contracts/customerProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: Cart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.error('Cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage('Pedido finalizado');
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('cliente: ' + this.customer.getName());
    console.log(this.customer.getIDN());
  }
}
