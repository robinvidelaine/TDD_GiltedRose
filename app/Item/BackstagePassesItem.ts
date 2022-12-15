import { Item } from "./Item";

// Classe AgedBrieItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article Backstage Passes
export class BackstagePassesItem extends Item {
    update() {
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
        this.updateSellIn();
    }
}