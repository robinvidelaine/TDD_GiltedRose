class Legendaryitem extends Item {
    updateQuality(): void {
        throw new Error("Method not implemented.");
    }

    getSellIn(): number {
        return this.sellIn;
    }

    updateSellIn() : void {
        this.floorSellIn();
    }
}