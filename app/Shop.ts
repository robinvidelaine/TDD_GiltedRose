
export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    update() : void {
        this.items.forEach(function(item){
            item.updateSellIn();
            item.updateQuality();
        }
        )
    }
}
