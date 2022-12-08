
export class Item {

    sellin: number;
    quality: number;
    name: string;

    constructor(sellin, quality, name = "") {
        this.sellin = sellin;
        this.quality = quality;
        this.name = name;
    }

    update(): void {
        switch (this.name) {

            default: { }
                this.updateSellIn();
                this.updateQuality();
                this.LimiteQualityProduct();
                break;

            case "Aged Brie":
                this.UpdateProductAgedBrie();
                this.LimiteQualityProduct();
                break;

            case "Backstage passes":
                this.UpdateProductBackstagePasses();
                this.LimiteQualityProduct();
                break;
            case "Conjured":
                this.updateSellIn();
                this.updateQuality();
                this.updateQuality();
                this.LimiteQualityProduct();
                break;
        }
    }

    updateSellIn() {
        this.sellin--;
    }

    updateQuality() {
        if (this.sellin >= 0) {
            this.quality -= 1;
        }
        if (this.sellin <= 0) {
            this.quality -= 2;
        }
        this.quality = Math.max(this.quality, 0);
    }



    UpdateProductAgedBrie() {
        this.quality++;
    }

    UpdateProductBackstagePasses() {
        if (this.sellin > 10) {
            this.quality += 1;
        }
        if (this.sellin <= 10 && this.sellin >= 6) {
            this.quality += 2;
        }
        if (this.sellin <= 5 && this.sellin >= 1) {
            this.quality += 3;
        }
        if (this.sellin <= 0) {
            this.quality = 0;
        }
    }

    LimiteQualityProduct() {
        if (this.quality >= 50) {
            this.quality = 50;
        }
    }

}
