export type Pricing = {
  service: string;
  price: string;
};

export const pricingTable: Pricing[] = [
  { service: "Diagnostic", price: "30€ (offert en cas de prestation)" },
  { service: "Nettoyage", price: "30-50€/heure selon modèle" },
  { service: "Optimisation", price: "40€/heure" },
  { service: "Installation", price: "40€/heure" },
  { service: "Réparation", price: "50€/heure" },
  { service: "Développement", price: "350€/jour" },
];
