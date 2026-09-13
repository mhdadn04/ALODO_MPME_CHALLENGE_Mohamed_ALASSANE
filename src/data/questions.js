const questions = [
  // ==========================================
  // DIMENSION 1 : FORMALISATION (4 questions)
  // ==========================================
  {
    id: 'F1',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Quel est le statut juridique actuel de votre entreprise ?',
    description: 'Le statut légal détermine la crédibilité et l\'accès aux opportunités formelles.',
    options: [
      { id: 'F1_a', label: 'Non déclaré / Informel', maturity: 0, points: 0 },
      { id: 'F1_b', label: 'Auto-entrepreneur / Etablissement individuel', maturity: 1, points: 1.5 },
      { id: 'F1_c', label: 'SARL, SASU ou société enregistrée (RCCM + IFU)', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'F2',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Séparez-vous vos finances personnelles et professionnelles ?',
    description: 'Séparer ses comptes est la première étape pour évaluer la vraie rentabilité de l\'activité.',
    options: [
      { id: 'F2_a', label: 'Jamais, tout est sur la même caisse / même compte', maturity: 0, points: 0 },
      { id: 'F2_b', label: 'Partiellement, je note ce que je retire', maturity: 1, points: 1.5 },
      { id: 'F2_c', label: 'Oui, compte bancaire/Mobile Money professionnel strictement dédié', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'F3',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'Quels documents administratifs clés possédez-vous à jour ?',
    description: 'Ces documents prouvent la conformité fiscale et administrative.',
    options: [
      { id: 'F3_a', label: 'Aucun document', maturity: 0, points: 0 },
      { id: 'F3_b', label: 'Seulement l\'IFU (Identifiant Fiscal Unique)', maturity: 1, points: 0.5 },
      { id: 'F3_c', label: 'RCCM + IFU + Compte bancaire professionnel', maturity: 2, points: 1 }
    ]
  },
  {
    id: 'F4',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'Vos déclarations et obligations fiscales sont-elles à jour ?',
    description: 'La régularité fiscale conditionne l\'accès aux prêts bancaires et subventions.',
    options: [
      { id: 'F4_a', label: 'Non, je ne déclare rien actuellement', maturity: 0, points: 0 },
      { id: 'F4_b', label: 'Oui, mais avec des retards ou régularisations fréquentes', maturity: 1, points: 1 },
      { id: 'F4_c', label: 'Oui, parfaitement à jour et dans les délais', maturity: 2, points: 2 }
    ]
  },

  // ==========================================
  // DIMENSION 2 : COMPTABILITÉ (4 questions)
  // ==========================================
  {
    id: 'C1',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Comment tenez-vous le suivi quotidien des recettes et dépenses ?',
    description: 'La tenue de registres permet de piloter la trésorerie et d\'éviter les ruptures de cash.',
    options: [
      { id: 'C1_a', label: 'De tête / Au feeling, aucun registre écrit', maturity: 0, points: 0 },
      { id: 'C1_b', label: 'Sur un cahier de caisse ou un fichier Excel simple', maturity: 1, points: 1.5 },
      { id: 'C1_c', label: 'Via un logiciel comptable ou avec l\'aide d\'un comptable dédié', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'C2',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'À quelle fréquence produisez-vous des états financiers (bilan, compte de résultat) ?',
    description: 'Les états financiers formalisent la santé économique auprès des banques et investisseurs.',
    options: [
      { id: 'C2_a', label: 'Jamais produits', maturity: 0, points: 0 },
      { id: 'C2_b', label: 'Au moins une fois par an (bilan annuel)', maturity: 1, points: 1 },
      { id: 'C2_c', label: 'Mensuellement ou trimestriellement pour le suivi de gestion', maturity: 2, points: 2 }
    ]
  },
  {
    id: 'C3',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'Comment conservez-vous et classez-vous vos factures et pièces justificatives ?',
    description: 'Un bon archivage facilite les audits et la transparence financière.',
    options: [
      { id: 'C3_a', label: 'Aucun archivage (factures souvent perdues)', maturity: 0, points: 0 },
      { id: 'C3_b', label: 'Classement papier simple (classeurs de reçus)', maturity: 1, points: 0.5 },
      { id: 'C3_c', label: 'Archivage numérique structuré et synchronisé', maturity: 2, points: 1 }
    ]
  },
  {
    id: 'C4',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'Comment anticipez-vous votre trésorerie pour les 3 prochains mois ?',
    description: 'Prévoir les entrées et sorties de cash évite la cessation de paiement.',
    options: [
      { id: 'C4_a', label: 'Aucune anticipation, gestion au jour le jour', maturity: 0, points: 0 },
      { id: 'C4_b', label: 'Estimation approximative des entrées/sorties à venir', maturity: 1, points: 1 },
      { id: 'C4_c', label: 'Tableau de trésorerie prévisionnel régulièrement mis à jour', maturity: 2, points: 2 }
    ]
  },

  // ==========================================
  // DIMENSION 3 : DIGITALISATION (4 questions)
  // ==========================================
  {
    id: 'D1',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Comment vos clients vous trouvent-ils principalement aujourd\'hui ?',
    description: 'Diversifier ses canaux d\'acquisition garantit la pérennité du portefeuille client.',
    options: [
      { id: 'D1_a', label: 'Bouche-à-oreille et passage physique uniquement', maturity: 0, points: 0 },
      { id: 'D1_b', label: 'WhatsApp classique et page Facebook personnelle', maturity: 1, points: 1.5 },
      { id: 'D1_c', label: 'WhatsApp Business + Réseaux sociaux professionnels ou site web', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'D2',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'Quels outils numériques utilisez-vous au quotidien dans votre activité ?',
    description: 'L\'outillage numérique augmente la productivité et réduit les erreurs manuelles.',
    options: [
      { id: 'D2_a', label: 'Aucun outil numérique (tout en papier/oral)', maturity: 0, points: 0 },
      { id: 'D2_b', label: 'Smartphone simple (appels et messages)', maturity: 1, points: 1 },
      { id: 'D2_c', label: 'Applications de gestion, CRM ou logiciels métier dédiés', maturity: 2, points: 2 }
    ]
  },
  {
    id: 'D3',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'Quel est votre niveau d\'acceptation des paiements numériques ?',
    description: 'Digitaliser les paiements crée un historique financier certifiable.',
    options: [
      { id: 'D3_a', label: 'Espèces (Cash) uniquement', maturity: 0, points: 0 },
      { id: 'D3_b', label: 'Mobile Money occasionnel (compte personnel)', maturity: 1, points: 0.5 },
      { id: 'D3_c', label: 'Mobile Money marchand / Carte bancaire / Virement régulier', maturity: 2, points: 1 }
    ]
  },
  {
    id: 'D4',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'À quelle fréquence publiez-vous sur vos canaux digitaux professionnels ?',
    description: 'La régularité sur les canaux digitaux maintient le lien avec la clientèle.',
    options: [
      { id: 'D4_a', label: 'Jamais ou moins d\'une fois par mois', maturity: 0, points: 0 },
      { id: 'D4_b', label: 'De temps en temps, sans planning fixe', maturity: 1, points: 0.5 },
      { id: 'D4_c', label: 'Régulièrement avec un calendrier de publication', maturity: 2, points: 1 }
    ]
  }
];

module.exports = questions;
