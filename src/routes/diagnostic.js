const express = require('express');
const router = express.Router();
const questions = require('../data/questions');
const { calculateDiagnosticResult } = require('../lib/scoring');

// Middelware pour s'assurer que la session de réponses est initialisée
router.use((req, res, next) => {
  if (!req.session.answers) {
    req.session.answers = {};
  }
  next();
});

// ÉCRAN 1 : Introduction
router.get('/', (req, res) => {
  res.render('intro', {
    totalQuestions: questions.length,
    estimatedMinutes: 3,
    dimensionsCount: 3
  });
});

// ÉCRAN 2 : Affichage d'une question
router.get('/diagnostic/question/:index', (req, res) => {
  const currentIndex = parseInt(req.params.index, 10);

  // Redirection si index invalide
  if (isNaN(currentIndex) || currentIndex < 0) {
    return res.redirect('/diagnostic/question/0');
  }

  // Si on dépasse la dernière question, redirection vers le résultat
  if (currentIndex >= questions.length) {
    return res.redirect('/diagnostic/resultat');
  }

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  
  // Réponse précédemment sélectionnée si existante
  const savedAnswer = req.session.answers[currentQuestion.id] || null;

  res.render('question', {
    question: currentQuestion,
    currentIndex,
    totalQuestions,
    progressPercent,
    savedAnswer,
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalQuestions - 1
  });
});

// POST : Traitement de la réponse et enregistrement en session
router.post('/diagnostic/answer', (req, res) => {
  const { questionId, optionId, currentIndex, action } = req.body;
  const idx = parseInt(currentIndex, 10);

  // Sauvegarde de la réponse si sélectionnée
  if (questionId && optionId) {
    req.session.answers[questionId] = optionId;
  }

  // Navigation Précédent / Suivant
  if (action === 'prev' && idx > 0) {
    return res.redirect(`/diagnostic/question/${idx - 1}`);
  }

  if (idx < questions.length - 1) {
    return res.redirect(`/diagnostic/question/${idx + 1}`);
  } else {
    return res.redirect('/diagnostic/resultat');
  }
});

// ÉCRAN 3 : Rapport et résultat final
router.get('/diagnostic/resultat', (req, res) => {
  // Vérifier qu'au moins une réponse a été donnée
  const answeredCount = Object.keys(req.session.answers).length;
  if (answeredCount === 0) {
    return res.redirect('/');
  }

  const report = calculateDiagnosticResult(req.session.answers);

  res.render('resultat', {
    report,
    totalQuestions: questions.length,
    answeredCount
  });
});

// Réinitialisation du diagnostic
router.get('/diagnostic/reset', (req, res) => {
  req.session.answers = {};
  res.redirect('/');
});

module.exports = router;
