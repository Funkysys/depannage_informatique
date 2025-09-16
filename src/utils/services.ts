export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Nettoyage",
    description:
      "Nettoyage physique et/ou informatique de votre ordinateur comprenant les vérifications de sécurité.",
  },
  {
    name: "Installation",
    description:
      "Installation de logiciels, de systèmes d'exploitation et de matériel.",
  },
  {
    name: "Optimisation",
    description:
      "Amélioration des performances de votre ordinateur selon votre usage.",
  },
  {
    name: "Réparation",
    description:
      "Réparation d’ordinateur et de périphériques ou à défaut conseils pour le remplacement.",
  },
  {
    name: "Montage sur mesure",
    description:
      "Création et assemblage de votre PC sur mesure selon vos besoins.",
  },
  {
    name: "Développement Web",
    description:
      "Création et développement de votre projet de site internet ou application web. La personnalisation est au cœur de notre démarche.",
  },
];
