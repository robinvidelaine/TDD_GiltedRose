
import { Shop } from "./Shop/Shop";
import { ItemsRepository } from "./Item/ItemsRepository";
// Classe principale de l'application
export class App {
  // Référence vers le magasin
  private shop: Shop;
  private filePath = "./app/items.json";

  // Constructeur qui initialise le magasin
  constructor() {
    const itemsRepository = new ItemsRepository(this.filePath);
    this.shop = new Shop(itemsRepository);
  }







  public  start() {
    // Afficher les options de l'application
    console.log("1. Afficher les articles");
    console.log("2. Afficher le solde");
    console.log("3. Mettre à jour les articles");
    console.log("4. Vendre un article");
    console.log("5. Quitter l'application");
    console.log("Choisissez une option :");
  
    // Demander à l'utilisateur de choisir une option
    process.stdin.once("data", (response) => {
      // Convertir la réponse en entier
      const userInput = parseInt(response.toString().trim());
      // Si l'utilisateur souhaite connaître la valeur d'un produit
  
      
  
      
        switch (userInput) {
          case 1:
            this.shop.showItems();
            this.AutreChoixOuArret();
            break;
          case 2:
            this.shop.showBalance();
            this.AutreChoixOuArret();
            break;
          case 3:
            this.shop.updateItems();
            this.AutreChoixOuArret();
            break;
          case 4:
            console.log("Entrez le nom de l'article à vendre :");
            process.stdin.once("data", (itemName) => {
              // Vendre l'article en utilisant la méthode sellProduct
              this.shop.sellItem(itemName.toString().trim());
              // Afficher un message de confirmation à l'utilisateur
              console.log(`L'article "${itemName}" a été vendu.`);
              this.AutreChoixOuArret();
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
  }
  public AutreChoixOuArret(){
    console.log("Voulez-vous afficher un autre choix ou arrêter le programme (O/N) ?");
  process.stdin.once("data", (response) => {
    // Convert the response to a string and trim any whitespace
    const userInput = response.toString().trim();
    if (userInput === "O") {
      // If the user wants to see another choice, display the options again
      this.start();
    } else {
      // Otherwise, exit the program
      console.log("Au revoir !");
      process.exit(0);
    }
  });
  }
}