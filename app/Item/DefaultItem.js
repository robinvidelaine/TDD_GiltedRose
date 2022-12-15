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
exports.DefaultItem = void 0;
var Item_1 = require("./Item");
// Classe DefaultItem qui hérite de la classe abstraite Item
// et implémente la méthode update pour mettre à jour
// les propriétés sellin et quality d'un article par défaut
var DefaultItem = /** @class */ (function (_super) {
    __extends(DefaultItem, _super);
    function DefaultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultItem.prototype.update = function () {
        this.updateSellIn();
        this.updateQuality();
        this.limiteQualityProduct();
    };
    return DefaultItem;
}(Item_1.Item));
exports.DefaultItem = DefaultItem;
