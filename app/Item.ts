// Classe abstraite Item qui représente un article
// La méthode update est à implémenter dans les classes filles
// pour mettre à jour les propriétés sellin et quality
export abstract class Item {
    // La quantité restante de jours avant que l'élément ne soit vendu
    sellin: number;
    // La qualité de l'élément, qui détermine sa valeur
    quality: number;
    // Le nom de l'élément
    name: string;

    // Constructeur qui initialise les propriétés
    constructor(sellin, quality, name = "") {
        this.sellin = sellin;
        this.quality = quality;
        this.name = name;
    }

    // Méthode abstraite à implémenter dans les classes filles
    abstract update(): void;

    // Méthode pour mettre à jour la propriété sellin
    updateSellIn() {
        this.sellin--;
    }

    // Méthode pour mettre à jour la propriété quality
    // en fonction de la valeur de sellin
    updateQuality() {
        if (this.sellin >= 0) {
            this.quality -= 1;
        }
        if (this.sellin <= 0) {
            this.quality -= 2;
        }
        this.quality = Math.max(this.quality, 0);
    }

    // Méthode pour limiter la qualité d'un produit
    // à une valeur maximale de 50
    limiteQualityProduct() {
        if (this.quality >= 50) {
            this.quality = 50;
        }
    }
}

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