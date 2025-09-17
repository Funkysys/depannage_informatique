export type Pricing = {
  service: string;
  price: string;
};

export const pricingTable: Pricing[] = [
  { service: "Déplacement", price: "30€ moins de 20km puis 0.5€/km" },
  { service: "Accompagnement numérique", price: "40€/h" },
  { service: "Diagnostic", price: "45€ (offert en cas de prestation)" },
  {
    service: "Réinstallation de l'os",
    price: "90€ windows / linux, 140€ macOS",
  },
  { service: "Récupération de données", price: "sur devis" },
  { service: "Changement de disque dur et copie", price: "à partir de 100€" },
  { service: "Montage sur mesure", price: "à partir de 70€" },
  {
    service: "Nettoyage et dépoussiérage",
    price: "entre 50 et 200€ selon modèle",
  },
  { service: "Optimisation", price: "100€" },
  { service: "Installation", price: "à partir de 70€" },
  { service: "Réparation", price: "sur devis" },
  { service: "Contrat de maintenance", price: "sur devis" },
  { service: "Développement", price: "400€/jour" },
];
