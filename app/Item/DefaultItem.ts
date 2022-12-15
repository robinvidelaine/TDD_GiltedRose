import { Item } from "./Item";
// Classe DefaultItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article par défaut
export class DefaultItem extends Item {
    update() {
        this.updateSellIn();
        this.updateQuality();
        this.limiteQualityProduct();
    }
}
