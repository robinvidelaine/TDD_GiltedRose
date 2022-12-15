"use strict";
exports.__esModule = true;
exports.App = void 0;
var Shop_1 = require("./Shop/Shop");
var ItemsRepository_1 = require("./Item/ItemsRepository");
// Classe principale de l'application
var App = /** @class */ (function () {
    // Constructeur qui initialise le magasin
    function App() {
        this.filePath = "./app/items.json";
        var itemsRepository = new ItemsRepository_1.ItemsRepository(this.filePath);
        this.shop = new Shop_1.Shop(itemsRepository);
    }
    App.prototype.start = function () {
        var _this = this;
        // Afficher les options de l'application
        console.log("1. Afficher les articles");
        console.log("2. Afficher le solde");
        console.log("3. Mettre à jour les articles");
        console.log("4. Vendre un article");
        console.log("5. Quitter l'application");
        console.log("Choisissez une option :");
        // Demander à l'utilisateur de choisir une option
        process.stdin.once("data", function (response) {
            // Convertir la réponse en entier
            var userInput = parseInt(response.toString().trim());
            // Si l'utilisateur souhaite connaître la valeur d'un produit
            switch (userInput) {
                case 1:
                    _this.shop.showItems();
                    _this.AutreChoixOuArret();
                    break;
                case 2:
                    _this.shop.showBalance();
                    _this.AutreChoixOuArret();
                    break;
                case 3:
                    _this.shop.updateItems();
                    _this.AutreChoixOuArret();
                    break;
                case 4:
                    console.log("Entrez le nom de l'article à vendre :");
                    process.stdin.once("data", function (itemName) {
                        // Vendre l'article en utilisant la méthode sellProduct
                        _this.shop.sellItem(itemName.toString().trim());
                        // Afficher un message de confirmation à l'utilisateur
                        console.log("L'article \"".concat(itemName, "\" a \u00E9t\u00E9 vendu."));
                        _this.AutreChoixOuArret();
                    });
                    break;
                case 5:
                    console.log("Au revoir !");
                    break;
                default:
                    // Code à exécuter si l'utilisateur n'a pas choisi un des cinq choix
                    break;
            }
        });
    };
    App.prototype.AutreChoixOuArret = function () {
        var _this = this;
        console.log("Voulez-vous afficher un autre choix ou arrêter le programme (O/N) ?");
        process.stdin.once("data", function (response) {
            // Convert the response to a string and trim any whitespace
            var userInput = response.toString().trim();
            if (userInput === "O") {
                // If the user wants to see another choice, display the options again
                _this.start();
            }
            else {
                // Otherwise, exit the program
                console.log("Au revoir !");
                process.exit(0);
            }
        });
    };
    return App;
}());
exports.App = App;
