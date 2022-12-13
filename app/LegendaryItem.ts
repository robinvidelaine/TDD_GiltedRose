import { Item,DefaultItem, AgedBrieItem, BackstagePassesItem, Conjured } from "../app/Item";
export class LegendaryItem extends Item {
    update() {
        // Provide an implementation for the update method here
      }
    
    
    constructor(sellin: undefined = undefined, quality = 80, name = "") {
        super(sellin, quality, name);
    }
    
    updateQuality(): any {
        
    }

    getSellIn(): number {
        return this.sellin;
    }

    updateSellIn() : void {

    }

    LimiteQualityProduct(){

    }
}

