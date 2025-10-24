export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Marie Dubois",
    rating: 5,
    comment:
      "Intervention très rapide pour mon PC qui ne démarrait plus. Antoine a trouvé le problème en 10 minutes et l'a résolu sur place. Très professionnel !",
    date: "Il y a 2 semaines",
    service: "Dépannage PC",
  },
  {
    id: 2,
    name: "Jean-Pierre L.",
    rating: 4,
    comment:
      "Bon conseil pour l'achat de mon ordinateur. Petit délai d'attente mais ça valait le coup. Prix correct.",
    date: "Il y a 1 mois",
    service: "Conseil achat",
  },
  {
    id: 3,
    name: "Sophie Martin",
    rating: 5,
    comment:
      "Installation de mon réseau Wi-Fi impeccable. Explications claires et tarif très correct. Je recommande vivement !",
    date: "Il y a 3 semaines",
    service: "Installation réseau",
  },
  {
    id: 4,
    name: "Thomas R.",
    rating: 3,
    comment:
      "Récupération de données réussie mais plus cher que prévu. Bon travail malgré tout.",
    date: "Il y a 1 semaine",
    service: "Récupération données",
  },
  {
    id: 5,
    name: "Isabelle P.",
    rating: 5,
    comment:
      "Formation personnalisée sur Windows 11. Très pédagogue et patient. Ma grand-mère de 85 ans a enfin compris !",
    date: "Il y a 2 mois",
    service: "Formation",
  },
  {
    id: 6,
    name: "Marc D.",
    rating: 4,
    comment:
      "Changement de carte mère effectué rapidement. Petit bémol sur le délai car Antoine ne vend pas de pièces mais une fois la pièce reçue, l'installation a été rapide et efficace.",
    date: "Il y a 5 jours",
    service: "Réparation écran",
  },
];
