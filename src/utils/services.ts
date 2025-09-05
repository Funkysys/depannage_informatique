export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Nettoyage",
    description:
      "Nettoyage physique et/ou informatique de votre ordinateur comprenant les vérifications de sécruité.",
  },
  {
    name: "Installation",
    description: "Installation de logiciels et de matériel.",
  },
  {
    name: "Optimisation",
    description:
      "Amélioration des performances de votre ordinateur selon votre usage.",
  },
  {
    name: "Développement Web",
    description:
      "Création et développement de votre projet de site internet ou application web.",
  },
  {
    name: "Réparation",
    description:
      "Réparation d’ordinateur et de périphériques ou à défaut conseils pour le remplacement.",
  },
];
