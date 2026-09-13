const questions = require('../data/questions');
const { evaluateGoldenRules } = require('./rules');

function calculateDiagnosticResult(userAnswers) {
  let totalPointsObtained = 0;
  let totalPointsMax = 0;

  // Structure de suivi des scores par dimension
  const dimensionScores = {
    formalisation: { obtained: 0, max: 0, label: 'Formalisation' },
    comptabilite: { obtained: 0, max: 0, label: 'Comptabilité & Gestion' },
    digitalisation: { obtained: 0, max: 0, label: 'Digitalisation & Commercial' }
  };

  const pointsForts = [];
  const axesAmelioration = [];

  // Parcours des questions et calcul
  questions.forEach(q => {
    totalPointsMax += q.maxPoints;
    dimensionScores[q.dimension].max += q.maxPoints;

    const selectedOptionId = userAnswers[q.id];
    const selectedOption = q.options.find(opt => opt.id === selectedOptionId);

    if (selectedOption) {
      totalPointsObtained += selectedOption.points;
      dimensionScores[q.dimension].obtained += selectedOption.points;

      // Identification des points forts (maturité 2) et axes d'amélioration (maturité 0)
      if (selectedOption.maturity === 2) {
        pointsForts.push({
          dimension: q.dimensionLabel,
          title: q.question,
          detail: selectedOption.label
        });
      } else if (selectedOption.maturity === 0) {
        axesAmelioration.push({
          dimension: q.dimensionLabel,
          title: q.question,
          detail: selectedOption.label,
          recommendation: q.description
        });
      }
    }
  });

  // Calcul des pourcentages (0 à 100)
  const globalScore = Math.round((totalPointsObtained / totalPointsMax) * 100);

  const dimensionResults = {};
  Object.keys(dimensionScores).forEach(dimKey => {
    const dim = dimensionScores[dimKey];
    dimensionResults[dimKey] = {
      label: dim.label,
      score: Math.round((dim.obtained / dim.max) * 100),
      obtained: dim.obtained,
      max: dim.max
    };
  });

  // Évaluation des alertes prioritaires (Règles d'Or)
  const goldenAlerts = evaluateGoldenRules(userAnswers);

  // Synthèse globale et profil de l'entreprise
  let profileTitle = '';
  let globalRecommendation = '';

  if (globalScore < 40) {
    profileTitle = 'MPME Informelle / Phase de Démarrage';
    globalRecommendation = 'Votre entreprise présente une forte vulnérabilité structurelle. La priorité absolue est d\'amorcer la formalisation administrative et d\'instaurer un suivi de caisse quotidien.';
  } else if (globalScore < 70) {
    profileTitle = 'MPME en Cours de Structuration';
    globalRecommendation = 'Votre entreprise possède de bons fondamentaux, mais manque de régularité dans la gestion et le suivi numérique. Un effort sur la tenue comptable et les canaux digitaux vous permettra de franchir un cap.';
  } else {
    profileTitle = 'MPME Structurée / Prête pour l\'Accélération';
    globalRecommendation = 'Excellente maturité globale. Votre entreprise dispose d\'une organisation solide. Vous êtes dans de très bonnes conditions pour solliciter des financements ou partenariats d\'envergure.';
  }

  return {
    globalScore,
    profileTitle,
    globalRecommendation,
    dimensions: dimensionResults,
    pointsForts,
    axesAmelioration,
    goldenAlerts
  };
}

module.exports = { calculateDiagnosticResult };
