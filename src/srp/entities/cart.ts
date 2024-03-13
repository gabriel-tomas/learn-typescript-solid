import ItemCart from './contracts/ItemCart';

export class Cart {
  private readonly _items: ItemCart[] = [];

  get items(): readonly ItemCart[] {
    return this._items;
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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
