import { Item,DefaultItem, AgedBrieItem, BackstagePassesItem, Conjured } from "./Item";

export class Shop {

    items: Item[];

    constructor(items: Item[]) {
      this.items = items;
    }

    getItems() {
       return this.items;
    }

    update() : void {
    this.items.forEach(function(item){
        item.update();
    }
    )
    }
}
