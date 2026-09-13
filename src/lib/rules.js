/**
 * Évaluation des Règles d'Or (Alertes prioritaires)
 * Détecte les anomalies critiques indépendamment du score global.
 */
function evaluateGoldenRules(userAnswers) {
  const alerts = [];

  // Règle 1 : Société enregistrée mais AUCUNE comptabilité
  if (userAnswers.F1 === 'F1_c' && userAnswers.C1 === 'C1_a') {
    alerts.push({
      level: 'CRITIQUE',
      title: 'Société enregistrée sans aucun suivi comptable',
      message: 'Votre entreprise possède un statut juridique formel (RCCM), mais votre gestion financière est totalement informelle. Cela vous expose à des risques fiscaux graves et empêche toute analyse bancaire.'
    });
  }

  // Règle 2 : Pas de séparation des comptes pro / perso
  if (userAnswers.F2 === 'F2_a') {
    alerts.push({
      level: 'MAJEUR',
      title: 'Confusion des patrimoines personnel et professionnel',
      message: 'Mélanger vos dépenses personnelles et professionnelles rend impossible l\'évaluation de la rentabilité réelle de votre activité et constitue un frein absolu pour obtenir un financement.'
    });
  }

  // Règle 3 : Gestion financière au jour le jour sans prévision
  if (userAnswers.C4 === 'C4_a') {
    alerts.push({
      level: 'MAJEUR',
      title: 'Risque élevé de rupture de trésorerie',
      message: 'Piloter au jour le jour sans prévisionnel de trésorerie à 3 mois vous expose à des cessations de paiement brutales face aux imprévus.'
    });
  }

  // Règle 4 : Paiements en cash uniquement
  if (userAnswers.D3 === 'D3_a') {
    alerts.push({
      level: 'MODÉRÉ',
      title: 'Absence d\'historique de paiement traçable',
      message: 'En acceptant uniquement des espèces, vous ne créez aucun historique bancaire ou Mobile Money certifiable pour prouver votre chiffre d\'affaires réel.'
    });
  }

  // Règle 5 : Invisibilité numérique totale
  if (userAnswers.D1 === 'D1_a' && userAnswers.D2 === 'D2_a') {
    alerts.push({
      level: 'MODÉRÉ',
      title: 'Dépendance exclusive au canal physique',
      message: 'Votre entreprise ne dispose d\'aucun outil numérique ni canal de communication digital, ce qui limite votre zone de chalandise et votre réactivité.'
    });
  }

  return alerts;
}

module.exports = { evaluateGoldenRules };
