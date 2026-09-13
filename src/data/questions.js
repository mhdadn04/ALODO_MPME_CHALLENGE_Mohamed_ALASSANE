/**
 * DATASET DES 12 QUESTIONS DU DIAGNOSTIC ALODO MPME
 * 
 * Ancrage terrain : Bénin / UEMOA
 * Organisé en 3 dimensions clés (Formalisation, Comptabilité & Gestion, Digitalisation & Commercial)
 * Chaque question intègre sa justification métier (rationale) pour la soutenance.
 */

const questions = [
  // =========================================================================
  // DIMENSION 1 : FORMALISATION & CONFORMITÉ LÉGALE (4 questions)
  // =========================================================================
  {
    id: 'F1',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation & Conformité',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Quel est le statut juridique officiel de votre entreprise auprès des autorités béninoises ?',
    description: 'Le statut légal (RCCM, Etablissement, SARL) détermine la capacité juridique à signer des contrats et ouvrir un compte bancaire pro.',
    rationale: 'Au Bénin, la grande majorité des MPME démarrent dans l\'informel complet. L\'enregistrement au RCCM (Registre du Commerce et du Crédit Mobilier) via l\'APIEX est la première porte d\'entrée vers le système financier formel.',
    options: [
      { id: 'F1_a', label: 'Activité non enregistrée (Informel / Exercice en nom propre sans document)', maturity: 0, points: 0 },
      { id: 'F1_b', label: 'Entreprise Individuelle / Établissement (Immatriculation RCCM ou enregistrement basique)', maturity: 1, points: 1.5 },
      { id: 'F1_c', label: 'Société commerciale structurée (SARL, SAS, SUARL enregistrée à l\'APIEX avec statut officiel)', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'F2',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation & Conformité',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Comment gérez-vous la séparation des finances de l\'entreprise et de vos dépenses personnelles ?',
    description: 'Mélanger la caisse du foyer et la caisse du commerce empêche d\'évaluer le vrai bénéfice de l\'activité.',
    rationale: 'C\'est l\'erreur #1 des dirigeants de MPME en Afrique de l\'Ouest : la poche du promoteur est confondue avec la caisse de l\'entreprise. Sans compte pro (bancaire ou MoMo Marchand), une banque ne peut pas analyser la solvabilité.',
    options: [
      { id: 'F2_a', label: 'Confusion totale : les recettes de l\'entreprise servent directement aux dépenses personnelles/familiales', maturity: 0, points: 0 },
      { id: 'F2_b', label: 'Séparation partielle : utilisation d\'un compte personnel secondaire ou cahier de prélèvements', maturity: 1, points: 1.5 },
      { id: 'F2_c', label: 'Séparation stricte : compte bancaire professionnel dédié ou compte Mobile Money Marchand au nom de l\'entreprise', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'F3',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation & Conformité',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'Disposez-vous d\'un Identifiant Fiscal Unique (IFU) à jour et fonctionnel ?',
    description: 'L\'IFU est l\'immatriculation fiscale obligatoire au Bénin pour toute transaction formelle et facturation.',
    rationale: 'Depuis la réforme fiscale au Bénin, l\'IFU est exigé pour l\'ouverture de comptes pro, la douane, les appels d\'offres et les transactions inter-entreprises. Sans IFU, une MPME est juridiquement invisible.',
    options: [
      { id: 'F3_a', label: 'Non, aucun numéro IFU attribué', maturity: 0, points: 0 },
      { id: 'F3_b', label: 'IFU personnel du dirigeant uniquement (non rattaché à l\'entreprise)', maturity: 1, points: 0.5 },
      { id: 'F3_c', label: 'IFU professionnel valide rattaché au nom commercial ou à la société', maturity: 2, points: 1 }
    ]
  },
  {
    id: 'F4',
    dimension: 'formalisation',
    dimensionLabel: 'Formalisation & Conformité',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'Comment gérez-vous vos obligations fiscales (Taxe Professionnelle Synthétique - TPS ou régimes réels) ?',
    description: 'La régularité fiscale prémunit contre les redressements et conditionne l\'accès aux marchés publics.',
    rationale: 'Au Bénin, la TPS s\'applique aux petites entreprises. Être en règle avec la DGI (Direction Générale des Impôts) est indispensable pour obtenir une attestation de régularité fiscale, document clé pour l\'accès au crédit.',
    options: [
      { id: 'F4_a', label: 'Aucune déclaration ni paiement d\'impôt ou taxe professionnelle', maturity: 0, points: 0 },
      { id: 'F4_b', label: 'Déclarations occasionnelles ou paiements avec régularisations en cas de contrôle', maturity: 1, points: 1 },
      { id: 'F4_c', label: 'Déclarations régulières dans les délais et quittances fiscales conservées', maturity: 2, points: 2 }
    ]
  },

  // =========================================================================
  // DIMENSION 2 : COMPTABILITÉ & GESTION FINANCIÈRE (4 questions)
  // =========================================================================
  {
    id: 'C1',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Quel est votre outil principal pour suivre les recettes et les dépenses au quotidien ?',
    description: 'Le suivi quotidien des flux financiers est le prérequis au calcul des marges et du résultat.',
    rationale: 'Dans l\'économie réelle béninoise, la comptabilité se fait souvent "dans la tête" ou sur un cahier de caisse physique. L\'objectif est de faire évoluer la MPME du cahier vers des outils de suivi digitalisés ou un expert-comptable.',
    options: [
      { id: 'C1_a', label: 'Aucun support écrit : suivi "de tête" ou mémoire informelle', maturity: 0, points: 0 },
      { id: 'C1_b', label: 'Cahier de caisse physique manuscrit ou tableur Excel / Google Sheets simple', maturity: 1, points: 1.5 },
      { id: 'C1_c', label: 'Logiciel de gestion comptable (QuickBooks, Odoo, Sage) ou cabinet comptable partenaire', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'C2',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'À quelle fréquence établissez-vous un état financier de votre activité (compte de résultat / bilan) ?',
    description: 'Les états financiers récapitulent le Chiffre d\'Affaires net, les charges et la rentabilité effective.',
    rationale: 'Une banque ou un fonds d\'investissement exige des états financiers certifiés (SYSCOHADA révisé). Sans bilan ni compte de résultat, la demande de financement est rejetée d\'office.',
    options: [
      { id: 'C2_a', label: 'Jamais produit : la rentabilité n\'est pas calculée formellement', maturity: 0, points: 0 },
      { id: 'C2_b', label: 'Bilan comptable annuel établi principalement pour la déclaration fiscale', maturity: 1, points: 1 },
      { id: 'C2_c', label: 'Suivi mensuel/trimestriel des marges et bilan annuel certifié conforme au SYSCOHADA', maturity: 2, points: 2 }
    ]
  },
  {
    id: 'C3',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'Comment êtes-vous organisé pour l\'archivage des factures et justificatifs d\'achat/vente ?',
    description: 'Les pièces justificatives prouvent la réalité des flux en cas de contrôle ou d\'audit financier.',
    rationale: 'Beaucoup de MPME perdent leurs factures papier ou ne délivrent pas de reçus normés (ex: factures normalisées au Bénin). Cela fragilise la preuve du chiffre d\'affaires.',
    options: [
      { id: 'C3_a', label: 'Pas d\'archivage : les reçus et factures papier sont fréquemment égarés', maturity: 0, points: 0 },
      { id: 'C3_b', label: 'Classement papier physique dans des classeurs de caisse', maturity: 1, points: 0.5 },
      { id: 'C3_c', label: 'Numérisation et classement d\'archivage comptable structuré (drive / GED)', maturity: 2, points: 1 }
    ]
  },
  {
    id: 'C4',
    dimension: 'comptabilite',
    dimensionLabel: 'Comptabilité & Gestion',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'Comment anticipez-vous les besoins de trésorerie pour les 3 prochains mois ?',
    description: 'Anticiper les décalages de paiement entre clients et fournisseurs évite les ruptures de cash.',
    rationale: 'Le manque de trésorerie est la cause #1 de faillite des petites entreprises. Pouvoir anticiper le BFR (Besoin en Fonds de Roulement) montre un pilotage averti.',
    options: [
      { id: 'C4_a', label: 'Gestion au jour le jour : paiement des charges au fur et à mesure des rentrées de caisse', maturity: 0, points: 0 },
      { id: 'C4_b', label: 'Estimation globale des échéances à venir (loyer, salaires, fournisseurs) sans tableau formel', maturity: 1, points: 1 },
      { id: 'C4_c', label: 'Plan de trésorerie prévisionnel glissant mis à jour chaque mois', maturity: 2, points: 2 }
    ]
  },

  // =========================================================================
  // DIMENSION 3 : DIGITALISATION & CANAUX COMMERCIAUX (4 questions)
  // =========================================================================
  {
    id: 'D1',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'vitale', // 3 pts max
    maxPoints: 3,
    question: 'Quels sont vos canaux principaux pour attirer et interagir avec vos clients ?',
    description: 'La digitalisation de la relation client élargit la zone de chalandise et sécurise les ventes.',
    rationale: 'En Afrique de l\'Ouest, WhatsApp Business est le véritable "site web" de la MPME (catalogues, messages automatiques, statuts). Un commerce reposant uniquement sur le passage physique est très vulnérable.',
    options: [
      { id: 'D1_a', label: 'Bouche-à-oreille et présence physique (boutique/atelier) uniquement', maturity: 0, points: 0 },
      { id: 'D1_b', label: 'WhatsApp classique personnel et publications occasionnelles sur réseaux sociaux', maturity: 1, points: 1.5 },
      { id: 'D1_c', label: 'WhatsApp Business configuré (Catalogue + Réponses auto) et canaux digitaux professionnels (Facebook/Instagram Pro, Google Business ou site web)', maturity: 2, points: 3 }
    ]
  },
  {
    id: 'D2',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'importante', // 2 pts max
    maxPoints: 2,
    question: 'Quel niveau d\'outillage numérique utilisez-vous dans les opérations quotidiennes ?',
    description: 'La numérisation des tâches répétitives (commandes, stocks, factures) libère du temps au dirigeant.',
    rationale: 'Le passage du bloc-note au smartphone puis aux applications métiers (applications de caisse mobile, gestion de stock) est l\'indicateur direct de la maturité digitale d\'une MPME.',
    options: [
      { id: 'D2_a', label: 'Opérations 100% manuelles et papier (aucun outil digital)', maturity: 0, points: 0 },
      { id: 'D2_b', label: 'Usage basique du smartphone (appels, SMS, calculatrice, messagerie)', maturity: 1, points: 1 },
      { id: 'D2_c', label: 'Utilisation d\'applications mobiles/web métiers (caisse POS, gestion de stock, facturation numérique)', maturity: 2, points: 2 }
    ]
  },
  {
    id: 'D3',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'Quels moyens de paiement acceptez-vous auprès de votre clientèle ?',
    description: 'Les paiements électroniques (Mobile Money, carte) créent une traçabilité financière vérifiable.',
    rationale: 'Au Bénin, MTN MoMo et Moov Money sont omniprésents. Mais utiliser un compte perso pour les encaissements ne crée pas d\'historique bancaire pro certifiable. L\'utilisation de comptes marchands (FedaPay, KKiaPay, MoMo Marchand) est le vrai critère de maturité.',
    options: [
      { id: 'D3_a', label: 'Espèces (Cash) exclusivement', maturity: 0, points: 0 },
      { id: 'D3_b', label: 'Mobile Money occasionnel sur numéro personnel du dirigeant', maturity: 1, points: 0.5 },
      { id: 'D3_c', label: 'Mobile Money Marchand officiel, TPE/Carte ou agrégateur de paiement en ligne (FedaPay, KKiaPay)', maturity: 2, points: 1 }
    ]
  },
  {
    id: 'D4',
    dimension: 'digitalisation',
    dimensionLabel: 'Digitalisation & Commercial',
    weight: 'secondaire', // 1 pt max
    maxPoints: 1,
    question: 'À quelle fréquence animez-vous vos canaux digitaux et suivez-vous vos prospects ?',
    description: 'La régularité des publications et la réactivité commerciale maintiennent l\'engagement des clients.',
    rationale: 'Avoir une page Facebook ou WhatsApp ne suffit pas. La régularité de l\'animation commerciale démontre la capacité de la MPME à générer un flux de ventes prévisible.',
    options: [
      { id: 'D4_a', label: 'Jamais ou moins d\'une fois par mois', maturity: 0, points: 0 },
      { id: 'D4_b', label: 'Publication irrégulière, uniquement en cas de nouveauté ou de promotion', maturity: 1, points: 0.5 },
      { id: 'D4_c', label: 'Animation régulière structurée (statuts quotidiens, publications prévues, suivi des devis)', maturity: 2, points: 1 }
    ]
  }
];

module.exports = questions;
