import { Item } from "../Item/Item";
import { ItemsRepository } from "../Item/ItemsRepository";

// Classe Shop qui gère les articles et le solde du magasin
export class Shop {
  // Référence vers le répository des articles
  private itemsRepository: ItemsRepository;
  // Tableau des articles du magasin
  private items: Item[];
  // Solde du magasin
  private balance: number;

  // Constructeur qui initialise les propriétés
  constructor(itemsRepository: ItemsRepository) {
    this.itemsRepository = itemsRepository;
    this.items = itemsRepository.getInventory();
    this.balance = 0;
  }

  // Méthode pour afficher les articles du magasin
  public showItems() {
    console.log("Voici les articles du magasin :");
    for (const item of this.items) {
      console.log(`- ${item.name}, prix : ${item.value}€, qualité : ${item.quality}`);
    }
  }

  // Méthode pour afficher le solde du magasin
  public showBalance() {
    console.log(`Le solde du magasin est de ${this.balance}€`);
  }

  // Méthode pour mettre à jour les articles du magasin
  public updateItems() {
    for (const item of this.items) {
      item.update();
    }
    this.itemsRepository.saveInventory(this.items);
  }

  // Méthode pour vendre un article
  public sellItem(itemName: string) {
    const itemIndex = this.items.findIndex(item => item.name === itemName);
    if (itemIndex >= 0) {
      const item = this.items[itemIndex];
      this.balance += item.value;
      this.items.splice(itemIndex, 1);
      console.log(`Vous avez vendu l'article "${itemName}" pour ${item.value}€`);
    } else {
      console.log(`L'article "${itemName}" n'a pas été trouvé dans le magasin`);
    }
    this.itemsRepository.saveInventory(this.items);
  }
}