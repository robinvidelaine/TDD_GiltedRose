import { Item } from "./Item";
import { AgedBrieItem } from "./AgedBrieItem";
import { BackstagePassesItem } from "./BackstagePassesItem";
import { Conjured } from "./Conjured";
import { DefaultItem } from "./DefaultItem";
import { LegendaryItem } from "./LegendaryItem";
import * as fs from "fs";

export interface Persistence {
  saveInventory(items: Item[]): void;
  getInventory(): Item[];
  getProductValue(name: string): number;
  sellProduct(name: string): void;
}

export class ItemsRepository {
private filePath: string;

constructor(filePath: string) {
this.filePath = filePath;
}

loadItems() {
const data = fs.readFileSync(this.filePath).toString();
return JSON.parse(data).map((itemData) => {
switch (itemData.name) {
case "Aged Brie":
return new AgedBrieItem(itemData.sellin, itemData.quality);
case "Backstage passes":
return new BackstagePassesItem(itemData.sellin, itemData.quality);
case "LegendaryItem":
return new LegendaryItem(itemData.sellin, itemData.quality);
case "Conjured":
return new Conjured(itemData.sellin, itemData.quality);
default:
return new DefaultItem(itemData.sellin, itemData.quality, itemData.name);
}
});
}

updateQuality() {
const items = this.loadItems();
items.forEach((item) => item.update());
}

saveInventory(items) {
const data = JSON.stringify(items);
fs.writeFileSync(this.filePath, data);
}

getInventory() {
return this.loadItems();
}
}