interface ItemCart {
  name: string;
  price: number;
}

type Status = 'open' | 'closed';

export class Cart {
  private readonly _items: ItemCart[] = [];
  private _orderStatus: Status = 'open';

  get items(): readonly ItemCart[] {
    return this._items;
  }

  get orderStatus(): Status {
    return this._orderStatus;
  }

  addItems(...items: ItemCart[]): void {
    items.forEach((item) => this._items.push(item));
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.error('Cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Pedido finalizado');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Mensagem enviada:', message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
  }
}

const cart = new Cart();

cart.addItems(
  { name: 'Camiseta', price: 100.45422 },
  { name: 'Calça Jeans', price: 130.23 },
);

cart.checkout();
