import { Item } from "./Item";

// Classe AgedBrieItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article Conjured
export class Conjured extends Item {
    update() {
        this.updateSellIn();
        this.updateQuality();
        this.updateQuality();
        if (this.quality >= 50) {
            this.quality = 50;
        }
    }
}