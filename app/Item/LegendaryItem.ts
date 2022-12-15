// Importe la classes Item depuis un autre fichier dans le même répertoire
import { Item } from "./Item";
// La classe LegendaryItem hérite de la classe Item et surcharge certaines de ses méthodes
export class LegendaryItem extends Item {
    // Redéfinition de la méthode update() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    update() {

    }

    // Constructeur prenant en paramètre optionnels sellin, quality, et name qui sont passés à la classe parente.
    constructor(sellin: undefined = undefined, quality = 80, name = "") {
        super(sellin, quality, name);
    }

    // Redéfinition de la méthode updateQuality() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    updateQuality(): any {

    }

    // Redéfinition de la méthode getSellIn() de la classe parente pour renvoyer la valeur de sellin.
    getSellIn(): number {
        return this.sellin;
    }

    // Redéfinition de la méthode updateSellIn() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    updateSellIn(): void {

    }

    // Redéfinition de la méthode LimiteQualityProduct() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    LimiteQualityProduct() {

    }
}