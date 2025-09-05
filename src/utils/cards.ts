export interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

export const cards: CardData[] = [
  {
    title: "Réparation PC",
    description:
      "Remplacement de composants, nettoyage, optimisation et dépannage matériel.",
    imageUrl: "/images/pc-repair.jpg",
    imageAlt: "Réparation d'un PC de bureau",
  },
  {
    title: "Assistance à domicile",
    description:
      "Intervention rapide chez vous pour tous vos besoins informatiques.",
    imageUrl: "/images/home-assist.jpg",
    imageAlt: "Technicien à domicile",
  },
  {
    title: "Installation réseau",
    description:
      "Mise en place et sécurisation de votre réseau domestique ou professionnel.",
    imageUrl: "/images/network.jpg",
    imageAlt: "Installation réseau",
  },
];
