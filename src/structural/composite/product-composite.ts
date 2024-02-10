export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addProduct(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeProduct(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  addProduct(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  removeProduct(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const camiseta = new ProductLeaf('Camiseta', 49);
const short = new ProductLeaf('short', 35);
const calca = new ProductLeaf('Calça', 75);
const productBox = new ProductComposite();
productBox.addProduct(camiseta, short, calca);

const tablet = new ProductLeaf('tablet', 2000);
const kindle = new ProductLeaf('kindle', 350);
const anotherBox = new ProductComposite();
anotherBox.addProduct(tablet, kindle);
productBox.addProduct(anotherBox);
console.log(productBox.getPrice());
