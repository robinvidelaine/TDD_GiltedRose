import { Shop } from "../app/Shop";
import { Item } from "../app/Item/Item";
import { AgedBrieItem } from "../app/Item/AgedBrieItem";
import { BackstagePassesItem } from "../app/Item/BackstagePassesItem";
import { Conjured } from "../app/Item/Conjured";
import { DefaultItem } from "../app/Item/DefaultItem";
import { LegendaryItem } from "../app/Item/LegendaryItem";
import { ItemsRepository } from "../app/Item/ItemsRepository";
import * as fs from "fs";
import { assert } from "chai";

describe("Shop", () => {
  let shop: Shop;
  const filePath = "items.json";

  beforeEach(() => {
    // create a new Shop object and load the items from the JSON file
    const repository = new ItemsRepository(filePath);
    shop = new Shop(repository);
  });

  afterEach(() => {
    // delete the JSON file after each test
    fs.unlinkSync(filePath);
  });

  it("should save the inventory to a JSON file", () => {
    // create some items
    const items = [
      new DefaultItem(1, 1),
      new DefaultItem(0, 2),
    ];

    // save the items to the JSON file
    shop.saveInventory(items);

    // read the JSON file and verify that it contains the expected data
    const data = fs.readFileSync(filePath).toString();
    assert.deepEqual(JSON.parse(data), [
      {
        "name": "",
        "quality": 1,
        "sellin": 1,
      },
      {
        "name": "",
        "quality": 2,
        "sellin": 0,
      },
    ]);
  });

});


describe('AgedBrieItem', () => {
  let item;

  beforeEach(() => {
    item = new AgedBrieItem(10, 20);
  });

  test('should update sellin value', () => {
    item.update();
    expect(item.sellin).toBe(9);
  });

  test('should increase quality by 1', () => {
    item.update();
    expect(item.quality).toBe(21);
  });

  test('should not increase quality above 50', () => {
    item.quality = 50;
    item.update();
    expect(item.quality).toBe(50);
  });
});


  describe('BackstagePassesItem', () => {
    let item;
    let item2;
  
    beforeEach(() => {
      item = new BackstagePassesItem(10, 20);
      item2 = new BackstagePassesItem(11, 20);
    });
  
    test('should update sellin value', () => {
      item.update();
      expect(item.sellin).toBe(9);
    });
  
    test('should update quality value when sellin > 10', () => {
        item2.update();
      expect(item2.quality).toBe(21);
    });
  
    test('should update quality value when 6 < sellin <= 10', () => {
      item.sellin = 7;
      item.update();
      expect(item.quality).toBe(22);
    });
  
    test('should update quality value when 1 < sellin <= 5', () => {
      item.sellin = 3;
      item.update();
      expect(item.quality).toBe(23);
    });
  
    test('should update quality value when sellin <= 0', () => {
      item.sellin = 0;
      item.update();
      expect(item.quality).toBe(0);
    });
  });
  
  describe('LegendaryItem', () => {
    let item;
  
    beforeEach(() => {
      item = new LegendaryItem(undefined, 80, "Sulfuras");
    });
  
    test('should not update sellin value', () => {
      item.update();
      expect(item.sellin).toBe(undefined);
    });
  
    test('should not update quality value', () => {
      item.update();
      expect(item.quality).toBe(80);
    });
  });

describe('DefaultItem', () => {
  let item;

  beforeEach(() => {
    item = new DefaultItem(10, 20);
  });

  test('should update sellin value', () => {
    item.update();
    expect(item.sellin).toBe(9);
  });

  test('should update quality value when sellin > 0', () => {
    item.update();
    expect(item.quality).toBe(19);
  });

  test('should update quality value by 2 when sellin <= 0', () => {
    item.sellin = 0;
    item.update();
    expect(item.quality).toBe(18);
  });

  test('should not increase quality above 50', () => {
    item.quality = 80;
    item.update();
    expect(item.quality).toBe(50);
  });
});



describe("getProductValue", () => {
    // Initialiser une instance de Shop avant chaque test
    let shop: Shop;
    beforeEach(() => {
      // Créer un tableau d'objets représentant des articles fictifs
      const items = [
        { name: "item1", quality: 10, sellIn: 5 },
        { name: "item2", quality: 20, sellIn: 10 },
        { name: "item3", quality: 30, sellIn: 15 },
      ];
      // Convertir le tableau d'articles en chaîne de caractères JSON
      const itemsJson = JSON.stringify(items);
      // Créer un fichier JSON avec la chaîne de caractères JSON
      fs.writeFileSync("items.json", itemsJson);
      // Créer une instance de ItemsRepository avec le fichier JSON
      const itemsRepository = new ItemsRepository("items.json");
      // Créer une instance de Shop en utilisant l'instance de ItemsRepository
      shop = new Shop(itemsRepository);
    });
  
    // Tester si la méthode getProductValue retourne la valeur de l'article demandé
    it("should return the value of the requested product", () => {
      // Obtenir la valeur de l'article avec le nom "item2"
      const value = shop.getProductValue("item2");
      // Vérifier si la valeur retournée est égale à 20
      expect(value).toEqual(20);
    });
  
    // Tester si la méthode getProductValue retourne 0 si l'article n'existe pas
    it("should return 0 if the product does not exist", () => {
      // Obtenir la valeur de l'article avec le nom "item4"
      const value = shop.getProductValue("item4");
    // Vérifier si la valeur retournée est égale à 0
    expect(value).toEqual(0);
  });
});

// Classe de test pour la méthode sellProduct de la classe Shop
describe("sellProduct", () => {
  // Initialiser une instance de Shop avant chaque test
  let shop: Shop;
  beforeEach(() => {
    // Créer un tableau d'objets représentant des articles fictifs
    const items = [
        { name: "item1", quality: 10, sellin: 5 },
        { name: "item2", quality: 20, sellin: 10 },
        { name: "item3", quality: 30, sellin: 15 },
    ];
    // Convertir le tableau d'articles en chaîne de caractères JSON
    const itemsJson = JSON.stringify(items);
    // Créer un fichier JSON avec la chaîne de caractères JSON
    fs.writeFileSync("items.json", itemsJson);
    // Créer une instance de ItemsRepository avec le fichier JSON
    const itemsRepository = new ItemsRepository("items.json");
    // Créer une instance de Shop en utilisant l'instance de ItemsRepository
    shop = new Shop(itemsRepository);
  });

  // Tester si la méthode sellProduct met à jour l'inventaire en enlevant l'article vendu
  it("should update the inventory by removing the sold product", () => {
    // Vendre l'article avec le nom "item2"
    shop.sellProduct("item2");
    // Obtenir l'inventaire mis à jour
    const items = shop.getInventory();
    // Vérifier si l'article avec le nom "item2" n'est plus dans l'inventaire
    expect(items.find((item) => item.name === "item2")).toBeUndefined();
  });

  // Tester si la méthode sellProduct ne fait rien si l'article à vendre n'existe pas
  it("should do nothing if the product to sell does not exist", () => {
    // Vendre l'article avec le nom "item4"
    shop.sellProduct("item4");
    // Obtenir l'inventaire mis à jour
    const items = shop.getInventory();
    // Vérifier si l'inventaire n'a pas changé
    expect(items).toEqual([
        { name: "item1", quality: 10, sellin: 5 },
        { name: "item2", quality: 20, sellin: 10 },
        { name: "item3", quality: 30, sellin: 15 },
    ]);
  });
});

