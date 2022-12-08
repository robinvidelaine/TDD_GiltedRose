import { Item } from "./Item";

export class LegendaryItem extends Item {

    
    
    constructor(sellin = undefined, quality = 80, name = "") {
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