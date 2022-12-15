"use strict";
exports.__esModule = true;
exports.Item = void 0;
// Classe abstraite Item qui représente un article
// La méthode update est à implémenter dans les classes filles
// pour mettre à jour les propriétés sellin et quality
var Item = /** @class */ (function () {
    // Constructeur qui initialise les propriétés
    function Item(sellin, quality, value, name) {
        if (name === void 0) { name = ""; }
        this.sellin = sellin;
        this.quality = quality;
        this.value = value;
        this.name = name;
    }
    // Méthode pour mettre à jour la propriété sellin
    Item.prototype.updateSellIn = function () {
        this.sellin--;
    };
    // Méthode pour mettre à jour la propriété quality
    // en fonction de la valeur de sellin
    Item.prototype.updateQuality = function () {
        if (this.sellin >= 0) {
            this.quality -= 1;
        }
        if (this.sellin <= 0) {
            this.quality -= 2;
        }
        this.quality = Math.max(this.quality, 0);
    };
    // Méthode pour limiter la qualité d'un produit
    // à une valeur maximale de 50
    Item.prototype.limiteQualityProduct = function () {
        if (this.quality >= 50) {
            this.quality = 50;
        }
    };
    return Item;
}());
exports.Item = Item;
