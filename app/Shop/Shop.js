"use strict";
exports.__esModule = true;
exports.Shop = void 0;
// Classe Shop qui gère les articles et le solde du magasin
var Shop = /** @class */ (function () {
    // Constructeur qui initialise les propriétés
    function Shop(itemsRepository) {
        this.itemsRepository = itemsRepository;
        this.items = itemsRepository.getInventory();
        this.balance = 0;
    }
    // Méthode pour afficher les articles du magasin
    Shop.prototype.showItems = function () {
        console.log("Voici les articles du magasin :");
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("- ".concat(item.name, ", prix : ").concat(item.value, "\u20AC, qualit\u00E9 : ").concat(item.quality));
        }
    };
    // Méthode pour afficher le solde du magasin
    Shop.prototype.showBalance = function () {
        console.log("Le solde du magasin est de ".concat(this.balance, "\u20AC"));
    };
    // Méthode pour mettre à jour les articles du magasin
    Shop.prototype.updateItems = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.update();
        }
        this.itemsRepository.saveInventory(this.items);
    };
    // Méthode pour vendre un article
    Shop.prototype.sellItem = function (itemName) {
        var itemIndex = this.items.findIndex(function (item) { return item.name === itemName; });
        if (itemIndex >= 0) {
            var item = this.items[itemIndex];
            this.balance += item.value;
            this.items.splice(itemIndex, 1);
            console.log("Vous avez vendu l'article \"".concat(itemName, "\" pour ").concat(item.value, "\u20AC"));
        }
        else {
            console.log("L'article \"".concat(itemName, "\" n'a pas \u00E9t\u00E9 trouv\u00E9 dans le magasin"));
        }
        this.itemsRepository.saveInventory(this.items);
    };
    return Shop;
}());
exports.Shop = Shop;
