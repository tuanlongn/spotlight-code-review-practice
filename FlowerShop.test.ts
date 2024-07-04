import { FlowerShop, Flower } from "./FlowerShop";

describe("FlowerShop", () => {
  let shop: FlowerShop;

  beforeEach(() => {
    shop = new FlowerShop();
  });

  test("should initialize with no flowers and zero revenue", () => {
    expect(shop.getRevenue()).toBe(0);
    expect((shop as any).flowers).toHaveLength(0);
  });

  test("should add a flower", () => {
    const flower: Flower = { name: "Rose", price: 5 };
    shop.addFlower(flower);
    expect((shop as any).flowers).toHaveLength(1);
    expect((shop as any).flowers[0]).toEqual(flower);
  });

  test("should sell a flower and update revenue", () => {
    const flower: Flower = { name: "Rose", price: 5 };
    shop.addFlower(flower);
    shop.sellFlower("Rose");
    expect(shop.getRevenue()).toBe(5);
    expect((shop as any).flowers).toHaveLength(0);
  });

  test("should not sell a non-existing flower", () => {
    shop.sellFlower("NonExistingFlower");
    expect(shop.getRevenue()).toBe(0);
  });

  test("should display flowers", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    const flower: Flower = { name: "Rose", price: 5 };
    shop.addFlower(flower);
    shop.displayFlowers();
    expect(consoleSpy).toHaveBeenCalledWith(`Name: Rose, Price: 5`);
    consoleSpy.mockRestore();
  });
});
