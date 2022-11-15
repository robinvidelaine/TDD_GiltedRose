abstract class Item {
    
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, quality,  sellIn){
        this.name = name;
        this.quality = quality;
        this.sellIn = sellIn;
    }

    getSellIn(){
        return this.sellIn;
    }

    getName(){
        return this.name;
    }
    
    getQuality(){
        return this.quality;
    }

    abstract updateQuality() : void

    updateSellIn() : void {
        this.sellIn--;
        this.floorSellIn();
    }

    SellIngQuality() : void {
        if (this.quality >= 50)
        this.quality = 50;
    }

    floorQuality() : void{
        if(this.quality <= 0)
        this.quality = 0;
    }

    isSellInEqualZero(){
        if(this.sellIn <= 0)
        this.quality--;
    }

    floorSellIn(){
        if(this.sellIn <= 0)
        this.sellIn = 0;
    }
}