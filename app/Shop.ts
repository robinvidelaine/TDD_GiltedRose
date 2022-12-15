import { Item } from "./Item/Item";
import { ItemsRepository } from "./Item/ItemsRepository";

// Classe Shop qui gère les articles dans un magasin
export class Shop {
  // Instance de ItemsRepository pour accéder et modifier les articles
  private itemsRepository: ItemsRepository;

  constructor(itemsRepository: ItemsRepository) {
    this.itemsRepository = itemsRepository;
  }

  // Méthode pour mettre à jour les articles dans l'inventaire
  updateItems(): void {
    // Obtenir l'inventaire des articles
    const items = this.itemsRepository.getInventory();
    // Parcourir les articles dans l'inventaire
    for (let i = 0; i < items.length; i++) {
      // Mettre à jour l'article
      items[i].update();
    }
    // Enregistrer les modifications dans l'inventaire
    this.itemsRepository.saveInventory(items);
  }

  saveInventory(items) {
    this.itemsRepository.saveInventory(items);
  }

  getInventory() {
    return this.itemsRepository.getInventory();
  }

  // Méthode pour obtenir la valeur d'un produit
  getProductValue(name: string): number {
    // Obtenir l'inventaire des articles
    const items = this.itemsRepository.getInventory();
    // Trouver l'article avec le nom spécifié
    const item = items.find(i => i.name === name);
    // Retourner la valeur de l'article
    return item ? item.quality : 0;
  }

  // Méthode pour vendre un article
  sellProduct(name: string): void {
    // Obtenir l'inventaire des articles
    const items = this.itemsRepository.getInventory();
    // Trouver l'article avec le nom spécifié
    const itemIndex = items.findIndex(i => i.name === name);
    // Supprimer l'article de l'inventaire
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
    }
    // Enregistrer les modifications dans l'inventaire
    this.itemsRepository.saveInventory(items);
  }
}