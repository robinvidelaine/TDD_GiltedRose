"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LegendaryItem = void 0;
// Importe la classes Item depuis un autre fichier dans le même répertoire
var Item_1 = require("./Item");
// La classe LegendaryItem hérite de la classe Item et surcharge certaines de ses méthodes
var LegendaryItem = /** @class */ (function (_super) {
    __extends(LegendaryItem, _super);
    // Constructeur prenant en paramètre optionnels sellin, quality, et name qui sont passés à la classe parente.
    function LegendaryItem(sellin, quality, value, name) {
        if (sellin === void 0) { sellin = undefined; }
        if (quality === void 0) { quality = 80; }
        if (name === void 0) { name = ""; }
        return _super.call(this, sellin, quality, value, name) || this;
    }
    // Redéfinition de la méthode update() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    LegendaryItem.prototype.update = function () {
    };
    // Redéfinition de la méthode updateQuality() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    LegendaryItem.prototype.updateQuality = function () {
    };
    // Redéfinition de la méthode getSellIn() de la classe parente pour renvoyer la valeur de sellin.
    LegendaryItem.prototype.getSellIn = function () {
        return this.sellin;
    };
    // Redéfinition de la méthode updateSellIn() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    LegendaryItem.prototype.updateSellIn = function () {
    };
    // Redéfinition de la méthode LimiteQualityProduct() de la classe parente.
    // Pour l'instant, la méthode ne fait rien.
    LegendaryItem.prototype.LimiteQualityProduct = function () {
    };
    return LegendaryItem;
}(Item_1.Item));
exports.LegendaryItem = LegendaryItem;
