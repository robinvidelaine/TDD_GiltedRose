import { Item } from "./Item";
// Classe AgedBrieItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article Aged Brie
export class AgedBrieItem extends Item {
    update() {
        this.updateSellIn();
        this.quality++;
        this.limiteQualityProduct();
    }
}