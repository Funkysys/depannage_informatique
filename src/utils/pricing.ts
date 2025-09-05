export type Pricing = {
  service: string;
  price: string;
};

export const pricingTable: Pricing[] = [
  { service: "Diagnostic", price: "45€ (offert en cas de prestation)" },
  { service: "Nettoyage", price: "45-90€/heure selon modèle" },
  { service: "Optimisation", price: "90€/heure" },
  { service: "Installation", price: "90€/heure" },
  { service: "Réparation", price: "100€/heure" },
  { service: "Développement", price: "350€/jour" },
];
