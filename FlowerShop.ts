export interface Flower {
  name: string;
  price: number;
}

export class FlowerShop {
  private flowers: Flower[];
  private revenue: number;

  constructor() {
    this.flowers = [];
    this.revenue = 0;
  }

  addFlower(flower: Flower): void {
    this.flowers.push(flower);
  }

  sellFlower(name: string): void {
    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].name === name) {
        this.revenue += this.flowers[i].price;
        this.flowers.splice(i, 1);
        break;
      }
    }
  }

  getRevenue(): number {
    return this.revenue;
  }

  displayFlowers(): void {
    for (const flower of this.flowers) {
      console.log(`Name: ${flower.name}, Price: ${flower.price}`);
    }
  }
}

const shop = new FlowerShop();
shop.addFlower({ name: "Rose", price: 5 });
shop.addFlower({ name: "Tulip", price: 3 });
shop.sellFlower("Rose");
shop.displayFlowers();
console.log(`Revenue: ${shop.getRevenue()}`);
