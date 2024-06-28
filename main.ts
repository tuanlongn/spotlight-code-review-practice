class FlowerShop {
  flowers: Array<any>;
  revenue: number;

  constructor() {
    this.flowers = [];
    this.revenue = 0;
  }

  AddFlower(flower) {
    this.flowers.push(flower);
  }

  sellflower(name: string) {
    for (let i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].name == name) {
        this.revenue += this.flowers[i].price;
        this.flowers.splice(i, 1);
        break;
      }
    }
  }

  getRevenue() {
    return this.revenue;
  }

  DisplayFlowers() {
    for (let i = 0; i < this.flowers.length; i++) {
      console.log(
        "Name: " + this.flowers[i].name + ", Price: " + this.flowers[i].price
      );
    }
  }
}

let shop = new FlowerShop();
shop.AddFlower({ name: "Rose", price: 5 });
shop.AddFlower({ name: "Tulip", price: 3 });
shop.sellflower("Rose");
shop.DisplayFlowers();
console.log("Revenue: " + shop.getRevenue());
