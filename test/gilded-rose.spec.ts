import { Shop } from "../app/Shop/Shop";
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
  let itemsRepository: ItemsRepository;

  beforeEach(() => {
    // create a new Shop object and load the items from the JSON file
    const repository = new ItemsRepository(filePath);
    itemsRepository= new ItemsRepository(filePath);
  });

  afterEach(() => {
    // delete the JSON file after each test
    fs.unlinkSync(filePath);
  });

  it("should save the inventory to a JSON file", () => {
    // create some items
    const items = [
      new DefaultItem(1, 1, 0),
      new DefaultItem(0, 2, 0),
    ];

    // save the items to the JSON file
    itemsRepository.saveInventory(items);

    // read the JSON file and verify that it contains the expected data
    const data = fs.readFileSync(filePath).toString();
    assert.deepEqual(JSON.parse(data), [
      {
        "name": "",
        "quality": 1,
        "sellin": 1,
        "value": 0,
      },
      {
        "name": "",
        "quality": 2,
        "sellin": 0,
        "value": 0,
      },
    ]);
  });

});


describe('AgedBrieItem', () => {
  let item;

  beforeEach(() => {
    item = new AgedBrieItem(10, 20,0);
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
      item = new BackstagePassesItem(10, 20, 0);
      item2 = new BackstagePassesItem(11, 20, 0);
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
      item = new LegendaryItem(undefined, 80, 0, "Sulfuras");
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
    item = new DefaultItem(10, 20,0);
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